function password() {
  let pass = '';
  let str = 'qwertyuiopasdfghjklzxcvbnm';
  let upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  let digit = '1234567890';
  let symbol = '!@#$%^&*()_+-={}[]|:<,>.?/';

  if (document.getElementById('uppercase').checked) {
    str += upper;
  }
  if (document.getElementById('digits').checked) {
    str += digit;
  }
  if (document.getElementById('special').checked) {
    str += symbol;
  }

  let n = 8;
  if (document.getElementById('strong').checked) {
    n = 14;
  }
  if (document.getElementById('super').checked) {
    n = 20;
  }
  
  for (let i = 1; i <= n; i++) {
    let char = Math.floor(Math.random()
      * str.length + 1);

    pass += str.charAt(char)
  }
  return pass;
}

document.getElementById('gen').addEventListener("click", (e) => {
  let p = password();
  console.log(p);
  document.getElementById('pass').value = p;
})

document.getElementById('copy').addEventListener("click", (e) => {
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
})
