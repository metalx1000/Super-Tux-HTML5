function preload_platforms(){
  game.load.image('ground', 'res/ground.png');
}

function load_platforms(){
  platforms = game.add.group();
  platforms.enableBody = true;

  for(var i = 0;i < 800;i+=64){
      var ground = platforms.create(i, game.world.height - 64, 'ground');
      ground.scale.setTo(2,2);
      ground.body.immovable = true;
  }
}
