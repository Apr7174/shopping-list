// FIRST = object that contains the applications state
// single state object that contains property called items which will have the items on the list
// sets up new object - inside object is array
var state = {
	items: []
};

// NEW
// state of an item on the list
// why () not {} - not an object, allows you to write more neatly to variable
// dont put any variables in here, just have something to target
// wont display on its own - need a function to manage the state of the display
var itemStatus = (
	'<li>' + 
    	'<span class="shopping-item"></span>' +
        '<div class="shopping-item-controls">' +
        	'<button class="shopping-item-toggle">' +
            	'<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
            '</button>' +
        '</div>' +
    '</li>' 

);


// SECOND = functions that modify the state
// takes state as first argument and additional data as second arguments
//second variable name item is just mainly for clarity, dont need to reference it when its called
var addItem = function(state, item) {
	state.items.push(item);
};

// NEW
// function that modifies item status
var checkItem = function(itemStatus, item) {
	// cross out item
}

// NEW
// funtion that deletes item
var deleteItem = function(itemStatus, item) {
	// delete item from list
	var i = items.indexOf(item);
	if (i != -1) {
		array.splice(i, 1);
	}

}



// third = functions that render html into a DOM element
//takes a state object as first argument and a DOM element to render into as second argument
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		// console.log(itemStatus);
		return renderItem(item);
	});
	// console.log(itemsHTML[0]);
	// element.html(itemsHTML[0]);
};

// display the itemStatus boxes
var renderItem = function(itemStatus, item) {
	// translates itemStatus into jQuery selector
	var element = $(itemStatus);
	// console.log(item);
	// console.log(element);

	// jQuery method to search for a string
	element.find('.shopping-item').text(item);
	return element;
	}


// NEW - constructs HTML to put into DOM element
var renderChecked = function(checkItem, element) {
	var checkHTML = checkItem
	return '<button>Check</button>';
} 


// final section is jQuery event listeners
// 
$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		//grabs the text that was entered, takes in state and item=$('#shopping-list-entry').val()
		addItem(state, $('#shopping-list-entry').val());
		// targets the class=shopping-list ul
		renderList(state, $('.shopping-list'));
	});

});