/* Practice

Task 1. На странице есть изначально пустое поле для выбора (select) и кнопка “Получить досье”.
При загрузке страницы при помощи GET-запроса (https://jsonplaceholder.typicode.com/users) получите данные о пользователях. Элемент select заполните именами пользователей. По нажатию на кнопку “Получить досье” выведите ниже всю доступную информацию о выбранном в данный момент пользователе.
*/
function names () {
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(json) {
            $('#list').empty();
            $.each(json, function(i, obj) {
                    $('#list').append($('<option>').text(obj.name).attr('value', obj.name));
            });
    });
}

names()

$(document).on("click", "#getName", function() {
  let selectVal = $("#list option:selected").val();
  $.getJSON("https://jsonplaceholder.typicode.com/users", function(json) {
  	$.each(json, function(i, obj) {
  if (selectVal === obj.name) {
  	$('#output').html('<div><p>ID: '+this.id+'</p><p>Name: '+this.name+'</p><p>Username: '+this.username+
  		'</p><p>Email: '+this.email+'</p><p class="tittle">Address: </p><p>Street: '+this.address.street+
  		'</p><p>Suite: '+this.address.suite+'</p><p>City: '+this.address.city+'</p><p>Zipcode: '+this.address.zipcode+
  		'</p><p class="tittle">Geo: </p><p>Lat: '+this.address.geo.lat+'</p><p>Lng: '+this.address.geo.lng+
  		'</p><p>Phone: '+this.phone+'</p><p>Website: '+this.website+
  		'</p><p class="tittle">Company: </p><p>Name: '+this.company.name+'</p><p>CatchPhrase: '+this.company.catchPhrase+'</p><p>Bs: '+this.company.bs+'</p></div>');
  }
})
  })
});



/*

Task 2. Задан код красного, зелёного, синего и оранжевого шаров. 
https://jsfiddle.net/kve8o30x/1/ 

Реализуйте следующие анимации по клику на шарики:
красный - шарик улетает к правому краю экрана;
зелёный - шарик становится полупрозрачным;
синий - шарик увеличивается в 2 раза;
оранжевый - шарик становится полностью прозрачным, меняет цвет на жёлтый и появляется вновь.

Задание со ✡: по второму клику на шарик выполнить анимацию в обратном порядке

*/

let red = 0;
let green = 0;
let blue = 0;
let orange = 0;

$(document).on("click", "#red", function() {
  if (red == 0) {
    $("#red").animate({
      "right": ""
    }, "slow");
    red = 1;
  } else {
    $("#red").animate({
      "left": ""
    }, "slow");
    red = 0;
  }
});



$(document).on("click", "#green", function() {
  if (green == 0) {
    $("#green").animate({
      opacity: .5
    });
    green = 1;
  } else {
    $("#green").animate({
      opacity: 1
    });
    green = 0;
  }
});



$(document).on("click", "#blue", function() {
  if (blue == 0) {
    $("#blue").animate({
      height: "100px",
      width: "100px"
    });
    blue = 1;
  } else {
    $("#blue").animate({
      height: "50px",
      width: "50px"
    });
    blue = 0;
  }
});



$(document).on("click", "#orange", function() {
  if (orange == 0) {
    $("#orange").animate({
      opacity: 0
    });
    setTimeout(function() {
      $("#orange").css("background", "yellow");
    }, 1000);
    setTimeout(function() {
      $("#orange").css("opacity", "1")
    }, 1050);
    orange = 1;
  } else {
    $("#orange").animate({
      opacity: 0
    });
    setTimeout(function() {
      $("#orange").css("background", "orange");
    }, 1000);
    setTimeout(function() {
      $("#orange").css("opacity", "1")
    }, 1050);
    orange = 0;
  }
});

