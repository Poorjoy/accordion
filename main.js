var btns = document.querySelectorAll('.accordion__btn');

function makeAccordion(listButtons) {
    for (var i = 0; i < listButtons.length; i++) {

        if (listButtons[i].classList.contains('active')) {
            listButtons[i].nextElementSibling.style.maxHeight = listButtons[i].nextElementSibling.scrollHeight + 'px';
        }

        listButtons[i].addEventListener("click", function (event) {

            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
            } else {
                for (var btn of listButtons) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.maxHeight = null;
                }
                event.target.classList.add('active');
            }

            if (this.nextElementSibling.style.maxHeight) {
                this.nextElementSibling.style.maxHeight = null;
            } else {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
            }
        });
    }
}

makeAccordion(btns);
