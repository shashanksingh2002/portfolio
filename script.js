const text = document.querySelector('#jsRunner p');


const string = ['Competitive Programmer', 'MERN-Stack Developer', 'Student', 'Engineer'];

setInterval(() => {
    let i = 0;
    const setintervalID=setInterval(() => {
        if (i === string.length) {
            clearInterval(setintervalID);
        }
        else {
            text.innerText = string[i];
            i++;
        }
    }, 1000);
}, 4000);
