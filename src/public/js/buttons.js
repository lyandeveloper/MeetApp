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

const setMuteButton = () => {
  const html = `
    <i class="fas fa-microphone"></i> 
  `;
  document.querySelector('.main__mute_button').innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"  style="color: red"></i> 
  `;
  document.querySelector('.main__mute_button').innerHTML = html;
};

const setStopVideo = () => {
  const html = `
    <i class="fas fa-video"></i> 
  `;
  document.querySelector('.main__video_button').innerHTML = html;
};

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash" style="color: red"></i> 
  `;
  document.querySelector('.main__video_button').innerHTML = html;
};
