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
const numberOfRows = document.getElementById('inputHeight');
        // 2. number of columns:
const numberOfColumns = document.getElementById('inputWidth');
        // 3. colorPicker:
const pickTheColor = document.getElementById('colorPicker');
    // --------------------------

        // adding eventListener:
        // 1.
numberOfRows.addEventListener('input',function(){
    console.log('The number of rows input');
})
        // 2.
numberOfColumns.addEventListener('input',function(){
    console.log('The number of columns input');
})
        // 3.
pickTheColor.addEventListener('click',function(){
    console.log('Pick the color here!')
})
    // ----------------------------------------

function makeGrid() {

    // Your code goes here!
    
    }