
// add the information in the input to the list by hitting return
// or clicking the button
$("input").keypress( function(event) {
	if (event.which === 13) {
        //prevents the form from submitting/ reloading
        event.preventDefault();
        //takes text typed into field and appends it


		let listItem = $(this).val();
        $(".shopping-list").append('<li>\
            <span class="shopping-item">' + listItem + '</span>\
            <div class="shopping-item-controls">\
              <button class="shopping-item-toggle">\
                <span class="button-label">check</span>\
              </button>\
              <button class="shopping-item-delete">\
                <span class="button-label">delete</span>\
              </button>\
            </div>\
          </li>');
    
        //clears value of input
        $("input").val("");
       
	}
});

//check or uncheck (toggle class) by clicking the check button




// permenantly remove items from the list