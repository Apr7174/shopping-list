// first = object that contains the applications state
// single state object that contains property called items which will have the items on the list
var state = {
	items: []
};

// NEW
// state of an item on the list
// why () not {} - not an object, allows you to write more neatly to variable
// dont put any variables in here, just have something to target
// wont display on its own - need a function to manage the state of the display
var itemStatusButtons = (
	// '<li>'+ 
    	'<span class="shopping-item"></span>' +
        '<div class="shopping-item-controls">' +
        	'<button class="shopping-item-toggle">' +
            	'<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
            '</button>' +
        '</div>'
    // '</li>' 

);


// second = functions that modify the state
// takes state as first argument and additional data as second arguments
var addItem = function(state, item) {
	state.items.push(item);

};

// NEW
// function that modifies item status
var checkItem = function() {
	// cross out item


}

// NEW
// funtion that deletes item
var deleteItem = function(state, item) {
	// delete item from list
	var i = state.items.indexOf(item);
	if (i == -1) {
		state.items.splice(i, 1);
	}
	return console.log(i);
};

// third = functions that render html into a DOM element
//takes a state object as first argument and a DOM to render into as second argument
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + item + itemStatusButtons + '</li>' ;
	});
	element.html(itemsHTML);
};

// display the itemStatusButtons 
// var renderItem = function(itemStatusButtons, listItem) {
// 	// translates itemStatusButtons into jQuery selector
// 	var statusHTML = $(itemStatusButtons);

// 	// jQuery method to search for a string
// 	// element.find('.shopping-item').text(item);

// 	var tryThis = $(listItem).html('Hello');
// 	return tryThis;

// };

// 


// final section is jQuery event listeners
//functions that call a state modification function to update state 
//then call render function to update DOM when event listeners are called

function handleAddItem() {
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		//grabs the text that was entered
		addItem(state, $('#shopping-list-entry').val());	
		// targets the class=shopping-list ul
		renderList(state, $('.shopping-list'));
	});	
}

function handleCheckItem(){
	$('ul').on('click', '.shopping-item-toggle', function(event) {
		// event.preventDefault();
		$(this).closest('li').fadeTo('slow', 0.5);
	});	
}

function handleDeleteItem() {
	$('ul').on('click', '.shopping-item-delete', function(event) {
		// event.preventDefault();
		// $(this).closest('li').remove();
		// event.preventDefault;
		deleteItem(state, $(this));

	});	
}

$(function() {
	handleAddItem();
	handleCheckItem();
	handleDeleteItem();

});

// WORKS
// $(function() {
// 	$('#js-shopping-list-form').submit(function(event) {
// 		event.preventDefault();
// 		//grabs the text that was entered
// 		addItem(state, $('#shopping-list-entry').val());	
// 		// targets the class=shopping-list ul
// 		renderList(state, $('.shopping-list'))
// 	});

// });


// $(document).ready(function() {
// 	$('#js-shopping-list-form').submit(function(event) {
// 		event.preventDefault();
// 		//grabs the text that was entered
// 		addItem(state, $('#shopping-list-entry').val());
// 		// targets the class=shopping-list ul
// 		renderList(state, $('.shopping-list'));
// 		// 
// 		// renderItem(itemStatusButtons, $('#shopping-list-entry').val());

// 		// $('li').html(itemStatusButtons);
// 		// checkItem();

// 	});

// 	// $('ul').on('click', '.shopping-item-delete', function(event) {
// 	// 	// event.preventDefault();
// 	// 	// $(this).closest('li').remove();
// 	// 	event.preventDefault;
// 	// 	deleteItem(state, $(this).closest('li');
// 	// });

// // 	$('ul').on('click', '.shopping-item-toggle', function(event) {
// // 		// event.preventDefault();
// // 		$(this).closest('li').fadeTo('slow', 0.5);
// // 	});

// });

