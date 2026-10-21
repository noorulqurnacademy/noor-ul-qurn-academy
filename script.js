
const academyWhatsApp = "923122593470";
const academyEmail = "iufaq19@gmail.com";

document.getElementById("year").textContent =
  new Date().getFullYear();

// Mobile menu
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}

document.querySelectorAll("#navbar a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("navbar").classList.remove("show");
  });
});

// Collect trial form details
function getTrialDetails() {
  const name = document.getElementById("studentName").value.trim();
  const age = document.getElementById("studentAge").value;
  const guardian = document.getElementById("guardianName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const preference = document.getElementById("studentType").value;
  const course = document.getElementById("course").value;
  const time = document.getElementById("time").value;
  const contact = document.getElementById("platform").value;
  const notes = document.getElementById("notes").value.trim();

  return `Assalamu Alaikum, Noor ul Qurn Academy!

I would like to request a 3-day free trial.

Student Name: ${name}
Student Age: ${age}
Parent/Guardian: ${guardian}
Contact Number: ${phone}
Student/Teacher Preference: ${preference}
Selected Course: ${course}
Preferred Class Time: ${time}
Preferred Contact Method: ${contact}
Additional Message: ${notes || "None"}

Please contact me with the available class timings and trial details.

Thank you.`;
}

// Open WhatsApp with the filled trial request
document.getElementById("trialForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (!this.reportValidity()) return;

  const details = encodeURIComponent(getTrialDetails());
  const url = `https://wa.me/${academyWhatsApp}?text=${details}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

// Open email application with the filled trial request
document.getElementById("emailTrial").addEventListener("click", function() {
  const form = document.getElementById("trialForm");

  if (!form.reportValidity()) return;

  const subject = encodeURIComponent(
    "3-Day Free Trial Request - Noor ul Qurn Academy"
  );

  const body = encodeURIComponent(getTrialDetails());

  const url = `mailto:${academyEmail}?subject=${subject}&body=${body}`;

  window.location.href = url;
});
