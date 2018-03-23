document.addEventListener('DOMContentLoaded', function () {

    var divbox1 = document.getElementById('divbox1'),
        divbox2 = document.getElementById('divbox2'),
        pbox1 = document.getElementById('pbox1'),
        pbox2 = document.getElementById('pbox2'),
        btn_prev = document.getElementById('btn_prev'),
        btn_next = document.getElementById('btn_next'),
        images = document.querySelectorAll('#gallery .photos img'),
        i = 0,
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
        add_btn3 = document.getElementById('add_btn3');


        /*Slider------------------------------------------------------- */

        btn_prev.addEventListener('click', function (e) {
            images[i].style.display = 'none';
            i--;
            if (i < 0) {
                i = images.length - 1;
            }
            images[i].style.display = 'inline-block';
            images[i].style.float = 'left';
        });

        btn_next.addEventListener('click', function (e) {
            images[i].style.display = 'none';
            i++;
            if (i>=images.length) {
                i = 0;
            }
            images[i].style.display = 'inline-block';
            images[i].style.float = 'left';
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
            add_btn1.style.backgroundColor = 'white';
            add_btn1.style.color = '#24B99F';
        });

        price_box1.addEventListener('mouseout', function (e) {
            price_box1.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
            typePlan1.style.color = '#24B99F';
            price_basic.style.color = 'rgba(140, 146, 138, 0.62)';
            add_btn1.style.backgroundColor = '#24B99F';
            add_btn1.style.color = 'white';
        })

        price_box2.addEventListener('mouseover', function (e) {
            price_box2.style.backgroundColor = '#24B99F';
            typePlan2.style.color = 'white';
            price_standard.style.color = '#24B99F';
            add_btn2.style.backgroundColor = 'white';
            add_btn2.style.color = '#24B99F';
        });

        price_box2.addEventListener('mouseout', function (e) {
            price_box2.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
            typePlan2.style.color = '#24B99F';
            price_standard.style.color = 'rgba(140, 146, 138, 0.62)';
            add_btn2.style.backgroundColor = '#24B99F';
            add_btn2.style.color = 'white';
        })

        price_box3.addEventListener('mouseover', function (e) {
            price_box3.style.backgroundColor = '#24B99F';
            typePlan3.style.color = 'white';
            price_advance.style.color = '#24B99F';
            add_btn3.style.backgroundColor = 'white';
            add_btn3.style.color = '#24B99F';
        });

        price_box3.addEventListener('mouseout', function (e) {
            price_box3.style.backgroundColor = 'rgba(244, 244, 244, 0.9)';
            typePlan3.style.color = '#24B99F';
            price_advance.style.color = 'rgba(140, 146, 138, 0.62)';
            add_btn3.style.backgroundColor = '#24B99F';
            add_btn3.style.color = 'white';
        })




});