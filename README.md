<h2>Membean-Hacks</h2>



=============
<p>This code is simply intended to illustrate the critical vulnerabilities that are present in large scale web applications... By using this code you agree to the following terms: <ol><li>We are not responsible for any negative repercussions from your using of this code</li><li>You inherent all risks associated with the using of this code and understand all consequences</li></ol></p>
<br>
<p><strong>Do not</strong> use this to cheat, you can get in trouble</p>
<br>
<p>We made this code for <strong>demonstration purposes only</strong>, it works, but you shouldn't use it</p>
<h4>INSTRUCTIONS: READ EVERYTHING!</h4>

<p>The Anti-Membean Weapon has now been put into a Google Chrome extension(this allows for 100% full awesome automation and no bugs)</p>

<br>



<ol>

<li>Click the "Download Zip" button (should be to the right of this screen and under the "Clone in desktop" button)</li>

<li>Right click the newly downloaded file and click the "Extract All" button and accept/continue any windows that come up (It's may be under "Compressed Folder Tools", also choose a destination and remember it!)</li>

<li>Open Google Chrome (It would help to have the latest version)</li>

<li>Into the top website bar thing type "chrome://extensions"</li>

<li>Click the checkbox that says "Developer Mode" (should be at the top and slightly to the right)</li>

<li>Click the button that says "Load unpacked extension"</li>

<li>Find the directory that you placed the unziped file in (When you first open the directory there will be a folder, it is that folder that you must select/use)</li>

<li>Make sure that the "Enabled" check box is checked and it wouldn't be a bad idea to close and re-open chrome</li>

<li>Log onto membean</li>

<li>Start a session, kick back & relax!</li>

</ol>

</p>

<br>

<p>The code purposely doesn't do anything on the new word pages<p>

<br>



<p>This "hack" is not illegal, it simply reads the client side markup of membean and clicks a few buttons and inserts some stuff into text boxes</p>



<br>



<p>This is not intended to insult or embarrass any school and/or education officials</p>



<br>
<p>Here's how it works: Each multiple choice answer button is represented as a li element, the one with the answer is conveniently given a class of "answer".My code simply clicks the li element that has a class of answer. Kids stuff.</p>

<p>The fill in one is a bit tricky, I found that the input box is given an id of "choice" and that the full answer is hidden from the user and given an id of "full-answer". My code takes the value of #full-answer", removes the first letter (as the first one is already loaded in) and inserts it into #choice. My code then finds the parent of #choice (which is a form) and submits said form. All of this is wrapped in a recurring setTimeout function whose timeout is chosen at random from 2.5 to 6 seconds (as of last release)</p> 
<br>
<h3>How membean can fix this</h3>
<p>
AS LONG AS YOU DON'T LOAD THE ANSWERS INTO THE FREAKING PAGE AND CALL THE ANSWER #full-answer YOU SHOULD BE FINE!!!! I am just thinking off the top of my head here but you should have like a json of the question, perhaps its UUID, the possible choices and the answer. Send the question, UUID and choices to the client, when the user responds, find the answer by the UUID and see if they match! Then just send back something saying that the answer was correct/wrong! The bug is harmless, but this is an example as to how NOT to build a site. This is just sad, you are building a site meant for kids, kids who hate homework and will do anything to get around it. It was a matter of time until someone found this out.... You are lucky that this bug wasn't more serious. I thought about telling you, Membean, but then I googled "Membean Hack" and I saw tons of little exploits and things that have existed for YEARS. I fear that the only way to get your attention is to publicly release this repo.
</p>
<h4>Closing thoughts</h4>
<p>Always expect your client to be of a malicious intent! The fact that a 14 year old can make this in under 10 minutes is pathetic. I can't believe how badly designed this site is.</p>

<h3>A product of Typhoon Technologies.... <small>Whirling your problems away</small></h3>



<br>



