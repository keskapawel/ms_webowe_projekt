const button = document.querySelector('#loadMoreWork');

const hiddenELements = document.querySelectorAll('.work_elements_hidden');
let openHandler = false;
// button.value = 'hide';

button.onclick = () => {
    if (openHandler) {
        hiddenELements.forEach(x => x.style.display = 'none');
        button.innerHTML = "load more work";
        openHandler = false;
    } else {
        hiddenELements.forEach(x => x.style.display = 'flex');
        openHandler = true;
        button.innerHTML = "Show less";
    }
}