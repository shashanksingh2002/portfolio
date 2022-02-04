const text = document.querySelector('#jsRunner p');
console.log('h');
const string = ['Competitive Programmer', 'Front-End Developer', 'Student', '2nd Year at SRM'];

string.forEach(string => {
        
        setInterval(() => {
            text.value = string;
        }, 1000);
       
});
