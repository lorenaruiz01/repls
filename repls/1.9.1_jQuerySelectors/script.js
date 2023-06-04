// ----------MINI-TUTORIAL: SELECTING A LIST ELEMENT------------

<ol id="list"> 
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ol>

// to select the list with jQuery:
$('#list')

let list = $('#list')

// to append an li element to this list: 
$('#list').append(<li>four</li>);

// to append an li to the ol using the list variable:
list.append("<li>four</li>");

// you can also store each <li> element in a variable using: 
let li = $('<li></li>');

// append the li variable to the list variable: 
list.append(li);

// ----------END OF MINI-TUTORIAL------------



// // ----------EXERCISE------------

$('input').addClass('red');

// Below, only make the .main-button green
$('.main-button').addClass('green');

// Below, make the text of all buttons yellow
$('button').addClass('text--yellow');




