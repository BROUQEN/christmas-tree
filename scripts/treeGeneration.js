let outputTreeHeight = document.getElementById("layers_container");
let sliderTreeHeight = document.getElementById("treeHeight");

let treeHeightInfo = document.getElementById("treeHeightInput");

let treeHeight = sliderTreeHeight.value; // Declare treeHeight globally
treeHeightInfo.innerHTML = treeHeight + " levels"; // Update the output text

//initialize
updateTreeHeight(); // Call the function to update the tree


// When slider has input
sliderTreeHeight.oninput = function () {
    // Update value
    treeHeight = this.value; // Store the value of the slider in treeHeight
    treeHeightInfo.innerHTML = this.value + " levels"; // Update the output text
    updateTreeHeight(); // Call the function to update the tree
};

function updateTreeHeight() {
    const layersContainer = document.getElementById("layers_container");
    
    const previousLevels = layersContainer.querySelectorAll(".layers");

    previousLevels.forEach(layer => layer.remove()); // Remove all previous layers

    // Create tree layers
    for (let i = 1; i <= treeHeight; i++) { // Loop through treeHeight layers
        const layerDiv = document.createElement('div');
        layerDiv.id = `layer${i}`;
        layerDiv.className = 'layers';

        
        const baubleDiv1 = document.createElement('div');
        baubleDiv1.className = 'bauble';
        baubleDiv1.id = `bauble${i}`;

        const baubleTop1 = document.createElement('div');
        baubleTop1.className = 'bauble_top';

        if(i == 5) {
            const baubleDiv4 = document.createElement('div');
            baubleDiv4.className = 'bauble';
            baubleDiv4.id = `bauble${i * 10 + 2}`;
    
            const baubleTop4 = document.createElement('div');
            baubleTop4.className = 'bauble_top';
    
            // Append baubleTop2 to baubleDiv2 and baubleDiv2 to layerDiv
            baubleDiv4.appendChild(baubleTop4);
            layerDiv.appendChild(baubleDiv4);
        }

        if(i > 6) {
            const baubleDiv2 = document.createElement('div');
            baubleDiv2.className = 'bauble';
            baubleDiv2.id = `bauble${i * 10 + 2}`;
    
            const baubleTop2 = document.createElement('div');
            baubleTop2.className = 'bauble_top';
    
            // Append baubleTop2 to baubleDiv2 and baubleDiv2 to layerDiv
            baubleDiv2.appendChild(baubleTop2);
            layerDiv.appendChild(baubleDiv2);
        }
        
        if(i > 7) {
            const baubleDiv3 = document.createElement('div');
            baubleDiv3.className = 'bauble';
            baubleDiv3.id = `bauble${i * 10 + 3}`;
    
            const baubleTop3 = document.createElement('div');
            baubleTop3.className = 'bauble_top';
    
            // Append baubleTop2 to baubleDiv2 and baubleDiv2 to layerDiv
            baubleDiv3.appendChild(baubleTop3);
            layerDiv.appendChild(baubleDiv3);
        }

        // Append baubles to their respective layers
        baubleDiv1.appendChild(baubleTop1);
        layerDiv.appendChild(baubleDiv1);

        // Append each layer to the main tree container
        outputTreeHeight.appendChild(layerDiv);
    }
    document.documentElement.style.setProperty('--l', treeHeight);
}
