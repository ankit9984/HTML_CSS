const input = document.getElementsByTagName('input');
const button = document.querySelector('.button');

button.addEventListener('click',()=>{
    event.preventDefault();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const firstNameError = document.querySelector('.first .error-message');
    const lastNameError = document.querySelector('.last .error-message');

    firstNameError.textContent = '';
    lastNameError.textContent = '';

    if(firstNameInput.value.trim() === ''){
        firstNameError.textContent = 'Invalid Detail'
    }

    if(lastNameInput.value.trim() === ''){
        lastNameError.textContent = 'Invalid Detail'
    }
})

