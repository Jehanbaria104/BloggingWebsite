function login(event){
    event.preventDefault();
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username==="Jehan" && password==="1234"){
        window.location.href="home.html"
    }else{
        document.getElementById("message").innerHTML=
        "Incorrect password! or Username! ";
    }
}