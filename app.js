// arrays
const users = [`damian`,`kinga`,`miena`,`szymek`];
console.log(users.length);

// Switch, for statement

let text = `orange`;

if (text === `banana`) {
    console.log(`It's a banana`)
}else if(text === `apple`){
    console.log(`It's an apple`)
}

switch (text) {
    case `banana`:
        console.log(`It's a banana`);
        break;
    case `apple`:
        console.log(`It's an apple`);

    default:
        console.log(`I don't know ${text}`)
        break;
}

// Loops

for (let i = 0; i < 100; i++) {
    if (i===20) {
        console.log(`It's 20`);
        continue;
        // Its nog going to run anythin underneath, just goesb bact to the for loop
    }else if(i===40){
        console.log(`Thank you!`)
        break;
    }
    console.log(i);
}

const array = [`one`, `two`, `three`,`four`];

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    
}