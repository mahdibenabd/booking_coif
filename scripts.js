document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const prevBtns = document.querySelectorAll('#prevBtn');
    const nextBtns = document.querySelectorAll('#nextBtn');
    const optionBoxes = document.querySelectorAll('.option-box');
    let currentTab = 0;

    showTab(currentTab);

    function showTab(n) {
        tabs[n].classList.add('active');
        if (n == 0) {
            prevBtns[0].style.display = 'none';
        } else {
            prevBtns[0].style.display = 'inline';
        }
        if (n == (tabs.length - 1)) {
            nextBtns[0].style.display = 'none';
        } else {
            nextBtns[0].style.display = 'inline';
        }
    }

    function nextPrev(n) {
        tabs[currentTab].classList.remove('active');
        currentTab = currentTab + n;
        if (currentTab >= tabs.length) {
            document.getElementById('bookingForm').submit();
            return false;
        }
        showTab(currentTab);
    }

    nextBtns.forEach(btn => btn.addEventListener('click', function() {
        nextPrev(1);
    }));

    prevBtns.forEach(btn => btn.addEventListener('click', function() {
        nextPrev(-1);
    }));

    optionBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const selected = document.querySelector('.option-box.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            this.classList.add('selected');
            const inputId = this.parentElement.querySelector('input[type="hidden"]').id;
            document.getElementById(inputId).value = this.getAttribute('data-value');
        });
    });
});
