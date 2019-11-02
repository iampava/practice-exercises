let fs = require('fs');

class DB {

    addPet(pet) {
        return readPets()
            .then(pets => {
                let newPetData = Object.assign({}, pet, {
                    id: generateRandomId(),
                    created: Date.now()
                });

                pets.push(newPetData);
                return writePets(pets).then(() => newPetData);
            });
    }

    deletePet(petId) {
        return readPets()
            .then(pets => {
                let initialSize = pets.length;
                pets = pets.filter(pet => pet.id != petId);

                if (pets.length === initialSize) {
                    // 404
                    throw (404);
                }
                return writePets(pets);
            })
    }

    deletePets(petIds) {
        return readPets()
            .then(pets => pets.filter(pet => !petIds.includes(pet.id)))
            .then(pets => writePets(pets))
            .catch(err => {
                throw 400;
            });
    }

    getAllPets() {
        return readPets().then(pets => pets);
    }

    getPetsByName(name) {
        return readPets().then(pets => {
            return pets.filter(pet => pet.name.toUpperCase().indexOf(name.toUpperCase()) === 0);
        })
    }

    getPetsPaginated(pageNo, pageSize = 5, name) {
        return readPets()
            .then(pets => pets.filter(pet => name === undefined || pet.name.toUpperCase().indexOf(name.toUpperCase()) === 0))
            .then(pets => {
                return pets.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
            });
    }

    getPet(petId) {
        return readPets().then(pets => {
            let pet = pets.find(pet => pet.id === petId);

            if (pet === undefined) {
                throw (404);
            }

            return pet;
        })
    }

    replacePet(petId, petInfo) {
        return readPets().then(pets => {
            let newPet = Object.assign({}, {
                id: petId
            }, petInfo);

            pets = pets.filter(pet => pet.id !== petId).concat([newPet]);
            return writePets(pets).then(() => newPet);
        })
    }

}

function generateRandomId() {
    return Math.floor(Math.random() * 100000 + Date.now() / 10000000);
}

function readPets() {
    return new Promise((resolve, reject) => {

        fs.readFile('server/db.json', {
            encoding: 'utf8'
        }, (err, data) => {
            if (err) {
                reject();
            }
            resolve(JSON.parse(data).pets);
        });
    });
}

function writePets(pets) {
    return new Promise((resolve, reject) => {
        fs.writeFile('server/db.json', JSON.stringify({
            pets
        }), {
            encoding: 'utf8'
        }, (err) => {
            if (err) {
                reject();
            }
            resolve();
        })
    });
}

module.exports = new DB();