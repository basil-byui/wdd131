
// referencing the html elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// create a li element that will hold each entry's chapter title and an associated delete button.
//  Create a li element
const li = document.createElement('li');

// creating a delete button
const deleteButton = document.createElement('button');

// Populating the li element variable's textContent or innerHTML with the input value.
// Populate the li element with the input value
li.textContent = input.value; 

// setting the delete button's textContent to x
// Set the delete button text to a red cross
deleteButton.textContent = '❌';


// append the delete button to the li element.
//  Add an accessible label to the delete button
li.append(deleteButton);

// append the li element variable to the unordered list in the HTML.
//  Append the li element to the unordered list
list.append(li);

