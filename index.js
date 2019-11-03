
// add the information in the input to the list by hitting return
// or clicking the button
$("form").submit( function (event)  {
    //prevents default reload and submit to server
    event.preventDefault();
    //takes text typed into input field
    let listItem = $("input").val();
    //appends item in "input" to <ul class= shopping-list"> with appropriate structure
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
   
});

//check or uncheck <span class= "shopping-item"> (toggle class) by clicking the check button
$("ul.shopping-list").on("click",".shopping-item-toggle",function() {
    $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
});

// permenantly remove items from the list
$("ul.shopping-list").on("click",".shopping-item-delete",function() {
    $(this).parent().parent().remove();
});
