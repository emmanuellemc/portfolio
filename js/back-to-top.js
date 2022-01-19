const totopbutton = document.getElementById('back-to-top');

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        totopbutton.style.display = 'block';
    } else {
        totopbutton.style.display = 'none';
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the top of the document
totopbutton.addEventListener('click', backToTop);
