// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML code
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime == inputValue);

  console.log(filteredData);

    // 1. clear the table
  tbody.html("") 

    // 2. run the for Each to repopulate the table

    filteredData.forEach((UFOsighting) => {
      var row = tbody.append("tr");
      Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

}