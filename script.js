window.onload=()=>{
    // elements
    const btnMenu = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btnMenu.onclick=()=>{
        toggleMenu();
    }



    // functions
    // toggle displaymenu
    function toggleMenu(){
        
        console.log(menu.style.display);
        
        if(menu.classList.contains('none')){
            menu.classList.remove('none');
            menu.classList.add('nav-bar__items');
        }
    }
}