const url = "https://wild-lion-khakis.cyclic.app";
const localUrl = "http://localhost:3000"

const btn_register = function(){
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  console.log(name, email, password);
  register(name, email, password);
}

function register(name, email, password){
  axios.post(localUrl + "/registration", {
    name: name,
    email: email,
    password: password,
    userAdm: false
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log(error))
}

function getTestNilOn() {
  axios.get(localUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.log(error))
}

getTestNilOn()
