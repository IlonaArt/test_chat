(function() {
    let popUp = document.querySelector('.pop-up');
    let showPopUpBtn = document.querySelector('.btn-show');
    let closePopUpBtn = document.querySelector('.header__button-close'); 
    const messageForm = document.getElementById('message-form');
    const messageTextInput = document.getElementById('message');
    let dialogueContainer = document.querySelector('.dialogue');

    showPopUpBtn.addEventListener('click', function(e) {
        popUp.classList.remove('hidden');
        event.target.classList.add('hidden');
        dialogueContainer.scrollTop = dialogueContainer.scrollHeight - dialogueContainer.offsetHeight;
    });

    closePopUpBtn.addEventListener('click', function() {
        popUp.classList.add('hidden');
        showPopUpBtn.classList.remove('hidden');
    }); 
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let messageTextValue = messageTextInput.value.trim();
        if (messageTextValue !== '') {        
            let dialogueMessage = document.createElement('div');
            dialogueMessage.classList.add('dialogue__item');
            dialogueMessage.classList.add('dialogue-message'); 
            dialogueMessage.classList.add('dialogue-message_owner');
            dialogueMessage.classList.add('highlighter');
            let userImg = document.createElement('img');
            userImg.classList.add('dialogue-message__user-img');
            userImg.setAttribute('src', 'img/img2.jpg');
            let userText = document.createElement('p');
            userText.classList.add('dialogue-message__user-text');
            userText.innerText = messageTextValue;
            let messageDate = document.createElement('div');
            messageDate.classList.add('dialogue-message__date');
            const date = new Date();
            const hours = date.toLocaleString('ru', {hour: 'numeric', minute: 'numeric'});
            messageDate.innerText = hours;
            dialogueMessage.appendChild(userImg);
            dialogueMessage.appendChild(userText);
            dialogueMessage.appendChild(messageDate);
            dialogueContainer.appendChild(dialogueMessage);
            dialogueContainer.scrollTop = dialogueContainer.scrollHeight - dialogueContainer.offsetHeight;
            messageTextInput.setAttribute('rows', '4');
            setTimeout(function() {
                dialogueMessage.classList.remove('highlighter');
            }, 2000);
        }
        messageTextInput.value = '';    
    });

    messageTextInput.addEventListener('input', function(event) {
        const input = event.target;
        let rows = input.getAttribute('rows');
        if (input.scrollHeight > input.offsetHeight) {
            ++rows;
            if (rows <= 7) {
                input.setAttribute('rows', rows);
                dialogueContainer.scrollTop = dialogueContainer.scrollHeight - dialogueContainer.offsetHeight;
            }
        }
    });
})();
