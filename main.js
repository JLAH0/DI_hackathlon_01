// clear
let finalval = 0
let display = document.querySelector('#display')

//opening value
display.value = finalval

document.querySelector('#clear').addEventListener('click', ()=> {
    finalval = 0
    display.value = finalval;
})

const seven = () => {
    console.log(this)
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '7'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '7'
    }
}

const seven = () => {
    console.log(this)
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '7'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '7'
    }
}

const seven = () => {
    console.log(this)
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '7'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '7'
    }
}