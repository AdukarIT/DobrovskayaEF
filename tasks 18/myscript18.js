let btnCancel = document.getElementById("cancel-button");
btnCancel.onclick = function() {
  modal.style.display = "none";
  document.getElementById('form').reset();
}

let modal = document.getElementById('myModal');
let btn = document.getElementById("add-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById('form').reset();
}



$('#add-button').on('click', function() {
  let name = $('form input[name="name"]').val();
  let phone = $('form input[name="phone"]').val();
  let date = $('form input[name="data"]').val();
  let question = $('form input[name="question"]').val();
  if (name == "" || phone == "" || date == "" || question == "") {
    alert('Заполните все поля!');
    return false;
  } else {
    $("#myTable tbody").append("<tr id='selectableRows'>" +
      "<td class='ui-widget-content'>" + name + "</td>" +
      "<td class='ui-widget-content'>" + phone + "</td>" +
      "<td class='ui-widget-content'>" + date + "</td>" +
      "<td class='ui-widget-content'>" + question + "</td>" +
      "</tr>");

  }
  modal.style.display = "none";
  document.getElementById('form').reset();
  $('myTable').selectable();
});

let dialog = document.getElementById('dialog-confirm');

let spanDelete = document.getElementsByClassName('close-delete')[0];
spanDelete.onclick = function() {
  dialog.style.display = "none";
}

let cancelDelete = document.getElementById("cancel-delete");
cancelDelete.onclick = function() {
  dialog.style.display = "none";
}

$('#delete-btn').on('click', function() {
  dialog.style.display = "block";
});
