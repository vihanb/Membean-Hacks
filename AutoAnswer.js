/*
	Copy this code and put in in the console and hit enter (click f12 and select the farthest tab to the right (Called console)
	I am not responsible for any repercussions from your using of this code
	This only works on those multiple choice ones
Copy the line below this sentence*/
$("li.answer").click();

/*This is for those pesky type in ones (This hasn't been tested on the fill in ones with the picture nor has it been tested on the fill in right after learning a new word) */
$("#choice").val($("#full-answer").html().substring(1));$("#pass__pass").parent().submit();
