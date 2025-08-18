const bighand = document.querySelector('.secandmin');
const hand = document.querySelector('.dagige');
const redhand = document.querySelector('.horf');

const hourstime = document.getElementById('hourstime');
const secondstime = document.getElementById('secondstime');
const minutestime= document.getElementById('minutestime');



setInterval(()=>{
    const date = new Date()

    
    const bighandfirst = date.getSeconds();
    const handfirst = date.getHours();
    const redhandfirst = date.getMinutes();
    
    
    const hours = bighandfirst * 6;
    const minutes = redhandfirst *6 +bighandfirst*0.1;
    const seconds = (handfirst % 12) * 30 + redhandfirst;


bighand.style.transform = `rotate(${hours}deg)`;
hand.style.transform = `rotate(${minutes}deg)`;
redhand.style.transform = `rotate(${seconds}deg)`;


hourstime.innerHTML = handfirst.toString().padStart(2 , 0);
secondstime.innerHTML = redhandfirst.toString().padStart(2 , 0);
minutestime.innerHTML = bighandfirst.toString().padStart(2 , 0);
},1000);



