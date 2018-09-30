// This sets autofocus on first text field
$("#name").focus();
$('#other-title').hide();


// $('#title').on('click', function(event){
//   const $other = $('#title[option^="other"]');
//     if('click'===$other){
//   console.log(event.target);
// }
// 
// });


const $other =$('#title option').eq(5);

$($other).on('click', function(){
  console.log("hi");
});







