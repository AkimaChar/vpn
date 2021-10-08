"use strict";

var bm_icon = document.querySelector(".burger_menu__icon");
var bm_body = document.querySelector(".burger_menu__body");

bm_icon.onclick = function (e) {
  bm_icon.classList.toggle("active");
  bm_body.classList.toggle("active");
  document.querySelector("body").style.overflow = bm_icon.className.includes("active") ? "hidden" : "auto";
  document.querySelector("html").style.overflow = bm_icon.className.includes("active") ? "hidden" : "auto";
};

document.querySelector('.plan-card:nth-of-type(2)').classList.add('active-plan');
let i = 1;
document.querySelectorAll('.plan-card').forEach(el => {
  el.setAttribute('data-item-order', i);
  i++;
})

document.querySelector('.plans_slider__right-arrow').addEventListener('click', () => {
  const card = document.querySelector('.active-plan');
  let item_order = card.getAttribute('data-item-order');
  +item_order++;
  if (item_order <= 3) {
    chooseMarginLength(item_order);
  } else {
    chooseMarginLength(1);
  }
});


document.querySelector('.plans_slider__left-arrow').addEventListener('click', () => {
  const card = document.querySelector('.active-plan');
  let item_order = card.getAttribute('data-item-order');
  +item_order--;
  if (item_order >= 1) {
    chooseMarginLength(item_order);
  } else {
    chooseMarginLength(3);
  }
});

function chooseMarginLength(order) {
  let length;
  const slider_item = document.querySelector('.plan-card');
  document.querySelectorAll('.plan-card').forEach(el => {
    if (!el.classList.contains('active-plan')) {
      length = el.clientWidth;
    }
  });
  const button_width = length - document.querySelector('.body-plan-button').clientWidth;
  if (window.clientWidth > 400) {
    switch (order) {
      case 1:
        slider_item.style.marginLeft = (((length * 2) - 23) + button_width) + 'px';
        break;
      case 2:
        slider_item.style.marginLeft = 0;
        break;
      case 3:
        slider_item.style.marginLeft = (((length * -2) + 23) - button_width) + 'px';
        break;
    }
  } else {
    switch (order) {
      case 1:
        slider_item.style.marginLeft = (((length * 2) - 75) + button_width) + 'px';
        break;
      case 2:
        slider_item.style.marginLeft = 0;
        break;
      case 3:
        slider_item.style.marginLeft = (((length * -2) + 75) - button_width) + 'px';
        break;
    }
  }
  document.querySelector('.active-plan').classList.remove('active-plan');
  document.querySelector('.plan-card[data-item-order="' + order + '"]').classList.add('active-plan');
  document.querySelectorAll('.navigation-points_button').forEach(el => {
    el.classList.remove('active-point')
  });
  document.querySelector('.navigation-points_button[onclick="chooseMarginLength(' + order + ')"]').classList.add('active-point');
}

document.querySelectorAll('.faq-item_switch-arrow').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('#p-' + el.id).classList.toggle('active-answer');
    document.querySelector('#' + el.id).classList.toggle('faq-item_switch-arrow-active');
  })
  console.log(1);
});

function openAnswer(el) {
  document.querySelector('#p-' + el.id).classList.toggle('active-answer');
  document.querySelector('#' + el.id).classList.toggle('faq-item_switch-arrow-active');
}