document.addEventListener("DOMContentLoaded", () => {

// Smooth Scrolling 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

// Back to Top
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Dropdown Menu
function toggleDropdown() {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};

// Match Image Height with Contact Form
function matchImageHeight() {
  const form = document.getElementById("contactBox");
  const formHeight = form.offsetHeight;
  const mallStack = document.querySelector(".mall-image-stack");
  const mallImages = mallStack.querySelectorAll(".mall-photo");

  mallStack.style.height = formHeight + "px";
  mallImages.forEach(img => {
    img.style.height = (formHeight / 2) + "px";
  });
}

window.addEventListener("load", matchImageHeight);
window.addEventListener("resize", matchImageHeight);

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const phonePattern = /^[0-9]{10,15}$/;
  if (phone && !phone.match(phonePattern)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Chatbox Functions
function toggleChatbox() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function closeChatbox() {
  document.getElementById('chatbot').style.display = 'none';
}

function sendMessage() {
  const userInput = document.getElementById('userInput').value.trim();
  if (userInput) {
    appendMessage(userInput, 'user');
    document.getElementById('userInput').value = '';

    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      appendMessage(botResponse, 'bot');
    }, 1000);
  }
}

function appendMessage(message, sender) {
  const messages = document.getElementById('messages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = message;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) {
    return 'Hello! How can I assist you today?';
  } else if (msg.includes('opening hours')) {
    return 'Our mall is open from 10am to 10pm on weekdays, 10am to 12am on Saturdays, and 10am to 10pm on Sundays.';
  } else if (msg.includes('products') || msg.includes('food')) {
    return 'We have a wide range of products available! Check our Food & Beverage section for more.';
  } else {
    return "Sorry, I didn't quite understand that. Can you please ask something else?";
  }
}

// Navigation Functions
function goToHome() {
  window.location.href = "Home.html";
}

function goToVerificationpage() {
  window.location.href = "Verificationpage.html";
}

function goToResetpasswordpage() {
  window.location.href = "Resetpasswordpage.html";
}

function goToCompletepage() {
  window.location.href = "Completepage.html";
}

// Register Submit Handler
document.querySelector(".register-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "Completepage.html";
});
