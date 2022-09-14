window.onload=()=>{
    // declare elements
    const messages=document.getElementById('messages');

    getMessages();
    // functions
    // get data
    async function getMessages(){
        await fetch('apis/contacts.php')
        .then((response) => response.json())
        .then((data) => console.log(data));
      
    }
}