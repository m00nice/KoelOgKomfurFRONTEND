var objectString = localStorage.getItem('user');
var user = JSON.parse(objectString);
var finaluser = JSON.parse(user);
var discount = finaluser.ilveDiscount;


console.log(discount);