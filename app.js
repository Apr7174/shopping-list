// first = object that contains the applications state
// single state object that contains property called items which will have the items on the list
var state = {
	items: []
};

// NEW
// state of an item on the list
var itemStatus = {
	// this needs to say not deleted and not checked
}


// second = functions that modify the state
// takes state as first argument and additional data as second arguments
var addItem = function(state, item) {
	state.items.push(item);
};

// NEW
// function that modifies item status
var checkItem = function(itemStatus, checked) {
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
//takes a state object as first argument and a DOM to render into as second argument
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + item + '</li>';
	});
	element.html(itemsHTML);
};




// final section is jQuery event listeners
// 
$(document).ready(function() {
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		//grabs the text that was entered
		addItem(state, $('#shopping-list-entry').val());
		// targets the class=shopping-list ul
		renderList(state, $('.shopping-list'));
	});

});