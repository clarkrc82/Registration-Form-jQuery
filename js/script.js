// sets autofocus on first text field
$("#name").focus();

// Hides the "Select Payment Method"
$('#payment option:eq(0)').remove();

// Hides other-title input
$('#other-title').hide();

// Shows the Job Role input when "other" is selected 
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

// Function that shows/hides the available color options by shirt type
$('#design').on('change', function(){
  if($(this).val() === "heart js"){
    $puns.hide();
    $hearts.  prop('selected', true);
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
$('.activities').append('<h2 id="atv"></h2>');

// This function adds the total cost of activities and crosses out conflicting activities
$('.activities').on('change', function () {
    let $total = 0;
  if ($('input:checkbox:eq(0)').is(':checked')) {
    $total += 200;
  }
  if ($('input:checkbox:eq(1)').is(':checked')) {// checks if checkbox is checked
    // if checked runs this
    $('input:checkbox:eq(3)').prop('checked', false).parent().addClass('atv');
    $total += 100;
  } else {
    // clears out css if checked and unchecked
    $('input:checkbox:eq(3)').parent().removeClass('atv');
  }
  if ($('input:checkbox:eq(2)').is(':checked')) {
    $('input:checkbox:eq(4)').prop('checked', false).parent().addClass('atv');
    $total += 100;
  } else {
    $('input:checkbox:eq(4)').parent().removeClass('atv');
  }
  if ($('input:checkbox:eq(3)').is(':checked')) {
    $('input:checkbox:eq(1)').prop('checked', false).parent().addClass('atv');
    $total += 100;
  } else {
    $('input:checkbox:eq(1)').parent().removeClass('atv');
  }
  if ($('input:checkbox:eq(4)').is(':checked')) {
    $('input:checkbox:eq(2)').prop('checked', false).parent().addClass('atv');
    $total += 100;
  } else {
    $('input:checkbox:eq(2)').parent().removeClass('atv');
  }
  if ($('input:checkbox:eq(5)').is(':checked')) {
    $total += 100;
  }
    if ($('input:checkbox:eq(6)').is(':checked')) {
      $total += 100;
    }

  $('#atv').text("Total: $"+$total);
});



// Error messages text elements (hiden)
// Each has their own id and class 
$('label[for="name"]').append('<span id="nametext" class="temp"></span>');
$('label[for="mail"]').append('<span id="mailtext" class="temp"></span>');
$('.activities').append('<h2 id="atvtext" class="temp"></h2>');
$('label[for="cc-num"]').append('<span id="cctext" class="temp"></span>');
$('label[for="zip"]').append('<span id="ziptext" class="temp"></span>');
$('label[for="cvv"]').append('<span id="cvvtext" class="temp"></span>');
$('fieldset:eq(3)').append('<label id="btn" class="btn"></label>')


//**VALIDATION FUNCTION**//
// This function checks the validity of all inputs and Activities in real time
// And will also display any error messages
$(function(){
  // Variables for input elements
  // Is used to check if input fields are correct
  let name1 = false;
  let email1 = false;
  let fieldset1 = false;
  let ccnum1 = false;
  let zip1 = false;
  let cvv1 = false;
  let payment = true;
  
  // Variables for payment options
  const $cc=$('#credit-card');
  const $paypal=$('#paypal');
  const $bitcoin=$('#bitcoin')
  $paypal.hide();
  $bitcoin.hide();

    
  // Checks if name input is blank, gives error message if is
  // Returns its var true if filled out
  //*****THE NEXT FEW FUNCTIONS ARE BASICALLY THE SAME SO I WONT COMMENT ON THEM AFTER THIS FUNCTION******//
  $('#name').focusout(function(){
    // Checks if input is blank
      if($(this).val()===''){ 
        // Changes stye and gives error message
      $(this).addClass('blank');
      $('#nametext').text("Please enter your name");
      name1=false;
    }else{
      // Removes styles and error message
      $(this).removeClass('blank');
      $('#nametext').text("");
      // Gives var true if filled out
      name1=true;
    }
  });

  // Checks if email input is blank, gives error message if is
  // Returns its var true if filled out
  $('#mail').focusout(function (){
    // Variables for checking email validity
    const emailVal = /(.+)@(.+){2,}\.(.+){2,}/;
    const emailInput = $('#mail').val();
    if($(this).val() ===''){
      $(this).addClass('blank');
      $('#mailtext').text("Please enter your email");    
      email1=false;
      return false;
    }else{
      $(this).removeClass('blank');
      $('#mailtext').text("");
    }
    if (!emailVal.test(emailInput)){
      $(this).addClass('blank');
      $('#mailtext').text("Please enter a valid email");
      email1=false;
    }else{
      email1=true;
    }
  });

  // If user clicks on any element in the payment section
  // Checks if email input was skipped over
  // Checks if Activites is checked
  $('fieldset:eq(3)').on('click', function (){
    if($('input:checkbox:checked').length===0){
      $('#atvtext').text("Please register for an activity")
      fieldset1 = false;
    }else{
      $('#atvtext').text("")
    }if($('input:checkbox:checked').length>0){
      fieldset1 = true;
    }
    if($('#mail').val()===''){
      $('#mail').addClass('blank');
      $('#mailtext').text("Please enter your email"); 
      email1=false;
      return false;
    }else{
      $(this).removeClass('blank');
      $('#mailtext').text("");
      email1=true
    }
  });

  // Function for payment options
  // If Paypal or Bitcion is chosen it returns the credit card secion var to true so submit button can function
  $('#payment').on('change', function () {
    if ($(this).val() === 'credit card') {
      $cc.show();
    }
    if ($(this).val() === 'paypal') {
      $cc.hide();
      $paypal.show();
      ccnum1 = true;
      zip1 = true;
      cvv1 = true;
    } else {
      $paypal.hide();
    }
    if ($(this).val() === 'bitcoin') {
      $cc.hide();
      $bitcoin.show();
      ccnum1 = true;
      zip1 = true;
      cvv1 = true;
    } else {
      $bitcoin.hide();
    }
  });

  // Checks if credit card is blank AND if between 13-16 NUMBERS long
  $('#cc-num').focusout(function(){
    const $val = $(this).val().length
    if($(this).val()===''){
      $(this).addClass('blank');
      $('#cctext').text("Please enter a credit card");
      ccnum1=false;
      return false;
    }else{
      $('#cctext').text("");
    }
    if(($val<13)||($val>16)||!$.isNumeric($('#cc-num').val())){
      $(this).addClass('blank');
      $('#cctext').text("Please enter a number that is between 13 and 16 digits long");
    }else{
      $(this).removeClass('blank')
      ccnum1=true
    }
  })

  // Checks if zip is blank and the right length
  $('#zip').focusout(function(){
    const $val = $(this).val().length
    if($(this).val()===''){
      $(this).addClass('blank');
      $('#ziptext').text("Please enter a zip code");
      zip1=false;
      return false;
    }
    if(($val<5)||($val>5)){
      $(this).addClass('blank');
      $('#ziptext').text("Please enter a 5 digit zip code");
    }else{
      $(this).removeClass('blank')
      $('#ziptext').text("");
      zip1=true
    }
  })

  // Checks if cvv is blank and the right length
  $('#cvv').focusout(function(){
    const $val = $(this).val().length
    if($(this).val()===''){
      $(this).addClass('blank');
      $('#cvvtext').text("Please enter a CVV.");
      cvv1=false;
      return false;
    }
    if(($val<3)||($val>3)){
      $(this).addClass('blank');
      $('#cvvtext').text("Please enter a 3 digit CVV number");
    }else{
      $(this).removeClass('blank');
      $('#cvvtext').text("");
      cvv1=true;
    }
  })
  
// Submit button FUNCTION
// If any input var is false it will prevent the button from submitting
  $('button').click(function(e){
    if((name1===false)||(email1===false)||(fieldset1===false)||(ccnum1===false)||(zip1===false)||(cvv1===false)||(payment===false)){
     e.preventDefault();
     $('#btn').text("Please fill out all fields");
   }
  }); 
});



