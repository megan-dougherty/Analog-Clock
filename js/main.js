
var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

function clock(){
	var date = new Date();
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute);  
	var minuteDeg = (minute * 6) + (0.1 * second); 
	var secondDeg = second * 6; // 360/ 60 

	hourHand.style.transform = 'rotate('+  hourDeg + 'deg)';
	minuteHand.style.transform = 'rotate('+  minuteDeg + 'deg)';
	secondHand.style.transform = 'rotate('+  secondDeg + 'deg)';



	setTimeout(clock, 1000);
};


clock();




//12 _  360/12 for every hour shold rotate 30deg
// 30deg / 60 min per hour =.5
//13 _ // 360/ 60 rotates 360 per miutes in 1 hour. for each min should rotate 6deg / 60(minutes)= 0.1



