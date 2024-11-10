const palindromes = function (word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
