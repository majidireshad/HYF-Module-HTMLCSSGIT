const contactForm = document.querySelector("#contact-form");
const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#LastName");
const email = document.querySelector("#emailAdres");
const contactDisplay = document.querySelector("#contactNoteIcon");
const newImage = document.createElement('img');
newImage.src = "https://res.cloudinary.com/dq2ki7aym/image/upload/v1612812056/greenTick_jb1ahp.png";
var memo = document.querySelector("#contact-confirm-note")
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    contactDisplay.appendChild(newImage)
    memo.innerText = `Dear ${firstName.value} ${lastName.value}, I have recieved your contact information. You will shortly recieve a confirmation email on ${email.value}.`;
})