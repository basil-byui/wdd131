
 // Get the current year
const today = new Date();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = today.getFullYear();

// Display the date the document was last modified
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;