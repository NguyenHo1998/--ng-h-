window.onload = function(){
    const hourHand=document.querySelector('.hourHand');
    const minuteHand=document.querySelector('.minuteHand');
    const sechand=document.querySelector('.sec');

    function setDate(){
        const today=new Date();

        const hour= today.getHours();
        const hourDeg= (hour/12*360);
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        const min=today.getMinutes();
        const minDeg=(min/60*360);
        minuteHand.style.transform=`rotate(${minDeg}deg)`;

        const sec=today.getSeconds();
        const secDeg=((sec/60*360)+360);
        sechand.style.transform=`rotate(${secDeg}deg)`;
        console.log(hour,min,sec) 
    }
    setInterval(setDate, 1000);
}
