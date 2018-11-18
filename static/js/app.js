// from data.js
//Import Data into Table onto website
var tbody = d3.select("tbody");
var tableData = data;
//console.log(tableData);

data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");
   Object.entries(weatherReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

// User input to filer by date

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  var selectTable = d3.select("tbody");
  // Prevent the page from refreshing
  d3.event.preventDefault();
  selectTable.html("");

  var inputElement = d3.select("#datetime");

 // Get the value property of the input element
  var inputDate = inputElement.property("value");

  tableData.forEach(function(row) {
      if(row.datetime == inputDate) {
          var newRow = selectTable.append("tr");
          Object.entries(row).forEach(function([key, value]) {
              var cell = newRow.append("td");
              cell.text(value);
          });
      }
  })

  //console.log(inputValue);
  //console.log(tableData);

  // var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // console.log(filteredData);

});

// write code that appends a table to the web page and then adds new rows of data for each UFO sighting

//have a column for date/time, city, state, country, shape, and comment

// use a date form in the html document and write JavaScript code that will listen for events and search
// through the date/time column to find rows that match user input
