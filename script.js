const themeColor = document.getElementById('body');
const colorElement = document.getElementById('container');

function darkMode(params) {

    if(params.checked){
        themeColor.style.backgroundColor="08061f";
        colorElement.style.color="#fff";

    }else{
        themeColor.style.backgroundColor="#fff"
        colorElement.style.color="black";
        
    }
};