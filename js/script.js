// This sets autofocus on first text field
$("#name").focus();
$('#other-title').hide();


//Shows the Job Role input when "other" is selected 
$('#title').change(function(){ 
  if($(this).val() == "other"){
    $('#other-title').show();
  }
});


const $puns = $('#color option').filter(':eq(0), :eq(1), :eq(2)');
const $hearts = $('#color option').filter(':eq(3), :eq(4), :eq(5)');

$('#design').change(function(){
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








