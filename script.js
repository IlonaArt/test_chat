(function() {
    const messageForm = document.getElementById('message-form');
    let dialogueContainer = document.querySelector('.dialogue');
    dialogueContainer.scrollTop = dialogueContainer.offsetHeight;
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageTextInput = document.getElementById('message');
        let messageTextValue = messageTextInput.value;
        if (messageTextValue !== '') {        
            let dialogueMessage = document.createElement('div');
            dialogueMessage.classList.add('dialogue__item', 'dialogue__item_owner', 'dialogue-message', 'highlighter');
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
            dialogueContainer.scrollTop = dialogueContainer.offsetHeight;
            messageTextInput.value = '';
            setTimeout(function() {
                dialogueMessage.classList.remove('highlighter');
            }, 2000);
        }    
    })
})();
