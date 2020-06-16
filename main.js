var btns = document.querySelectorAll('.accordion__btn');

function makeAccordion(listButtons) {
    for (var i = 0; i < listButtons.length; i++) {
        listButtons[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }
}

makeAccordion(btns);
