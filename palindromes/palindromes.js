const palindromes = function(s) {
    //reverse the string,if both are equal then it is a palindromes
    let transformeds = s.replace(/[ ,.!]/g,"");
    if(transformeds.toUpperCase() === reverseString(transformeds).toUpperCase()) 
      return true;
    else
      return false;
      
}

let reverseString = function(s) {
    if (s === "") 
      return "";
    else
      return reverseString(s.substr(1)) + s.charAt(0);
}

module.exports = palindromes
