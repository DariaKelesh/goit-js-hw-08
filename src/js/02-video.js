// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


    // Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.


player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
    console.log(localStorage.getItem("videoplayer-current-time"));
   
});

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

player.setCurrentTime(30.456).then(function(seconds) {
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