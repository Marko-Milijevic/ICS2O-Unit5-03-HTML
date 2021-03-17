// Add an event listener to the button element
document.getElementById('button').addEventListener('click', displayMessage)

// This function will display an alert
function displayMessage () {
  alert(document.getElementById('input').value)
}
