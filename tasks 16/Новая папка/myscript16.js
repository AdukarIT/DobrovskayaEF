$.getJSON("https://jsonplaceholder.typicode.com/albums", function(json) {
  $.each(json, function(index, obj) {
    $("#albums").append($('<ul>').html('<li id="id" class="link" data-id="'+obj.id+'">'+obj.title+'</li></ul>'))
  });
});

 
$(document).on('click', '#id', function () {
  let album = $(this).attr("data-id");
  $.getJSON("https://jsonplaceholder.typicode.com/photos", function(json) {
    $.each(json, function(index, obj) {
      if(album == obj.albumId) {
        $("#photos").append($('<div>').html('<p><img src="'+this.url+'" data-id="'+obj.albumId+'"></p></div>'))
      }
    })
  })
})

