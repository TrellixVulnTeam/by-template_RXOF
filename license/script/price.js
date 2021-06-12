let price = document.getElementsByName('plan')
let formLicense = document.querySelector('.form_license')
let pVal = 0
let pId = ''

let count = document.getElementsByName('count_of_license')
let countV = 0
let priceCount = 0
// Вывод в TOTAL
let totalHTML = document.getElementsByName('totalPrice')

let numberPlan = document.getElementsByName("number_plan")


formLicense.onchange = function () {
	for (let i = 0; i < price.length; i++){
		if(price[i].checked == true){
			pVal = price[i].value
			pId = price[i].id
		}
	}
	for (let j = 0; j < count[0].length; j++) {
		if(count[0][j].selected  == true) {
			countV = count[0][j].value
		}
	}
	priceCount = pVal * countV
	totalHTML[0].innerText = priceCount

	if (pVal !== 0){
		numberPlan[0].innerText = pId
	}

	console.log(count)
}

function thx(){

	if (numberPlan[0].innerText !== 'You didn\'t choose a plan'){
		alert('You have purchased license. Thank you.')
	}
	else {
		alert('You have not selected a license plan. Please choose a plan.')
	}

}

