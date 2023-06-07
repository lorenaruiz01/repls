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



// ----------MINI-TUTORIAL: GETTING INPUT VALUES------------

// you can use val() to get the input values from the index page: 
// ex: 
<input type="text" name="ListItem" id="input"></input>

// get the value of the input with jQuery:
$('#input').val();

// store the value into a variable:
let inputValue = $('#input').val();

// append this value to another element such as the li from the first mini-tutorial:
li.append(inputValue);
// ----------END OF MINI-TUTORIAL------------



// ----------DOM MANIPULATION------------
// jQuery is built around the idea of chaining. You can run multiple commands in a row on the same element:

$('.notification').addClass('bright-red').delay(300).removeClass('bright-red')
// In the example above, the element with the class 
notification // has first been selected. Then, the class 
bright-red // has been added to it. Since the function 
addClass() // returns the same 
notification // element that was already selected, you can now call another function on it, this time called 
delay(). // This is a jQuery function that literally delays whatever happens next. Here, it’s creating a delay of 300 milliseconds after the 
bright-red // class has been added. The 
delay() // function then returns the same collection again (which, in this case, is still the 
notification // element), allowing you to call 
removeClass() // on the element to remove 
bright-red // yet again. This is a common way to make an element flash in a specific color in jQuery.


// commands can also be written across multiple lines: 
$('.notification')
.addClass('bright-red')
.delay(300)
.removeClass('bright-red')

// you can create new DOM elements like this:
let newElement = $('<div class="new-class">Content is here!</div>')

// this is equivalent to the non-jQuery code:
let newElement = document.createElement('div');
newElement.classList.add('new-class');
newElement.innerText = 'Content is here!';
document.querySelector('body').appendChild(newElement);

// * Although it looks more complicated, this longer code actually runs faster than its jQuery counterpart. 


// ----------MINI-TUTORIAL: CROSSING OUT LIST ITEMS------------
// unordered list from the previous mini-tutorial: 
<ol id="list">
    <li>the value of the (inputValue) from the input element</li>
</ol>

// first, cross out the li element. To do so, create a CSS class called strike that will apply line-through on the text:
.strike{text-decoration:line-through};

// then you can add this class into the li element using jQuery: 
li.addClass("strike");
// *By doing this the list item li should be crossed out but still visible

// ----------END OF MINI-TUTORIAL------------


// ----------MINI-TUTORIAL: HIDE A LIST ITEM------------
// you can use css display:none; to hide an element

// first, create a new class called delete and give it the attribute display:none:

.delete {
    display:none;
}

// to hide an element, you can call or add the class delete to it:
li.addClass("delete");

// ----------END OF MINI-TUTORIAL------------


// ----------EVENT HANDLING------------
// Similar to regular JavaScript, you can also add and remove event listeners with jQuery:

$('input').on('click', function(event) {
    // do something
});