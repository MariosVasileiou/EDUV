var map = {
    cols: 8,
    rows: 8,
    tsize: 64,
    layers: [[
        3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 2, 1, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 3, 3, 1, 2, 3, 3, 3
    ], [
        4, 3, 3, 3, 3, 3, 3, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 5, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 4, 4, 0, 5, 4, 4, 4,
        0, 3, 3, 0, 0, 3, 3, 3
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', '/ElGreco/images/game_map_8lvls.png'),
        Loader.loadImage('character', '/ElGreco/images/robot_map.png')
    ];
};

Game.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
    this.hero = {x: 200, y: 200, image: Loader.getImage('character')};
};
Game._drawLayer = function (layer) {
    this.ctx.drawImage(this.tileAtlas,0,0);
    //console.log("camera x: ",this.camera.x," this.camera.y: ",this.camera.y," this.camera.width: ",this.camera.width," this.camera.height: ",this.camera.height);

};

Game.render = function () {
    // draw map background layer
    console.log("hero position x: ",this.hero.x,"hero position y: ",this.hero.y)
    this._drawLayer(0);
    // draw game sprites
    this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y);
    // draw map top layer
    this._drawLayer(1);
};
