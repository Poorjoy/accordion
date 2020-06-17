var btns = document.querySelectorAll('.accordion__btn');

function makeAccordion(listButtons) {
    for (var i = 0; i < listButtons.length; i++) {

        if (listButtons[i].classList.contains('active')) {
            listButtons[i].nextElementSibling.style.maxHeight = listButtons[i].nextElementSibling.scrollHeight + 'px';
        }

        listButtons[i].addEventListener("click", function(event) {
            for (var btn of listButtons) {
                btn.classList.remove('active');
                btn.nextElementSibling.style.maxHeight = null;
            }

            event.target.classList.add('active');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
        });
    }
}

makeAccordion(btns);
