
class LoginLogout {
    signin() {


    }

    App() {
        var isLoggedin = false;

        let user = localStorage.getItem('user');
        if (user != null) {
            isLoggedin = true;
        }

        function logout(){
            localStorage.removeItem('user');
            location.reload();
        }

        // const login = (e) => {
        //   e.preventDefault();
        //   console.log(name, email, password);
        //   const userData = {
        //     name,
        //     email,
        //     password,
        //   };
        //   localStorage.setItem('token-info', JSON.stringify(userData));
        //   setIsLoggedin(true);
        //   setName('');
        //   setEmail('');
        //   setPassword('');
        // };
        if (isLoggedin) {

            var logoutbtn = `
        <button type="button" id="logoutbtn">Log out
    </button> `;
    var div = document.getElementById("login");
    div.innerHTML = logoutbtn;
    
    $("#logoutbtn").on("click", function () {
       
            logout();
    
    })

            // var div = document.getElementById("login");
            // div.innerHTML = logoutbtn;
            // const logout = (event) => {
            //     {
            //         event.preventDefault()
            //         const div = document.getElementById('container');
            //         localStorage.removeItem('user')
            //         localStorage.setItem(isLoggedin(false));
            //         div.insertAdjacentHTML(
            //             'beforeend',
            //             `<span style="background-color: green">You have logged out.</code>`,
            //         );

            //     }

            // };


        } else {
            var inputLogin = `<form id="loginform">
<input type="text" placeholder="Brugernavn" name="username" id="usernameField">
<input type="text" placeholder="Password" name="password" id="passwordField">
<input type="submit" value="Log in" id="submitbtn">
</form>`;
            var div = document.getElementById("login");
            div.innerHTML = inputLogin;

            $("#submitbtn").on("click", function () {
                $("#loginform").submit(function () {
                    login();
                })
            })


            async function login() {
                // debugger;
                const div = document.getElementById('container');
                event.preventDefault()
                const usernameField = document.getElementById("usernameField").value;
                const passwordField = document.getElementById("passwordField").value;
                let payload = {
                    username: usernameField,
                    password: passwordField
                };
                payload = JSON.stringify(payload)
                let res = await fetch("http://localhost:8080/login",
                    {
                        method: "POST",
                        body: payload,
                        headers: { 'content-type': 'application/json' }
                    }); let data = await res.text();



                if (res.status == 200) {

                    localStorage.setItem('user', JSON.stringify(data));
                    location.reload();
                    div.innerHTML =
                        // 'beforeend',
                        `<span style="background-color: green">` + JSON.stringify(data) + `</code>`
                        ;

                }
                else {
                    div.innerHTML =
                        `<span style="background-color: red">` + JSON.stringify(data) + `</code>`
                        ;
                    return res.json();
                }



            }

        }

    }

}

var login = new LoginLogout();
login.App();