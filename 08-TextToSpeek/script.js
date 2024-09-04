function speakText() {
    const textInput = document.getElementById('text-input').value;
    if (textInput.trim() !== "") {
        const speech = new SpeechSynthesisUtterance(textInput);
        speech.lang = 'en-US'; // You can change the language if needed
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text to speak.");
    }
}
