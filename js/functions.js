function login()
{
    const username = document.getElementsByName("username")[0];
    const password = document.getElementsByName("password")[0];
    
    if(loginRequest(username, password))
    {
        username.value="";
        password.value="";
        document.getElementById("LoggedOut").style.display="none";
        document.getElementsByClassName("LoggedIn")[0].style.display="block";
    }
    else
        window.alert("Username or password incorrect")
}

function logout()
{
    document.getElementById("LoggedOut").style.display="block";
    document.getElementsByClassName("LoggedIn")[0].style.display="none";
}

function loginRequest(username, password)
{
    let tName = "Tyler"
    let tPass = "123"
    if(username.value===tName && password.value===tPass)
        return true;
    return false;
}