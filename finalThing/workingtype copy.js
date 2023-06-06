<!DOCTYPE html>
<html>
  <head>
    <title>Customers Sponsorship Login Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">
    <meta name = "viewport" content = "width=device-width, initial-scale = 0, user-scalable=no"> 
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.8/xlsx.full.min.js"></script>
  </head>
  <body>
    <h1>Present values</h1>
    <input type="file" id="fileInput" />

  </body>
</html>
<script>
  var fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: "array" });
      // Do something with the workbook object, e.g. access the sheet data
      console.log(workbook.Sheets[workbook.SheetNames[0]]);
    };
    reader.readAsArrayBuffer(file);
  });
</script>


<!DOCTYPE html>
<html>
  <head>
    <title>Customers Sponsorship Login Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=0, user-scalable=no"> 
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.8/xlsx.full.min.js"></script>
  </head>
  <body>
    <h1>Present values</h1>
    <input type="file" id="fileInput" />
    <script>
      var fileInput = document.getElementById("fileInput");
      fileInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
          var data = e.target.result;
          var workbook = XLSX.read(e.target.result, { type: "array" });
          var sheet = workbook.Sheets[workbook.SheetNames[0]]; 
          const jsonData = [];

            // Iterate through each row of data and create a JavaScript object for each row
            for (let rowNum = 2; ; rowNum++) { // Start from row 2 to skip header row
            const nameCell = sheet['A' + rowNum];
            if (!nameCell) break; // Stop iterating if there are no more rows of data
            const name = nameCell.v;

            const emailCell = sheet['B' + rowNum];
            const email = emailCell ? emailCell.v : '';

            const phoneCell = sheet['C' + rowNum];
            const phone = phoneCell ? phoneCell.v : '';

            const addressCell = sheet['D' + rowNum];
            const address = addressCell ? addressCell.v : '';

            // Create a JavaScript object for the current row of data
            const rowObject = {
                name: name,
                email: email,
                phone: phone,
                address: address
            };

            // Add the row object to the array
            jsonData.push(rowObject);
            }

            // Convert the array of objects to a JSON string and write it to a file
            const jsonString = JSON.stringify(jsonData, null, 2);
            const fs = require('fs');
            console.log("hey");
            //fs.writeFileSync('path/to/output.json', jsonString);
        };
        reader.readAsArrayBuffer(file);
      });
    </script>
  </body>
</html>
