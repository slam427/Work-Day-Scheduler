$(document).ready(function() {
var hoursArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

for (var i = 0; i < hoursArray.length; i++) {
    console.log(i);
var newRow = $("<div>");
var hourCol = $("<div>");
    hourCol.text(hoursArray[i]);

var eventCol = $("<div>");
var saveCol = $("<div>");

newRow.append(hourCol, eventCol, saveCol);
$("#timeBlocks").append(newRow);
}



// hourCol.addClass("col-2")
// saveCol.addClass("col-2");
// eventCol.addClass("col-8");

// newRow.addClass("input-group");










});

//input group
// <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text">With textarea</span>
//   </div>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
// </div>


//large sizing
// <div class="input-group input-group-lg">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
//   </div>
//   <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
// </div>



//button
// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
//   </div>
//   <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
// </div>