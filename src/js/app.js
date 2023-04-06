
// получаем массив всех вкладок
const tabs = document.querySelectorAll(".tab");
// получаем массив всех блоков с содержимым вкладок
const contents = document.querySelectorAll(".content");
 
// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab--active");
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		// добавляем активный класс
		contents[i].classList.add("content--active");
 
	});
}


///////////

const btnAccordion = document.querySelectorAll('#accordion-button');
const bodyAccordion = document.querySelectorAll('#accordion-body');
for(x = 0; x < btnAccordion.length; x++){
    btnAccordion[x].onclick = function(){
        let accordionPath = this.getAttribute('data-accroidon');
        console.log(accordionPath)
        for(y = 0; y < bodyAccordion.length; y++){
            let accroidonTarget = bodyAccordion[y].getAttribute('data-accordion-target');
            if( bodyAccordion[y].getAttribute('data-accordion-target') === accordionPath){
                bodyAccordion[y].classList.toggle('accordion--active');
            }
        }

    }
}


const btnBar = document.querySelectorAll('.bar-button');
const bodyBar = document.querySelectorAll('.bar-body');
for(x = 0; x < btnBar.length; x++){
    btnBar[x].onclick = function(){
        let barPath = this.getAttribute('data-bar');
        console.log(barPath)
        for(y = 0; y < bodyBar.length; y++){
            let barTarget = bodyBar[y].getAttribute('data-bar-target');
            if( bodyBar[y].getAttribute('data-bar-target') === barPath){
                bodyBar[y].classList.toggle('bar--active');
                
            }
        }

    }
}


////////////

$(document).ready(function(){
    $('.accardion-item__trigger').click(function(){
        $(this).next('.accardion-item__content').slideToggle();
    });
});

$('.bx-plus, .bx-minus').on('click', function() {
    $(this).toggleClass('bx-plus');
    $(this).toggleClass('bx-minus');
});
