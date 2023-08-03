// Uncomment the folowing code block to change the selected value (assuming the first option is selected by default)

let element = document.querySelector('select');
console.log(element.value); // returns '1' as that’s currently selected
element.value = '2';


// Uncomment the following code block to get the currently selected `option` element, you could do so like this:

//let selectedIndex = element.selectedIndex;
//if (selectedIndex > -1) {
//  let selectedOption = element.querySelectorAll('option')[selectedIndex];
//}

// For the radio buttons
// Uncomment the following code block to find out which one of the three is currently selected
let ageGroupElement = document.querySelector('input[name="age-group"]:checked');
let value = ageGroupElement ? ageGroupElement.value : null;
