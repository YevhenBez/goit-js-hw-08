import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

import throttle from 'lodash.throttle';

player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));    
}, 1000)
);

const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);

player.setCurrentTime(parsedSettings.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
