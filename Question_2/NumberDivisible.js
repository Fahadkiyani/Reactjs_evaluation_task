 
function Divide(num) {
    if (num % 14 === 0) {
        return "foobar"
    }else if (num % 7 === 0){
        return "bar"
    }else if (num % 2 === 0){
        return "foo"
    }
    return num;
}

for (let i = 1; i < 50; i++) {
  let numberIs= Divide(i);
  console.log("Returned Value is: ", numberIs);
}