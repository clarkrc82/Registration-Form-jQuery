// sets autofocus on first text field
$("#name").focus();

//Hides the "Select Payment Method"
$('#payment option:eq(0)').remove();

// Hides other-title input
$('#other-title').hide();

//Shows the Job Role input when "other" is selected 
$('#title').on('change', function(){ 
  if($(this).val() == "other"){
    $('#other-title').show();
  }else{
    $('#other-title').hide();
  }
});

// Variables for color options 
const $puns = $('#color option:contains("JS Puns shirt only")');
const $hearts = $('#color option:contains("JS shirt only")');
//Extra credit 
const $colors = $('#colors-js-puns');
$colors.hide();

//Function that shows/hides the available color options by shirt type
$('#design').on('change', function(){
  if($(this).val() === "heart js"){
    $puns.hide();
    $hearts.prop('selected', true);
    $colors.show()
  }else {
    $puns.show();
  }
  if($(this).val() === "js puns"){
    $hearts.hide();
    $puns.prop('selected', true);
    $colors.show();
  }else{
    $hearts.show();
  }
  if ($(this).val() === "Select Theme"){
    $colors.hide();
  }
});



// Creates an h2 element for activities
$('.activities').append('<h2></h2>');

//This function adds the total cost of activities and crosses out conflicting activities
$('.activities').on('change', function () {
  
    let $total = 0;
    
  if ($('input:checkbox:eq(0)').is(':checked')) {
    $total += 200;
  }
  if ($('input:checkbox:eq(1)').is(':checked')) {// checks if checkbox is checked
    // if checked runs this
    $('input:checkbox:eq(3)').prop('checked', false).parent().css('color', 'red').css('text-decoration', 'line-through');
    $total += 100;
  } else {
    // clears out css if checked and unchecked
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


// Variables for payment options
const $cc=$('#credit-card');
const $paypal=$('div p:contains("Paypal")');
const $bitcoin=$('div p:contains("Bitcoin")');
$paypal.hide();
$bitcoin.hide();

//Function for payment options
$('#payment').on('change', function(){
  if($(this).val() === "paypal"){
    $cc.hide();
    $paypal.show();
  }else{
    $paypal.hide();
  }
  if($(this).val() === "bitcoin"){
    $('#credit-card').hide();
    $bitcoin.show();
  }else{
    $bitcoin.hide();
  }
  if($(this).val() === "credit card"){
    $cc.show();
  }
});


// error message if name field is blank.
$('#name').focusout(function(){
    if($(this).val()===''){
    $(this).addClass('blank');
    $('label[for="name"]').prepend('<label class="temp">Please enter your name.</label>');
  }else{
    $(this).removeClass('blank');
    $('.temp').empty();
  }
 });
 

//error message if email is left blank AND email validation
$('#mail').focusout(function (){
  const emailVal = /(.+)@(.+){2,}\.(.+){2,}/;
  const emailInput = $('#mail').val();
  if($(this).val() ===''){
    $(this).addClass('blank');
    $('label[for="mail"]').prepend('<label class="temp">Please enter your email.</label>');
    return false;
  }else{
    $(this).removeClass('blank');
    $('.temp').empty();
  }
  if (!emailVal.test(emailInput)){
    $(this).addClass('blank');
    $('label[for="mail"]').prepend('<label class="temp">Please enter a valid email.</label>');
  } 
});


// error message if user did not check any Activities
$('fieldset:eq(3)').on('click', function (){
  if($('input:checkbox:checked').length===0){
    $('.activities').append('<h3 class="temp">Please select an activity.</h3>');
  }
  if($('input:checkbox:checked').length>0){
    $('.temp').empty();
  }
});


// error messages if credit card is blank AND if not between 13-16 numbers long
$('#cc-num').focusout(function(){
  const $val = $(this).val().length
  if($(this).val()===''){
    $(this).addClass('blank');
    alert("Please enter a credit card number.")
    return false;
  }
  if(($val<13)||($val>16)){
    $(this).addClass('blank');
    alert("Please enter a number that is between 13 and 16 digits long.");
  }else{
    $(this).removeClass('blank')
  }
})


//error messages for zip
$('#zip').focusout(function(){
  const $val = $(this).val().length
  if($(this).val()===''){
    $(this).addClass('blank');
    alert("Please enter a zip code.")
    return false;
  }
  if(($val<5)||($val>5)){
    $(this).addClass('blank');
    alert("Please enter a 5 digit zip code.");
  }else{
    $(this).removeClass('blank')
  }
})


// error messages for cvv
$('#cvv').focusout(function(){
  const $val = $(this).val().length
  if($(this).val()===''){
    $(this).addClass('blank');
    alert("Please enter a CVV.")
    return false;
  }
  if(($val<3)||($val>3)){
    $(this).addClass('blank');
    alert("Please enter a 3 digit CVV number.");
  }else{
    $(this).removeClass('blank')
  }
})
