
const logInAccount = ((element) => {
    const email = element.querySelector('.email').value;
    const password = element.querySelector('.password').value;
    console.log(email, password);
    return {
        email,
        password
    }

})