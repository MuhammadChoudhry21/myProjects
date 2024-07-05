var index = 0;

changeColors = () => {
    var colors = ["red", "green", "blue", "yellow", "orange", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1) 
    index = 0;
}