const form = document.querySelector('.signup-form');
const inputs = document.querySelectorAll('input');
const output = document.querySelector('.output');
const patterns = {
                  name : /^([a-zA-Z]+)\s([a-zA-Z]+)(\s[a-zA-Z]+)?$/,
                  email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/,
                  username : /^[a-zA-Z\d]{5,12}$/,
                  password : /^[\w@-]{8,20}$/,
                  number : /^\d{10}$/
                };

 function validateForm(field, regex){
  if(regex.test(field.value)){
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
    if(field.value === ""){
      field.className = "basic";
    }
  }
  inputs.forEach(input => {
     input.addEventListener('keyup', e => {
        validateForm(e.target, patterns[e.target.attributes.name.value]);
     });
  });
  const passShow = document.querySelector('span');
  const pass = document.querySelector('#pass');
  passShow.addEventListener('click', e => {
     passShow.className = "fa fa-eye";
     if (pass.type === "password") {
         pass.type = "text";
     }
  });
  passShow.addEventListener('dblclick', e => {
     passShow.className = "fa fa-eye-slash";
     if (pass.type === "text") {
         pass.type = "password";
     }
  });
form.addEventListener('submit', e => {
  e.preventDefault();
  if(form.name.value === ""){
    alert('Name is required!');
    form.name.focus();
    return false;
 }
  if(form.email.value === ""){
    alert('Email is required!');
    form.email.focus();
    return false;
 }
  if(form.username.value === ""){
    alert('username is required!');
    form.username.focus();
    return false;
 }
  if(form.password.value === ""){
    alert('Password is required!');
    form.password.focus();
    return false;
 }
  if(form.number.value === ""){
    alert('Number is required!');
    form.number.focus();
    return false;
 }else{
   output.innerHTML = `<p>Fullname : ${form.name.value}</p>
                       <p>Email Address : ${form.email.value}</p>
                       <p>Username : ${form.username.value}</p>
                       <p>Password : ${form.password.value}</p>
                       <p>Number : ${form.number.value}</p>`;
 }
 form.reset();
  return true;

   });
