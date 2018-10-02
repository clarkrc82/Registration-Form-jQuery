// This sets autofocus on first text field
$("#name").focus();
$('#other-title').hide();


//Shows the Job Role input when "other" is selected 
$('#title').change(function(){ 
  if($(this).val() == "other"){
    $('#other-title').show();
  }else{
    $('#other-title').hide();
  }
});

// Variables for color options 
const $puns = $('#color option').filter(':eq(0), :eq(1), :eq(2)');
const $hearts = $('#color option').filter(':eq(3), :eq(4), :eq(5)');

//Function that shows/hides the available color options by shirt type
$('#design').on("change", function(){
  if($(this).val() === "heart js"){
    $puns.hide();
  }else{
    $puns.show();
  }
  if($(this).val() === "js puns"){
    $hearts.hide();
  }else{
    $hearts.show();
  }
});


const $temp = $('<h2></h2>')
$('.activities').append($temp);


$('.activities').on('change', function () {
    let $total = 0;

  
  if ($('input:checkbox:eq(0)').is(':checked')) {
    $total += 200;
  }
  if ($('input:checkbox:eq(1)').is(':checked')) {
    $('input:checkbox:eq(3)').prop('checked', false).parent().css('color', 'red').css('text-decoration', 'line-through');
    $total += 100;
  } else {
    $('input:checkbox:eq(3)').parent().css('color', '').css('text-decoration', '');
  }
  if ($('input:checkbox:eq(2)').is(':checked')) {
    $('input:checkbox:eq(4)').prop('checked', false).parent().css('color', 'red').css('text-decoration', 'line-through');
    $total += 100;
  } else {
    $('input:checkbox:eq(4)').parent().css('color', '').css('text-decoration', '');
  }
  if ($('input:checkbox:eq(3)').is(':checked')) {
    $('input:checkbox:eq(1)').prop('checked', false).parent().css('color', 'red').css('text-decoration', 'line-through');
    $total += 100;
  } else {
    $('input:checkbox:eq(1)').parent().css('color', '').css('text-decoration', '');
  }
  if ($('input:checkbox:eq(4)').is(':checked')) {
    $('input:checkbox:eq(2)').prop('checked', false).parent().css('color', 'red').css('text-decoration', 'line-through');
    $total += 100;
  } else {
    $('input:checkbox:eq(2)').parent().css('color', '').css('text-decoration', '');
  }
  if ($('input:checkbox:eq(5)').is(':checked')) {
    $total += 100;
  }
    if ($('input:checkbox:eq(6)').is(':checked')) {
      $total += 100;
    }

  $('h2').text("Total: $"+$total);
});
