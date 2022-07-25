import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(setTime, 1000));


function setTime({ seconds } ) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds)
    console.log(seconds);
}

const storageData = localStorage.getItem(LOCALSTORAGE_KEY)

if (storageData) {
    player.setCurrentTime(storageData)
}



    
