if(window.location.href.indexOf("dashboard") != -1){
alert("##The Anti-Membean Weapon has been initialized, sit back and relax!##");
	
}
if(window.location.href.indexOf("user_state") != -1){
antiMembeanWeapon();
function antiMembeanWeapon(){
if($("#full-answer").html() == null){
$("li.answer").click();
console.log("MultiChoice");
}
if($("#full-answer").html() != null){
$("#choice").val($("#full-answer").html().substring(1));$("#pass__pass").parent().submit();
	console.log("Fill in");
	}
}
setInterval(antiMembeanWeapon, Math.floor((Math.random() * 10000) + 4250));

}
