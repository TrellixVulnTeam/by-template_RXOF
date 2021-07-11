import * as $ from 'jquery'
import '@/styles/index.sass'




let mainForm = $('.main_form')
let addForm = $('.form_add_more')
let addMoreType = $('.add_more_type')
let btnSubmit = $('#sub')
let addProduct = $('#add_prod')
let productList = $('.main_form_products')
let totalPrice = $('#total_price')
let btnRemove
let a

//Все варианты покупки продуктов
const allProducts = [
    {name: '5 products', price: 80, discount: 36, each: 16},
    {name: '4 products', price: 72, discount: 28, each: 18},
    {name: '3 products', price: 60, discount: 20, each: 20},
    {name: '2 products', price: 44, discount: 12, each: 22},
    {name: '1 product', price: 24.99, discount: 0, each: 24.99}
]

//Шаблон продукта с полями ключевого слова и ссылки
const patternProduct =  '<div class="products_item">\n' +
                        '<div class="products_item_name">\n' +
                        '<h1></h1>\n' +
                        '<img src="img/close.png" class="products_item_remove">\n' +
                        ' </div>\n' +
                        '<label for="key">\n' +
                        '<p>Enter main keyword for the product</p>\n' +
                        '<input type="text" placeholder="for example, sylicon wine cup" novalidate>\n' +
                        '</label>\n' +
                        '<label for="url_form">\n' +
                        '<p>Enter link to the similar product as a reference</p>\n' +
                        '<input type="url" placeholder="https://..." novalidate>\n' +
                        '</label>\n' +
                        '</div>'
//Шаблон элемента списка содержащий вариант покупки с радио
const patternRadio =
                        '<li>\n' +
                         '<label>\n' +
                        '<input type="radio" name="product_type" >\n' +
                        '<div class="new_radio"></div>\n' +
                        '<div class="add_more_type_name">\n' +
                        '<h1></h1>\n' +
                        '<p></p>\n' +
                        '</div>\n' +
                        '</label>\n' +
                        '</li>'


//Динамически присваиваем имя, id для полей и обновляем цену
function renameProducts(){
    let productItem = $('.products_item')
    for(let j = 0; j < productItem.length; j++){
        let h1 = $('.products_item h1')
        h1[j].innerText = `Product ${j+1}`
        let inputKey = $('.products_item input[type="text"]')
        inputKey[j].id = `Product${j+1}key`
        let inputUrl = $('.products_item input[type="url"]')
        inputUrl[j].id = `Product${j+1}url`
        let imgClose = $('.products_item_name img')
        if(productItem.length > 1){
            imgClose.css('display', 'block')
        }
        else {
            imgClose.css('display', 'none')
        }
        price()
    }
}

//Функция отображения актуальной цены в зависимости от выбранного варианта покупки
function price(){
    let productItem = $('.products_item')
    totalPrice.html(allProducts[productItem.length - 1].price)
    console.log(allProducts, productItem.length - 1)
}

// Первоначальный вывод на экран одного продукта
$(document).ready(function (){
    allProducts.reverse()
    productList.append(patternProduct)
    renameProducts()
})

// Функция анимированного перехода форм
function animationForm (mainF, addF){
    let animation = $('.animation')
    let animationEffect = new Promise(function (resolve){
        animation.css('width', '95%')
        resolve()
    })

    animationEffect.then(() => {
        return new Promise(function (){
            setTimeout(() => {
                mainForm.css({
                    'display' : mainF
                })
                addForm.css({
                    'display' : addF
                })
                animation.css('width', '0')
            }, 1000)
        })
    })
}

//Переход к форме добавления продуктов и динамическое отображение списка с радио
$('.btn_add_more').click(function (){
    a = 0
    allProducts.reverse()
    addMoreType.html('')
    for(let i = 0; i < allProducts.length; i++){
        //Динамически отображаем варианты покупки
        addMoreType.append(patternRadio)
        let label = $('.add_more_type label')
        let radio = $('.add_more_type input[type="radio"]')
        let typeName = $('.add_more_type h1')
        let typeP = $('.add_more_type p')
        label[i].htmlFor = `prod${allProducts.length - i}`
        radio[i].id = `prod${allProducts.length - i}`
        radio[i].value = allProducts.length - i

        if(allProducts[i].name !== '1 product'){
            typeName[i].innerText = `${allProducts[i].name} for ${allProducts[i].price} usd / ${allProducts[i].each}$ for each`
            typeP[i].innerText = `You safe ${allProducts[i].discount}% on each patent check`
        }
        else{
            typeName[i].innerText = `${allProducts[i].name} for ${allProducts[i].price} usd`
            typeP[i].style.display = 'none'
        }
    }
    animationForm('none', 'block')
})

//Взаимодействие с радио и стилями
addForm.change(function () {
    let radio = $('.add_more_type input[type="radio"]')
    let li = $('.add_more_type li')
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked) {
            li[i].classList.add('active_radio')
            a = radio[i].value
        }
         else{
            li[i].classList.remove('active_radio')
         }
    }
})

//Добавление продуктов
addProduct.click(function (){
        productList.html('')
        if(a >= 1) {
            for (let i = 0; i < a; i++) {
                productList.append(patternProduct)
            }
            allProducts.reverse()
            renameProducts()
            animationForm('block', 'none')
            removeItem()
        }
        else {
            alert('Choose the number of products!')
        }
})

//Удаление продукта
function removeItem(){
    let productItem = $('.products_item')
    btnRemove = $('.products_item_remove')
    for (let i = 0; i < btnRemove.length; i++){
       btnRemove[i].onclick = function (){
           productItem[i].remove()
           price()
           renameProducts()
       }
    }
}
//Событие при клике на кнопку
// Появляется лоадер и в зависимости от состояния полей направляет ну успешную или ошибку оплаты
btnSubmit.click(function (){
    let allInputs = $('.main_form input')
    let mainForm = $('.main_form')
    let loader = $('.lds-ring')
    let inputText = $('.submit_text')

    let loading = new Promise( function (resolve) {
        setTimeout(() => {
            loader.css('display' ,'block')
            inputText.css('display' ,'none')
            resolve()
        }, 500)
    })
    //Если хотя бы одно поле не заполнено переведет на страницу ошибки оплаты (paymanterror)
    //Если все поля заполнены переведет на страницу успешной оплаты (paymentsuccess)
    loading.then(() => {
        return new Promise( function () {
            setTimeout(() => {
                for(let i = 0; i < allInputs.length; i++){
                       if(allInputs[i].value === ''){
                           mainForm.attr('action','paymanterror.html')
                       }
                       else{
                           mainForm.attr('action','paymentsuccess.html')
                       }
                    }
                mainForm.submit()
            }, 2000)
        })
    })

})
