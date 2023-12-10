var table = document.getElementById("pixelCanvas");

var color = document.getElementById("colorPicker");

var select = document.getElementById("selectedColor");
var height, width;

// handling submission with jquery
$("#sizePicker").submit(function(e){
    e.preventDefault(); //prevents the form from submitting

    select.textContent = `${color.value} color selected`;
    select.style.color = color.value;
    makeGrid();
    

})


// handling submission with JavaScript event handling methods
// document.getElementById("sizePicker").addEventListener("submit", function(e) {
//     e.preventDefault(); // Prevents the form from submitting
//     makeGrid();
// });



function makeGrid() {
    table.innerHTML = ''; // initially set to empty

    height = document.getElementById("inputHeight").value;

    width = document.getElementById("inputWidth").value;

    for (var i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
            let col = row.insertCell(j);

         
            col.addEventListener("click", function () {
                col.style.backgroundColor = color.value;
            });

           // handling doubleclick event with jquery
            $(col).dblclick(function(){
                col.style.backgroundColor = "";
            })

             // handling doubleclick with JavaScript event handling methods
            // col.addEventListener("dbclick", function () {
            //     col.style.backgroundColor = ""; 
            // })
        }
    }
}