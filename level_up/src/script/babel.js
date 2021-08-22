import '@/styles/index.css'
import $ from 'jquery'

// Таймер
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date())
    let seconds = Math.floor((t / 1000) % 60)
    let minutes = Math.floor((t / 1000 / 60) % 60)   
    return {
      'total': t,      
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id)
    let minutesSpan = clock.querySelector('.minutes')
    let secondsSpan = clock.querySelector('.seconds')
  
    function updateClock() {
      let t = getTimeRemaining(endtime)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)  
      if (t.total <= 0) {
        clearInterval(timeinterval)
      }
    }
    updateClock();
    let timeinterval = setInterval(updateClock, 1000)
  }
  let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000)
  initializeClock('countdown', deadline)

// Скролл к форме
  let btnScroll = $('.scroll')
  let form = $('#order_form').offset().top

  for(let i = 0; i < btnScroll.length; i++){
    btnScroll[i].onclick = function (){
      window.scrollTo({
        top: form,
        behavior: "smooth"
      })
    }
  }

// Подсказка для инпутов при селекте
  let name = $('#name')
  name.focus(function (){
    let nameAlt = $('.name_alt')
    nameAlt.css("opacity", "1")
  })
  name.blur(function (){
    let nameAlt = $('.name_alt')
    nameAlt.css("opacity", "0")
  })

  let phone = $('#phone')
  phone.focus(function (){
    let phoneAlt = $('.phone_alt')
    phoneAlt.css("opacity", "1")
  })
  phone.blur(function (){
    let phoneAlt = $('.phone_alt')
    phoneAlt.css("opacity", "0")
  })

// Ввод только цифр
    for (let i = 0; i < phone.length; i++) {
      phone[i].oninput = function () {
            dpcm(this);
        }
    }

    function dpcm(input) {
        let value = input.value;
        let re = /[^0-9 ( ) +]/gi;
        if (re.test(value)) {
            value = value.replace(re, '');
            input.value = value;
        }
    }