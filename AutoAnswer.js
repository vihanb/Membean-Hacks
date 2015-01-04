//DONT COPY THIS LINE, COPY EVERYTHING ELSE 
if($("#full-answer").html() == null){
$("li.answer").click();
console.log("MultiChoice");
}
if($("#full-answer").html() != null){
$("#choice").val($("#full-answer").html().substring(1));$("#pass__pass").parent().submit();
	console.log("Fill in");
}
