var height = 600;
var width = 800;
var world_width = width;
//add gamepad1 var
var pad1;

var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  preload_music();
  preload_player();
  preload_coins();
  preload_platforms(); 
  preload_bricks();
}

function create() {
  create_music();
  game.physics.startSystem(Phaser.Physics.ARCADE);
  create_player();

  create_platforms();
  create_bricks();
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

