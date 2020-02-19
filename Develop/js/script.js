$(document).ready(function () {
    var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "12AM", "2AM"];

    for (var i = 0; i < hoursArray.length; i++) {
        
        // console.log(moment(rowTime,"HH:mmA"));
        var newRow = $("<div>");
        newRow.addClass("row", "input-group-prepend");
        var rowTime = moment(hoursArray[i], "hA").format("hA");
        console.log(rowTime);

        var hourCol = $("<div>");
        hourCol.addClass("col-2", "text-align-center");
        hourCol.text(rowTime);
        
        var eventCol = $("<div>");
        eventCol.addClass("col-8");
        
        var eventInput = $("<textarea>");
        eventInput.addClass("form-control");
        
        var saveCol = $("<div>");
        var saveButton = $("<button>");
        saveCol.addClass("col-2", "input-group-append", "btn btn-outline-primary");
        saveButton.text("Save");
        
        newRow.append(hourCol, eventCol, saveCol);
        eventCol.append(eventInput);
        saveCol.append(saveButton);
        
        $("#timeBlocks").append(newRow);
        var currentTimeHours = moment().format("hA")
        
        if(currentTimeHours === rowTime) {
        newRow.addClass("bg-dark text-white");
        }
        if(moment().isBefore(moment(hoursArray[i], "hA"))) {
        newRow.addClass("bg-success text-white");
        console.log("time check",moment().diff(rowTime));
        } else if(moment().isAfter(moment(hoursArray[i], "hA" ))) {
        newRow.addClass("bg-danger text-white");
        }
        
    }
    var currentTime = $("<time>");
    currentTime.text(moment().format("dddd, MMMM Do YYYY  h:mmA"));
    $("#currentDay").append(currentTime);

// hourCol.addClass("col-2")
    // saveCol.addClass("col-2");
    // eventCol.addClass("col-8");

    // newRow.addClass("input-group");

    // moment('01/01/2016', 'MM/DD/YYYY')
    // moment('2016-01-01 11:31:23 PM', 'YYYY-MM-DD hh:mm:ss a')








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