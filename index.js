// here i get input tag
const nameInput = document.getElementById("name");
// here i get tags
const tagsDiv = document.getElementById("tags");

// here i run a function add tag
const addTag = () => {
//   now i get input tag value
  const nameValue = nameInput.value;
//   creating a new div
  const newDiv = document.createElement("div");
//   add a class
  newDiv.classList.add("tag");

//   here i generate a custom message
  const tagMessage = `Hi, I am ${nameValue}`;
//   creating a textNode
  const tagText = document.createTextNode(tagMessage);
//   appendChild and set the message on div
  newDiv.appendChild(tagText);

//   create a icon
  const deleteIcon = document.createElement("i");
//   add icons class
  deleteIcon.classList.add("material-icons", "icons");
//   add icon style 
  deleteIcon.style.color = "rgb(253, 253, 253)";
  deleteIcon.style.fontSize = "2em";
  deleteIcon.textContent = "delete";
  deleteIcon.addEventListener("click", () => {
    newDiv.remove();
  });

//   append icon on newdiv
  newDiv.appendChild(deleteIcon);
//   in tagsDiv append the newdiv
  tagsDiv.appendChild(newDiv);

//   when tag generate empty input field
  nameInput.value = "";
};



// DETAILS:
// We've renamed the name variable to nameInput to make it more descriptive.
// We've renamed the tags variable to tagsDiv to make it clear that it represents a div element.
// We've created a new div element for the tag and added the tag class to it.
// We've created a text node with the tag message and appended it to the new div.
// We've created a delete icon using the createElement method and added the material-icons and icons classes to it.
// We've set the style of the delete icon using the style property.
// We've added a click event listener to the delete icon that removes the parent div element from the tagsDiv.
// We've appended the delete icon to the new div element.
// We've appended the new div element to the tagsDiv.
// Finally, we've reset the value of the name input field to an empty string.
// With these changes, my tag generator should now generate dynamic tags with a delete button that removes the tag when clicked.