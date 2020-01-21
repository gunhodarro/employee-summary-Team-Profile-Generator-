const generateCard = require("./generateCardHTML");

module.exports = function generateHTML(team) {

 let teamListHtml = ""; 

  
  for (let i = 0; i < team.length; i += 1) {
   
    let isNewRow = true;
    
    for (let j = 0; j < team[i].length; j += 1) {
      
      const empl = team[i][j];

     
      if (isNewRow) { 
        teamListHtml += `<div class="row">`;
      }
      
      teamListHtml += `<div class="col-sm-6">`;
     
      teamListHtml += generateCard(empl);

      
      if ( !isNewRow || j === (team[i].length-1) ) { 
        teamListHtml += `</div>`; 
        isNewRow = true;
      } else {
        
        isNewRow = false;
      }

      teamListHtml += `</div>`; 
    }
  }

  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <title>Employee Summary</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: blue;
           padding-top: 100px;
           }
           body {
           background-color: blue;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Open Sans Condensed', sans-serif;
           }
           main {
           background-color: #FECFC7;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
          
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: red;
           color: black;
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid #FEE24C;
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .container {
           padding: 20px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 10px;
           }
  
           .card {
             padding: 10px;
             border-radius: 6px;
             background-color: red;
             color: black;
             margin: 20px;
             text-align: left;
           }
           .card-header-Engineer {
             background-color: yellow;
             padding: 5px;
           }
           .card-header-Intern {
             background-color: white;
             padding: 5px;
           }
           .card-header-Manager {
             background-color: blue;
             padding: 5px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
  <body class="wrapper">
  <div class="photo-header">
    
    <h2>Welcome to the Employee Summary!</h2>
    
  </div>
 
</div>
  <main class="container">
  ${teamListHtml}
  </main>
<footer>
<div style="height: 300px">
</div>
</footer>
</body>
</html>
`;

  return HTML;
};