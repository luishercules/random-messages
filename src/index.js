const messages = [
    "Luis",
    "Ana",
    "Carlos",
    "Carolina",
    "Diego",
    "Laura",
    "Miguel",
    "Yesica"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg};