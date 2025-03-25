let password = document.getElementById('password');
function generate(){
  let upperCase = "ABXDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let symbols = "!@#$%^&/_-*";
  let length = 12;
  let pass = "";
  let gen = upperCase + lowerCase + symbols;

  for(let i = 1 ; i <= length; i++){
    pass += gen[Math.floor(Math.random() * gen.length)];
    //console.log(pass);
  }

  
    password.value = pass;
    //console.log(pass);
}
