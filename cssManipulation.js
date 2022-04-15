function submitBtn()
{
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    var width = document.getElementById("width");
    
    var redBG = document.getElementById("redBG");
    var blueBG = document.getElementById("blueBG");
    var greenBG = document.getElementById("greenBG");
    
    var text = document.getElementById("text");
    
    redBG = redBG.value;
    blueBG = blueBG.value;
    greenBG = greenBG.value;
    
    red = red.value;
    blue = blue.value;
    green = green.value;
    width = width.value;

    //text.style.border = "2px, solid, rgb(2,2,2);"
    text.style.backgroundColor = `rgb(${redBG},${blueBG},${greenBG})`;
    text.style.border = `${width}px solid rgb(${red}, ${blue}, ${green})`;   
}
