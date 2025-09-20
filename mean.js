const form = document.getElementById("userForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (firstName === "" || lastName === "" || age === "" || phone === "") {
    showMessage("Ma'lumotlarni to'liq to'ldiring!", "error");
    return;
  }

  if (age < 1 || age > 120) {
    showMessage("Iltimos, to'g'ri yosh kiriting (1-120 oralig'ida)!", "error");
    return;
  }

  if (phone.length < 9) {
    showMessage("Iltimos, to'g'ri telefon raqam kiriting!", "error");
    return;
  }

  showMessage("Ma'lumot qabul qilindi!", "success");

  console.log("Qabul qilingan ma'lumotlar:");
  console.log("Ism:", firstName);
  console.log("Familiya:", lastName);
  console.log("Yosh:", age);
  console.log("Telefon:", phone);
});

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = "block";

  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 5000);
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (messageDiv.classList.contains("error")) {
      messageDiv.style.display = "none";
    }
  });
});

console.log(form);

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("span");

    header.classList.toggle("active");
    content.classList.toggle("show");

    icon.textContent = content.classList.contains("show") ? "−" : "+";
  });
});

function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  document.querySelectorAll(".faq-item.active").forEach((item) => {
    item.classList.remove("active");
  });

  if (!isActive) {
    faqItem.classList.add("active");
  }
}

document.addEventListener("keydown", function (e) {
  if (
    e.target.classList.contains("faq-question") &&
    (e.key === "Enter" || e.key === " ")
  ) {
    e.preventDefault();
    toggleFaq(e.target);
  }
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.setAttribute("tabindex", "0");
  question.setAttribute("role", "button");
  question.setAttribute("aria-expanded", "false");
});

function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  document.querySelectorAll(".faq-item.active").forEach((item) => {
    item.classList.remove("active");
    item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
  });

  if (!isActive) {
    faqItem.classList.add("active");
    element.setAttribute("aria-expanded", "true");
  }
}

const cards = document.querySelectorAll(".teacher-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});

const contactBtns = document.querySelectorAll(".contact-btn");

contactBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const teacherName =
      btn.parentElement.querySelector(".teacher-name").textContent;
    alert(`${teacherName} bilan bog'lanish: +998 xx xxx xx xx`);
  });
});




