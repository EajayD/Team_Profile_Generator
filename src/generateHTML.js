// HTML to be generated when function completes
let generateHtml =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
            crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid text-center p-4 bg-danger">
            <div class="container">
              <h1 class="display-4 text-white fw-bolder">My Team</h1>
            </div>
        </header>
    
        <main class ="container">
            <section class ="row p-4 flex-wrap" id="cards">         
`

module.exports = generateHtml;