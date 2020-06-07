let myVariable = false;
if (myVariable !== true) {
    console.log('The condition has been evaluated to true');
}

for (let i = 0; i <= 50; i++) { 
    if (i % 3 === 0 && i % 5 == 0) console.log(i) 
}

for (let i = 1; i <= 20; i++) 
    { console.log(i)
};

let getGreetingTo = (a, b) => {
        return a + b;
    };

    console.log(getGreetingTo("Hello ", "Mark"));




let myNumbers = [10, 20, 30, 12];
    
myNumbers.forEach((number) => {
    console.log(number);
});

let printValues = [0, 3, 6, 7, 9];

printValues => {
    for (let i = 0; i < printValues.length; i++) {
        console.log(printValues[i]);
    }
};

