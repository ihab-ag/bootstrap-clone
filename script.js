window.onload=()=>{
    // elements
    const btnMenu = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // functions
    // toggle displaymenu
    function toggleMenu(){
        let display = menu.style.display;
        display=="none"?display="flex":display="none";
    }
}