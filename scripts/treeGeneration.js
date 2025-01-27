let outputTreeHeight = document.getElementById("treeHeightInput");

let sliderTreeHeight = document.getElementById("treeHeight");
                
// When slider has input
sliderTreeHeight.oninput = function () {
    // Update value
    outputTreeHeight.innerHTML = this.value + " levels";
    
    updateTreeHeight();
};

function updateTreeHeight(){
    console.log("funciton is not done for now");
}