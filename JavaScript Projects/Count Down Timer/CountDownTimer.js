const countDown = document.querySelector('birthday');

const interval = setInterval(() => {
    
const deadline = new Date(2022, 8,6,12,00,00);

const currentDate = new Date();

const diff = deadline - currentDate;

const days = Math.floor (diff/(1000 * 60 * 60 * 24) );

const hours = Math.floor((diff/(1000 * 60 * 60))% 24);

const minutes = Math.floor((diff/(1000* 60)) % 60);

const seconds = Math.floor((diff/1000) % 60);

birthday.innerHTML =
`<div data-content="days"> ${days} </div>
<div data-content="hours"> ${hours} </div>
<div data-content="minutes"> ${minutes} </div>
<div data-content="seconds"> ${seconds} </div>`;

}, 1000);

