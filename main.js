// Make random Messages
const randomMessages = arr => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const signInfo = ['star', 'moon', 'sun', 'comet'];
const fortuneOutput = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
const advice = ['go out and eat', 'not read this', 'play more', 'trust no one'];

// Print random Messages
console.log(
`Your sign right now is a "${randomMessages(signInfo)}"\n
You are having: "${randomMessages(fortuneOutput)}"\n
You should: "${randomMessages(advice)}"`
);
