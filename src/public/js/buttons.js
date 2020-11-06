var chat = document.getElementById('chat');
var chatBar = document.querySelector('.main__right');
var videos = document.querySelector('.main__left');
var chatOpen = false;

chat.addEventListener('click', () => {
  if (chatOpen == false) {
    chatBar.style.display = 'flex';
    videos.style.flex = '0.8';
    chatOpen = true;
  } else {
    chatBar.style.display = 'none';
    videos.style.flex = '1';

    chatOpen = false;
  }
});
