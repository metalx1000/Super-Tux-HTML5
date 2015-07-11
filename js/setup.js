var height = 720;
var width = 1280;
var world_width = width;
//add gamepad1 var
var pad1;

var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.tilemap('map', 'levels/json/level1.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('convex', 'res/tiles/convex.png');

  preload_music();
  preload_player();
  preload_coins();
}

function create() {

  map = game.add.tilemap('map');
  map.addTilesetImage('convex');
  map.setCollisionBetween(4, 9);
  layer = map.createLayer('Tile Layer 1');
  layer.resizeWorld();

  create_music();
  game.physics.startSystem(Phaser.Physics.ARCADE);
  create_player();

  create_coins();

  game.input.onDown.add(go_fullscreen, this);

}

function update() {
  update_player();
  update_coins();
} 

function go_fullscreen(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.startFullScreen();
}



