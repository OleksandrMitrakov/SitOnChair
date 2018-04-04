document.addEventListener('DOMContentLoaded', function () {

    var divbox1 = document.getElementById('divbox1'),
        divbox2 = document.getElementById('divbox2'),
        pbox1 = document.getElementById('pbox1'),
        pbox2 = document.getElementById('pbox2'),
        btn_prev = document.getElementById('btn_prev'),
        btn_next = document.getElementById('btn_next'),
        images = document.querySelectorAll('#gallery .photos img'),
        k = 0,
        price_box1 = document.getElementById('pricebox1'),
        price_box2 = document.getElementById('pricebox2'),
        price_box3 = document.getElementById('pricebox3'),

        typePlan1 = document.getElementById('type_plan1'),
        typePlan2 = document.getElementById('type_plan2'),
        typePlan3 = document.getElementById('type_plan3'),

        price_basic = document.getElementById('price_basic'),
        price_standard = document.getElementById('price_standard'),
        price_advance = document.getElementById('price_advance'),

        add_btn1 = document.getElementById('add_btn1'),
        add_btn2 = document.getElementById('add_btn2'),
        add_btn3 = document.getElementById('add_btn3'),

        little_circle1 = document.getElementById('box_circle1'),
        little_circle2 = document.getElementById('box_circle2'),
        little_circle3 = document.getElementById('box_circle3'),

        circle1 = document.querySelector('.circle1'),
        circle2 = document.querySelector('.circle2'),
        circle3 = document.querySelector('.circle3');

    /*Slider------------------------------------------------------- */

    btn_prev.addEventListener('click', function (e) {
        images[k].style.display = 'none';
        k--;
        if (k < 0) {
            k = images.length - 1;
        }
        images[k].style.display = 'inline-block';
        images[k].style.float = 'left';
    });

    btn_next.addEventListener('click', function (e) {
        images[k].style.display = 'none';
        k++;
        if (k >= images.length) {
            k = 0;
        }
        images[k].style.display = 'inline-block';
        images[k].style.float = 'left';
    });


    /*Hide and Show white rows with names on boxes in Catalog-------- */

    divbox1.addEventListener('mouseover', function (e) {
        pbox1.hidden = true;
    })

    divbox1.addEventListener('mouseout', function (e) {
        pbox1.hidden = false;
    })

    divbox2.addEventListener('mouseover', function (e) {
        pbox2.hidden = true;
    })

    divbox2.addEventListener('mouseout', function (e) {
        pbox2.hidden = false;
    })


    /*Change Color of Price Labels when mouseover ------------------*/

    price_box1.addEventListener('mouseover', function (e) {
        price_box1.style.backgroundColor = '#24B99F';
        typePlan1.style.color = 'white';
        price_basic.style.color = '#24B99F';
        price_basic.style.backgroundColor = 'white';
        add_btn1.style.backgroundColor = 'white';
        add_btn1.style.color = '#24B99F';
        little_circle1.style.backgroundColor = '#24B99Fed';
        little_circle1.style.border = 'none';
        circle1.style.backgroundColor = 'white';
    });

    price_box1.addEventListener('mouseout', function (e) {
        price_box1.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        typePlan1.style.color = '#24B99F';
        price_basic.style.color = 'rgba(140, 146, 138, 0.62)';
        price_basic.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        add_btn1.style.backgroundColor = '#24B99F';
        add_btn1.style.color = 'white';
        little_circle1.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        little_circle1.style.border = '1px solid rgba(185, 191, 183, 0.65)';
        circle1.style.backgroundColor = 'rgba(186, 192, 184, 0.86)';
    })

    price_box2.addEventListener('mouseover', function (e) {
        price_box2.style.backgroundColor = '#24B99F';
        typePlan2.style.color = 'white';
        price_standard.style.color = '#24B99F';
        price_standard.style.backgroundColor = 'white';
        add_btn2.style.backgroundColor = 'white';
        add_btn2.style.color = '#24B99F';
        little_circle2.style.backgroundColor = '#24B99Fed';
        little_circle2.style.border = 'none';
        circle2.style.backgroundColor = 'white';
    });

    price_box2.addEventListener('mouseout', function (e) {
        price_box2.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        typePlan2.style.color = '#24B99F';
        price_standard.style.color = 'rgba(140, 146, 138, 0.62)';
        price_standard.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        add_btn2.style.backgroundColor = '#24B99F';
        add_btn2.style.color = 'white';
        little_circle2.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        little_circle2.style.border = '1px solid rgba(185, 191, 183, 0.65)';
        circle2.style.backgroundColor = 'rgba(186, 192, 184, 0.86)';
    })

    price_box3.addEventListener('mouseover', function (e) {
        price_box3.style.backgroundColor = '#24B99F';
        typePlan3.style.color = 'white';
        price_advance.style.color = '#24B99F';
        price_advance.style.backgroundColor = 'white';
        add_btn3.style.backgroundColor = 'white';
        add_btn3.style.color = '#24B99F';
        little_circle3.style.backgroundColor = '#24B99Fed';
        little_circle3.style.border = 'none';
        circle3.style.backgroundColor = 'white';
    });

    price_box3.addEventListener('mouseout', function (e) {
        price_box3.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        typePlan3.style.color = '#24B99F';
        price_advance.style.color = 'rgba(140, 146, 138, 0.62)';
        price_advance.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        add_btn3.style.backgroundColor = '#24B99F';
        add_btn3.style.color = 'white';
        little_circle3.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
        little_circle3.style.border = '1px solid rgba(185, 191, 183, 0.65)';
        circle3.style.backgroundColor = 'rgba(186, 192, 184, 0.86)';
    })

    /*Drop down list in KALKULATOR area and Summary Table ------------------*/

    var dropDownElements = document.querySelectorAll('.drop_down_list');
    var allListArrowElements = document.getElementsByClassName('list_arrow');
    var summaryColor = document.querySelector('.color');
    console.log(summaryColor);

    for (var i = 0; i < dropDownElements.length; i++) {
        //Used for open/close
        var listArrowElements = dropDownElements[i].querySelectorAll('.list_arrow');
        addListenersToOpenCloseArrows(listArrowElements);

        var productLiElements = dropDownElements[i].querySelectorAll('.list_panel > li');
        var labelElement = dropDownElements[i].querySelector('.list_label');
        var summaryItemName = document.querySelector('.title');


        //Change label text
        addListenersToCheckOptions(productLiElements, labelElement);
    }

    function addListenersToOpenCloseArrows(listArrowElements) {
        for (var i = 0; i < listArrowElements.length; i++) {
            listArrowElements[i].addEventListener('click', function (e) {
                for (var j = 0; j < allListArrowElements.length; j++) {
                    if (e.target.id === allListArrowElements[j].id) {
                        continue;
                    }
                    var elementClassList = allListArrowElements[j].nextElementSibling.classList;
                    if (elementClassList.contains('show_list')) {
                        allListArrowElements[j].nextElementSibling.classList.remove('show_list');
                    }
                }
                e.target.nextElementSibling.classList.toggle('show_list');
            })
        }
    }

    function addListenersToCheckOptions(productLiElements, labelElement) {
        for (var i = 0; i < productLiElements.length; i++) {
            productLiElements[i].addEventListener('click', function (e) {
                labelElement.innerHTML = e.target.innerHTML;
                e.target.parentElement.classList.toggle('show_list');
                e.target.parentElement.parentElement.firstElementChild.classList.toggle('choosed');
            });
        }
    }

    /* Summary */

    var panelLeft = document.querySelector('.panel_left'),
        panelRight = document.querySelector('.panel_right'),
        sum = document.querySelector('.summary_panel .sum strong');

    function calculateFinalPrice() {
        var finalPrice = 0;
        for (var j = 0; j < panelRight.children.length; j++) {
            if (panelRight.children[j].textContent != '') {
                finalPrice = finalPrice + Number(panelRight.children[j].textContent);
            }
        }
        sum.textContent = finalPrice + ' zł';
    }

    var listItemsName = document.querySelectorAll('.chair_name li'),
        listItemsFabric = document.querySelectorAll('.chair_fabric li'),
        listItemsChairsColors = document.querySelectorAll('.chair_colors li'),
        transport = document.querySelector('#check2'),

        chairTitle = panelLeft.querySelector('h4'),
        chairColor = panelLeft.querySelector('.color'),
        chairPattern = panelLeft.querySelector('.pattern'),
        chairTransport = panelLeft.querySelector('.transport'),

        chairTitleValue = panelRight.querySelector('h4'),
        chairColorValue = panelRight.querySelector('.color'),
        chairPatternValue = panelRight.querySelector('.pattern'),
        chairTransportValue = panelRight.querySelector('.transport');

    listItemsName.forEach(function (value) {
        value.addEventListener('click', function () {
            chairTitle.innerText = this.innerText;
            var chair_value1 = parseInt(this.dataset.price);
            chairTitleValue.innerText = chair_value1;
            calculateFinalPrice();
        });
    });

    listItemsFabric.forEach(function (value) {
        value.addEventListener('click', function () {
            chairPattern.innerText = this.innerText;
            var chair_value2 = parseInt(this.dataset.price);
            chairPatternValue.innerText = chair_value2;
            calculateFinalPrice();
        });
    });

    listItemsChairsColors.forEach(function (value) {
        value.addEventListener('click', function () {
            chairColor.innerText = this.innerText;
            var chair_value3 = parseInt(this.dataset.price);
            chairColorValue.innerText = chair_value3;
            calculateFinalPrice();
        });
    });

    transport.addEventListener('change', function () {
        if (transport.checked) {
            chairTransport.innerText = "Transport";
            var chair_value4 = parseInt(this.dataset.transportPrice);
            chairTransportValue.innerText = chair_value4;
            calculateFinalPrice();
        } else {
            chairTransport.innerText = "";
            chair_value4 = "";
            chairTransportValue.innerText = chair_value4;
            calculateFinalPrice();
        }
    });


    /* -------------------------------------------------------------------- */
}); 