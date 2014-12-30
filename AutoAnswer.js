/**DONT COPY LINES 1-6
 *@author <h1 style="background-color:#000">Ben Tyszka<h1>
 *@version 1.1.1
 *@file AutoAnswer.js
 *@desc Auto Answers membean.com questions!
 *Copy everything from "if" down and paste it in the console per the instructions on the website
 */
if($("#wordform") == null){
$("li.answer").click();
console.log("MultiChoice");
}else{
$("#choice").val($("#full-answer").html().substring(1));$("#pass__pass").parent().submit();
	console.log("Fill in");
}