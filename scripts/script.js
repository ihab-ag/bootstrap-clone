window.onload=()=>{
    // elements
    const btnMenu = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const name= document.getElementById('name');
    const email= document.getElementById('email');
    const number= document.getElementById('number');
    const message= document.getElementById('message');
    const submit=document.getElementById('submit');
    const title=document.getElementById('title');
    var txt=document.createElement("span");
    txt.style.background="red";
    txt.style.color="white";
    // variables
    let msg="";
    // events
    btnMenu.onclick=()=>{
        toggleMenu();
    }
    submit.onclick=()=>{
        msg=validate();
        if(msg!=""){
            txt.innerText=msg;
            title.appendChild(txt);
        }
        else{
            title.removeChild(txt);
        }
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
    // validation 
    function validate(){
        if(name.value.length<5||name.value==""){
            return "Full name should be >5 characters";
        }
        if((!(/\w{3,}[@]\w{5,}[.][a-zA-Z]*$/).test(email.value))||email.value==""){
            return "Email should have at least 3 chars before the @ and at least 5 chars after";
        }
        if(!(/^[+]961(3|70|71|76|81)\d{6}$/).test(number.value)||number.value==null){
            return "Phone number must start with +961 followed by 3 or (70,71,76,81) and 6 digits";
        }
        if(message.value.length<100||message.value==""){
            return "Message should be > 100 characters";
        }
        return " ";
    }
}