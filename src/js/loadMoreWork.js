const button = document.getElementById('loadMoreWork');

const hiddenELements = document.querySelectorAll('.work_elements_hidden');
let openHandler = false;

button.onclick = () => {
    if (openHandler) {
        hiddenELements.forEach(x => x.style.display = 'none');
        openHandler = false;
    } else {
        hiddenELements.forEach(x => x.style.display = 'flex');
        openHandler = true;
    }
}