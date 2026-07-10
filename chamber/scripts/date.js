const today =new Date();
console.log(today.toDateString());
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();