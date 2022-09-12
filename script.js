window.onload=()=>{
    // elements
    const btnMenu = document.getElementById('menu-btn');
    const menu = document.getElementsByClassName('nav-bar__items');

    btnMenu.onclick=()=>{
        toggleMenu();
    }



    // functions
    // toggle displaymenu
    function toggleMenu(){
        
        console.log(menu[0].style.display);
        
        menu[0].style.display= menu[0].style.display==="none"?"flex":"none";
    }
}