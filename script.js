const data={
 student:{welcome:"Welcome Back, Student! 👋",text:"Your academic information at one place.",stats:[["Attendance","92%"],["Current CGPA","8.45"],["Upcoming Exams","3"],["Notices","5"]]},
 faculty:{welcome:"Welcome, Faculty! 👋",text:"Manage classes, attendance and student activities.",stats:[["Today's Classes","4"],["Total Students","60"],["Assignments","3"],["Notices","2"]]},
 admin:{welcome:"Welcome, Admin! 👋",text:"Manage and monitor the Smart Campus.",stats:[["Total Students","1,248"],["Total Faculty","86"],["Departments","6"],["Notices Today","12"]]}
};
const stats=document.getElementById("stats"),welcome=document.getElementById("welcome"),roleText=document.getElementById("roleText");
function render(type){const d=data[type];welcome.textContent=d.welcome;roleText.textContent=d.text;stats.innerHTML=d.stats.map(x=>`<div class="stat"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("");document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.dashboard===type))}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>render(b.dataset.dashboard)));
function showLogin(){document.getElementById("loginModal").style.display="grid"}function hideLogin(){document.getElementById("loginModal").style.display="none"}
render("student");