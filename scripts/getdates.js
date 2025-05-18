
const currentYearSpan = document.getElementById("currentyear");
const thisYear = new Date().getFullYear();
currentYearSpan.textContent = thisYear;

const lastModifiedPara = document.getElementById("lastModified");

lastModifiedPara.textContent = `Last modified: ${document.lastModified}`;