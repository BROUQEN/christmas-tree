// IMPORTANT!
// Snowflakes are affected by wind but its built into snowGeneration!
// Tree is now affected too

let outputWindAmount = document.getElementById("windPowerInput");
let sliderWindAmount = document.getElementById("windPower");

// // Initial settings
var windPower = 20;  
outputWindAmount.innerHTML = windPower / 10 + "vw/s";

// When slider has input
sliderWindAmount.oninput = function () {
    // Update value
    outputWindAmount.innerHTML = this.value / 10 + "vw/s";
    windPower = this.value;  
    if(this.value == 0){
        console.log("Wind Turned OFF");
        
    }else{
        console.log("Wind Power set to " + this.value);
    }     
};

