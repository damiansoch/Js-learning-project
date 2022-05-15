// arrays
const users = [`damian`,`kinga`,`miena`,`szymek`];
console.log(users.length);
// Switch statement
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