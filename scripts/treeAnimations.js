let tree = document.querySelector('#tree');

function swayTree() {
    let swayAngle = 0;

    if (Math.abs(windPower) > 50) {
        // If winPower is high sway is bigger
        swayAngle = (Math.abs(windPower) / 100) * 10; // Maksymalny kąt to 10 stopni
    } else if (Math.abs(windPower) > 10) {
        // If winPower is high sway is lower
        swayAngle = (Math.abs(windPower) / 100) * 5; // Maksymalny kąt to 5 stopni
    }

    // Sway movement based on our settings
    const swayMovement = Math.sin(Date.now() / (500 - Math.abs(windPower) / 10)) * Math.min(swayAngle, 2); 

    // Tree rotation
    tree.style.transform = `rotate(${swayAngle * Math.sign(windPower) + swayMovement}deg)`; 

    requestAnimationFrame(swayTree);
}

swayTree(); // Animation start after site is loaded