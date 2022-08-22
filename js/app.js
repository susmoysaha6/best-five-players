// event listener for select button
const items = document.getElementsByClassName('select-btn');
let count = 1
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('click', function (event) {
        event.preventDefault();
        if (count <= 5 && !event.target.classList.contains('active')) {
            let playerName = event.target.parentNode.children[0].innerText;
            // create new element and push the text.
            let bestFiveList = document.getElementById('player-list');
            let li = document.createElement('li');
            li.innerText = playerName;
            bestFiveList.appendChild(li);
            event.target.classList.add('active');
            event.target.setAttribute('disabled', 'disabled');
            count = count + 1;
        } else if (count > 5) {
            alert('You already have selected 5 players')
        }
        // event.target.removeEventListener();
    })
}
// 
function getElementByInputId(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputNumber = parseFloat(inputString);
    inputElement.value = '';
    return inputNumber;

}
// event handler for calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
    const element = document.getElementById("player-list");
    let totalPlayer = element.childNodes.length - 1;
    const perPlayerBudget = getElementByInputId('budget-per-player')
    const playerExpenceField = document.getElementById('player-expence');

    if (isNaN(perPlayerBudget) || perPlayerBudget < 0) {
        alert('Enter valid number');
        return;
    }
    const totalPlayerExpence = totalPlayer * perPlayerBudget;
    playerExpenceField.innerText = totalPlayerExpence;

})