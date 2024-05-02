function check(){
  var number = document.getElementsByName('input')[0].value;
  var output = document.getElementsByName('output')[0];
  
  if (number % 7 == 0 && number!=0){
    output.value = "Thala for a reason!!!!!";
  } else {
    output.value = "Aren't you fan of Dhoni? Think harder !!!";
  }
}
