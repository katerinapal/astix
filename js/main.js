requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        game: '../game'
    }
});

requirejs(['game/game']);
