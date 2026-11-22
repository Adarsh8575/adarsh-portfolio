
// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// TYPING EFFECT
const roles = [
    "Computer Science Student",
    "Web Developer",
    "Data Science Enthusiast",
    "AI Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// AI PORTFOLIO CHATBOT DEMO
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

function addMessage(message, className) {
    const paragraph = document.createElement("p");

    paragraph.className = className;
    paragraph.textContent = message;

    chatMessages.appendChild(paragraph);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(question) {
    question = question.toLowerCase();

    if (question.includes("hello") || question.includes("hi")) {
        return "Hello! Welcome to Adarsh's portfolio. How can I help you?";
    }

    if (question.includes("name") || question.includes("about")) {
        return "Adarsh Srivastava is a B.Tech CSE student specializing in Data Science and AI at SRMU.";
    }

    if (question.includes("education") || question.includes("college")) {
        return "Adarsh is pursuing B.Tech Computer Science Engineering (Data Science & AI) at SRMU.";
    }

    if (question.includes("skill") || question.includes("technology")) {
        return "His listed skills include HTML, CSS, JavaScript, Python, C, Java, SQL and Data Structures.";
    }

    if (question.includes("project")) {
        return "The portfolio showcases a personal website and sample project ideas for student management and data analysis. Check the Projects section.";
    }

    if (question.includes("certificate")) {
        return "Please visit the Certificates and Achievements section for certificate details.";
    }

    if (question.includes("contact") || question.includes("email")) {
        return "You can contact Adarsh through the Contact section or his linked social profiles.";
    }

    if (question.includes("ai") || question.includes("data science")) {
        return "Adarsh is interested in Artificial Intelligence, Data Science and practical applications of technology.";
    }

    return "I can answer questions about Adarsh's education, skills, projects and contact details. Please try another question.";
}

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = userInput.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    const response = getBotResponse(question);

    setTimeout(function () {
        addMessage(response, "bot");
    }, 400);

    userInput.value = "";
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const recipient = "your.email@example.com";

    const subject = encodeURIComponent("Portfolio Contact - " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;
});

// CURRENT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();