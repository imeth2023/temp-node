const {readFileSync} = require('fs');

console.log('start first task');
// CHECK FILE PATH!!!!
readFileSync('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
}
);
console.log('starting next task');