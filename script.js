
var data ;
$(document).ready(function table() {
  $.getJSON("script.json", function (data) {
    var table = '';
    $.each(data, function (key, value) {
      table += '<tr scope="row">',
      table += '<td><img src="' + value.url + '" width="100px" ></td>';
        table += '<td>' + value.ID, +'</td>'
      table += '<td>' + value.Désignation, +'</td>'
      table += '<td>' + value.LePrix, +'</td>'
      table += '<td>' + value.Catégorie, +'</td>'
      table += '<td>' + value.Disponibilité, +'</td>'
      table += `<td><li>${value.Fournisseur.aderess}</li><li>${value.Fournisseur.Rsocial} </li></td>`
      table += '</tr>'

      
    });
    $('#tableay').append(table)
  });
 
});

  $(document).ready(function () {
    $("#inp").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#list tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  