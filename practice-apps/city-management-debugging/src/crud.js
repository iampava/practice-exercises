function insertFamilyAtAddress(city, address, name, people = [], pets = []) {
  city[address].push({
    id: Math.floor(Math.random() * 10000),
    name,
    address,
    people,
    pets
  });
}

function addFamilyMember(city, familyId, name, isPet) {
  for (let address of city) {
    let family = city[address].find(fam => {
      if (fam.id === familyId) {
        return true;
      }
      return false;
    });

    if (!family) {
      return;
    }

    if (isPet) {
      family.pets.push(name);
    }
    family.people.push(name);
  }
}