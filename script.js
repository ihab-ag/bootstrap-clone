window.onload=()=>{
    // elements
    const btnMenu = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const name= document.getElementById('name');
    const email= document.getElementById('email');
    const number= document.getElementById('number');
    const message= document.getElementById('message');

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
        else{
            menu.classList.remove('nav-bar__items');
            menu.classList.add('none');
        }
    }
}