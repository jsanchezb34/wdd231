const lastModified = document.getElementById("lastModified");
if (lastModified) lastModified.innerHTML = document.lastModified;

const timestamp = document.getElementById("timestamp");
if (timestamp) timestamp.value = new Date().toLocaleDateString();