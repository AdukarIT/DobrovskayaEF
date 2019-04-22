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

$(document).on("click", "#getName", function() {
	names();
})

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

