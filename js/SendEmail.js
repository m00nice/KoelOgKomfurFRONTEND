var Recipient = localStorage.getItem("user")
var MsgBody = localStorage.getItem("cart");
var payload = {
    Recipient: nameField,
    MsgBody : passwordFieldSignup
};
payload = JSON.stringify(payload)
fetch("http://localhost:8080/sendMail",
    {
        method: "POST",
        body: payload,
        headers:{'content-type': 'application/json'}
    })
