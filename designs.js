// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

    // ___________________________________
        // Roadmap101:
        // 1. Create a grid dynamically(?);
        // 2. SElect each  individual cell an assign  it to the colorPicker(?);
        // =====================================
        //Getahold of  inputs and form elements:
        // ====================================================
        // 1. number of rows:
// const numberOfRows = document.getElementById('inputHeight').value;
//         // 2. number of columns:
// const numberOfColumns = document.getElementById('inputWidth').value;
//         // 3. colorPicker:
// const pickTheColor = document.getElementById('colorPicker').value;
//         // 4. colorPicker:
// const customGridColor = document.getElementById('pixelCanvas');
//         // 5. create grid:  
// const customGridSize = document.getElementById('sizePicker');

//     // --------------------------
//     // --------------------------
//     console.log(numberOfRows);
//         // adding eventListener:
//         // 1.
// numberOfRows.addEventListener('input',function(){
       
// })
//         // 2.
// numberOfColumns.addEventListener('input',function(){
//     console.log('The number of columns input');
// })
//         // 3.
// pickTheColor.addEventListener('click',function(){
//     console.log('Pick the color here!')
// })
//     // ----------------------------------------

var numberOfRows = document.getElementById('inputHeight').value;
        
var numberOfColumns = document.getElementById('inputWidth').value;

function makeGrid() {
        // Your code goes here!
    // get the reference for the body
    var body = document.getElementsByTagName('body')[0];
    // creates a <table> element and a <tbody> element
    var grid = document.createElement('grid');
    var gridBody = document.createElement('gbody');
    console.log(numberOfRows);
    //creating cells
    for (var r = 0; r < numberOfRows; r++){
            //creates a table row
            var row = document.createElement('tr');                              //creates N of row(s)
    
            for (var c = 0 ; c < numberOfColumns; c++){
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
                var cell = document.createElement('td');                          //creates N of column(s)    
                var cellText = document.createTextNode('cell in row '+r+', column '+c);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log(numberOfColumns);
            }
            // add the row to the end of the grid body
            gridBody.appendChild(row);
    }
    // put the gbody in the grid
    grid.appendChild(gridBody);
    // appends grid into body
    body.appendChild(grid);
    // sets the border attribut of grid to 2
    grid.setAttribute('border','2');   
    }
    
    makeGrid();