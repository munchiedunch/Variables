var prompter= Number(prompt("What is your total bill?"))
var num= (prompter*.07) + prompter
var tip= (num*.05) + num
document.body.querySelector("#cool").innerHTML= "your total taxed bill with tip is " + tip