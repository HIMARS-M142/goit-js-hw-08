import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (e) {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
player.on('timeupdate', throttle(onPlay, 1000));
const savedData = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(savedData);

player.setCurrentTime(parsedData);
