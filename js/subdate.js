function curdate(){
    var currentDate = new Date();

  // format the date and time
  var formattedDate = currentDate.toLocaleString();

  // set the value of the input field
  document.getElementById("date-time").value = formattedDate;
}