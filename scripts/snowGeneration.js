// Initial settings
var snowAmount = 15;
var snowSpawnDelay = 1000 / snowAmount;

var snowSpawnInt = setInterval(createSnowflake, snowSpawnDelay);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    let fallTime = Math.random() * 5 + 5;
    snowflake.style.animation = `fall ${fallTime}s linear infinite`; // random time
    
    let windPower = parseFloat(document.getElementById("windPower").value); // Check value for wind from settings
    snowflake.style.setProperty("--windPower", windPower + "vw"); // add wind to animation
    
    snowflake.style.width = snowflake.style.height = Math.random() * 5 + 5 + "px"; // random size


    //idk what really happens in math.random. I don't know why this piece of nightmare down below even works? but it works.. yuppi? ;-;

    //check for wind, if yes we change position of spawning snowflakes. If we dont do that then theres no snowflakes in botoom corners 

    if(windPower == 0){
        snowflake.style.left = Math.random() * 100 + "vw"; // random pos
    }else if(windPower > 0){
        snowflake.style.left = (Math.random() * (100 + windPower) - windPower) + "vw"; // random pos based on wind
    
    }else{
        snowflake.style.left = Math.random() * (100 - windPower) + "vw";  //random pos based on wind
    
    }
    snowflake.style.opacity = Math.random() * 0.7 + 0.3; // random opacity
    snowflake.style.zIndex = Math.random() < 0.5 ? 1 : 10; // random z 1 or 10 back of front of the tree
    document.body.appendChild(snowflake);

    // Deleting snowflakes
    setTimeout(() => {
    snowflake.remove();
    }, fallTime * 1000); //fixed falling time so when animation end snowflake die ;c
}