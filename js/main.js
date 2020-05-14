import ".\\game\\game.js";
requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        game: '../game',
        drawer: '../game/drawer',
        conf: '../game/conf',
        ball: '../game/ball',
        block: '../game/block',
        board: '../game/board',
        constants: '../game/constants',
        paddle: '../game/paddle'
    },
});
