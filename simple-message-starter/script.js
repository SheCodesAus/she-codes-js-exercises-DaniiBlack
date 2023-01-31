window.onload = function () {
    console.log("PAGE HAS LOADED");
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    // attach speechbubbleEl some place. Above code shows messageBox append to speechbub but speech bub is nowhere attached 
    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage() {
    let message = document.getElementById('message-text').value
    // console.log(message)
    let messageBox = document.getElementById('message-box');
    messageBox.innerText = message;
};
