


const removeFromArray = function (array, ...rest) { 
    let itemsToRemove = rest.length > 0 ? rest : [];
    return array.filter(function(x) { 
        return itemsToRemove.indexOf(x) < 0;
    });
};


console.log(removeFromArray([1,3], 1));

module.exports = removeFromArray;




