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
