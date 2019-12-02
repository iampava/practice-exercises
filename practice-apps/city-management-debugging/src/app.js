let cityWrapper = document.querySelector(".city-wrapper");
let addFamilyControls = document.querySelector(".controls");

let city = {
  "Stejar 55": [
    {
      id: 1,
      name: "Fam. Bobs",
      people: ["Marry", "John"],
      pets: ["Tara"]
    }
  ]
};

addFamilyControls.addEventListener("submit", addFamily);
renderCity(city);

/** Functions */
function renderCity(city) {
  cityWrapper.innerHTML = null;
  Object.keys(city).forEach(address => {
    let families = city[address];

    cityWrapper.innerHTML += `<h3> ${address} </h3>`;
    let ul = document.createElement("ul");
    families.forEach(fam => {
      ul.appendChild(createFamilyMarkup(fam));
    });

    cityWrapper.appendChild(ul);
  });
}

function createFamilyMarkup(family) {
  let li = document.createElement("li");
  li.innerHTML = `
    <p class="fam-name">${family.name}</p>
    <ul class="people">
        ${family.people.map(name => `<li>${name}</li>`).join("")}
        <li>
            <form data-people>
                <input name="name" type="text" required />
                <button type="submit">➕</button>
            </form>
        </li>
    </ul>
    <ul class="pets">
        ${family.pets.map(name => `<li>${name}</li>`).join("")}
        <li>
            <form data-pets>
                <input name="name" type="text" required />
                <button type="submit">➕</button>
            </form>
        </li>
    </ul>
    `;

  li.querySelector("[data-people]").addEventListener("submit", onFormSubmit);
  li.querySelector("[data-pets]").addEventListener("submit", onFormSubmit);

  function onFormSubmit(e) {
    e.preventDefault();
    addFamilyMember(
      city,
      "" + family.id,
      e.target.name.value,
      e.target.hasAttribute("data-pets")
    );
    renderCity(city);
  }

  return li;
}

function addFamily(e) {
  e.preventDefault();

  insertFamilyAtAddress(city, e.target.address.value, e.target.name.value);
  renderCity(city);

  e.target.reset();
}
