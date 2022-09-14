window.onload=()=>{
    // declare elements
    const messages=document.getElementById('messages');

    getMessages();
    // functions
    // get data
    async function getMessages(){
        await fetch('apis/contacts.php')
        .then((response) => response.json())
        .then((data) => displayMsg(data));
    }
    // display message
    function displayMsg(arr){
        // create elements
        let message = arr[0].message;
        let div = document.createElement('div');
        let text = document.createElement('p');
        // assign values
        div.classList="message container";
        text.innerText= message;
        // append childs
        div.appendChild(text);
        messages.appendChild(div);

    }
}