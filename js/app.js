
//palindrome for string method


var input = "madam";
var spli = input.split("");
var rever = spli.reverse("");
var joi =rever.join("")
console.log(spli,rever,joi);
if(input===joi){
console.log("its palindrome");
}else{
    console.log("its not palindrome");
}
