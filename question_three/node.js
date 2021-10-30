const data = require('./values.json')

function Sum(d) {
    let number = 0;
    for (let i = 0; i < d.length; i++) {
        const {value} = d[i];
        number = number + value;
        if (i+1 === d.length) {
         console.log("SUM: ",number);   
        }
    }
}
Sum(data)


console.log("-------------------------------------------");
console.log("The data in values.json file is:");
console.log(data);
console.log("-------------------------------------------");
