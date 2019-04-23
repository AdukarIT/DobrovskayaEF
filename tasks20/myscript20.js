// Выполняем по завершении загрузки страницы
window.addEventListener("load", function onWindowLoad() {

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");


  $('#dropdownList').on('change', function() {
    let selectVal = $("#dropdownList option:selected").val();
    if (selectVal === '2') {
      context.lineWidth = 1;
    } else if (selectVal === '3') {
      context.lineWidth = 2;
    } else if (selectVal === '4') {
      context.lineWidth = 3;
    } else if (selectVal === '5') {
      context.lineWidth = 4;
    } else if (selectVal === '6') {
      context.lineWidth = 5;
    } else if (selectVal === '7') {
      context.lineWidth = 6;
    } else if (selectVal === '8') {
      context.lineWidth = 7;
    } else if (selectVal === '9') {
      context.lineWidth = 8;
    } else if (selectVal === '10') {
      context.lineWidth = 9;
    } else if (selectVal === '11') {
      context.lineWidth = 10;
    } else if (selectVal === '12') {
    	context.lineWidth = 5;
    	context.strokeStyle = "#FFFFFF";
    }
  });

  context.lineCap = "round";

  document.getElementById("clear").onclick = function clear() { //обработчики на кнопки и очистка
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  canvas.onmousemove = function drawIfPressed(e) { //MouseEvent на движение
    let x = e.offsetX;
    let y = e.offsetY;
    let dx = e.movementX;
    let dy = e.movementY;


    if (e.buttons > 0) { // Рисуем, если кнопка зажата
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - dx, y - dy);
      context.stroke();
      context.closePath();
    }
  };

  $("#myColor").on('change', function changeColor(e) {
    let x = $("#myColor").val();
    context.strokeStyle = x;
  });

});



