/**
 * This is a function that check which side the cursor is on
 * once the user clicks the button.
 * If the cursor is on the right half of the screen, the function calls
 * the displayTrue() method.
 * If it is on the left half, the function calls the displayFalse() method.
 * @param event
 */
function checkCursorPosition(event){
    let x = event.clientX;

    if (x > window.innerWidth / 2){
        displayTrue();
    }
    else{
        displayFalse();
    }
}


/**
 * This function is called when the user's cursor is
 * on the right side of the screen as they click the button.
 * It displays the page which announces the user told the truth.
 */
function displayTrue(){
    // document.getElementById("above_text").innerText = "TRUE";
    window.location.href = "true.html";
    console.log("true");
}

/**
 * This function is called when the user's cursor is
 * on the left side of the screen as they click the button.
 * It displays the page which announces the user told a lie.
 */
function displayFalse(){
    // document.getElementById("above_text").innerText = "FALSE";
    window.location.href = "false.html";
    console.log("false");
}
