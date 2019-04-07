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
      "<td>" + name + "</td>" +
      "<td>" + phone + "</td>" +
      "<td>" + date + "</td>" +
      "<td>" + question + "</td>" +
      "</tr>");

  }
  modal.style.display = "none";
  document.getElementById('form').reset();
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

$(function() {
	$('#myTable').on('click', 'tbody tr', function(event) {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
});

$('#delete-row').on('click', function() {
	$(".selected").remove();
	dialog.style.display = "none";
});
