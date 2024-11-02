function sumAll (a, b) {
    let sum = 0;

    
    if ( (a<0) || (b<0) || !isNumber(a) || !isNumber(b) || !Number.isInteger(a) || !Number.isInteger(b) ){
        return "ERROR"
    } 
    else if (a<b){
        for(let i=a; i<=b; i++){
            sum += i;
        }}
    else if (a>b) {
        for(let i=a; i>=b; i--){
            sum += i;
        }
    }   

    return sum;
};

function isNumber(value) {
    return typeof value === 'number';
}

console.log(sumAll(1,3));
// Do not edit below this line
module.exports = sumAll;
