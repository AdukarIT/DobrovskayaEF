$.getJSON("https://jsonplaceholder.typicode.com/albums", function(json) {
  $.each(json, function(index, obj) {
    $("#albums").append($('<div>').html('<li class="newDiv"><a id="id" class="link" href="#" data-id="'+obj.id+'">'+obj.title+'</a></li>'))
  });
});

 
$(document).on('click', '#id', function () {
  let album = $(this).attr("data-id");
  $.getJSON("https://jsonplaceholder.typicode.com/photos", function(json) {
      $.each(json, function(index, obj) {
    if(album == obj.albumId) {
    $("#photos").append($('<div>').html('<li class="photos"><img src="'+this.url+'" data-id="'+obj.albumId+'"></li>'))
  }
})
  })
})

