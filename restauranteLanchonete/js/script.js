function navegacao(x) {

    if (x === 1) {
        document.getElementById('menu1').style.display = 'block';
        document.getElementById('menu2').style.display = 'none';
        document.getElementById('menu3').style.display = 'none';
        document.getElementById('menu4').style.display = 'none';
        document.getElementById('menu5').style.display = 'none';
    } else if (x === 2) {
        document.getElementById('menu1').style.display = 'none';
        document.getElementById('menu2').style.display = 'block';
        document.getElementById('menu3').style.display = 'none';
        document.getElementById('menu4').style.display = 'none';
        document.getElementById('menu5').style.display = 'none';
     } else if (x === 3){
        document.getElementById('menu1').style.display = 'none';
        document.getElementById('menu2').style.display = 'none';
        document.getElementById('menu3').style.display = 'block';
        document.getElementById('menu4').style.display = 'none';
        document.getElementById('menu5').style.display = 'none'; 
    } else if (x === 4){
        document.getElementById('menu1').style.display = 'none';
        document.getElementById('menu2').style.display = 'none';
        document.getElementById('menu3').style.display = 'none';
        document.getElementById('menu4').style.display = 'block';
        document.getElementById('menu5').style.display = 'none'; 
    } else {
        document.getElementById('menu1').style.display = 'none';
        document.getElementById('menu2').style.display = 'none';
        document.getElementById('menu3').style.display = 'none';
        document.getElementById('menu4').style.display = 'none';
        document.getElementById('menu5').style.display = 'block'; 
    }
}













