import '@/styles/index.sass'

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);    
    return {
      'total': t,      
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
//   var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
  var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);


//   let btnScroll = document.querySelector('.scroll')

// btnScroll.onclick = function (){
// 	window.scrollTo({
// 		top: 1800,
// 		behavior: "smooth"
// 	})
// }

// window.addEventListener('scroll', function() {
//     console.log(pageYOffset);
//   });