//Виды функций
//Function Declaration
function tell(name) {
    console.log("Привет1 -", name)
}
tell("Igor")

//Function Exptetion 
const tell1 = function tell1(name) {
    console.log("Привет2 -", name)
}
tell1("Igor")


//Anoninous Function
let counter = 0
const interval = setInterval(function () {
    if (interval === 100) {
        clearInterval(interval)
    }
}, 100)

//Arrow Function
const arrow = (name) => {
    console.log("Привет3 -", name);
}
const arrow2  = name => console.log("Привет4 -", name);

const pow = nam => nam ** 2;

arrow("Igor")
arrow2("Igor")
console.log(pow(3))

//Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

