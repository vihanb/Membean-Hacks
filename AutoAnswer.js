if($("#wordform") == null){
$("li.answer").click();
console.log("MultiChoice");
}else{
$("#choice").val($("#full-answer").html().substring(1));$("#pass__pass").parent().submit();
	console.log("Fill in");
}