// Character list. Each house has a name and a code
const houses = [
    {
        code: "ST" ,
        name : "Stark" ,
    },
    {
        code: "LA" ,
        name: "Lannister" ,
    },
    {
        code: "BA" ,
        name: "Baratheon" ,
    },
    {
        code: "TA" ,
        name: "Targaryen" ,
    }

];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST" :
            return ["Eddard","Catelyn","Robb","Sansa","Arya","Jon Snow"];
        case "LA":
            return["Tywin","Cersei","Jaime","Tyrion"];
        case "BA":
            return["Robert","Stannis","Renly"];
        case "TA":
            return["Aerys","Daenerys","Viserys"];
        default:
            return[]; //Empty array
    }

};

const houselist = document.getElementById("house");
const dropdown = document.createElement("dropdown");

houses.forEach(home=> {
   dropdown.textContent = home.name;
   houselist.appendChild(dropdown);
});

console.log(houses.forEach(home1 =>{
    const codes = getCharacters(houses.code);
    console.log(`${houses.name}: ${codes}`);
  }));
