function preload_bricks(){
  game.load.audio('brick', ['res/brick.ogg', 'res/brick.mp3']);
  game.load.image('brick', 'res/brick.png');
}

function load_bricks(){
  bricks = game.add.group();
  bricks.enableBody = true;

  for(var i = 0;i < 200;i+=64){
      var brick = bricks.create(i, game.world.height - 256, 'brick');
      brick.scale.setTo(2,2);
      brick.body.immovable = true;
  }

  for(var i = 600;i < 800;i+=64){
      var brick = bricks.create(i, game.world.height - 256, 'brick');
      brick.scale.setTo(2,2);
      brick.body.immovable = true;
  }

  for(var i = 200;i < 600;i+=64){
      var brick = bricks.create(i, game.world.height - 448, 'brick');
      brick.scale.setTo(2,2);
      brick.body.immovable = true;
  }

}

function hit_brick(player, brick){
  if(player.body.touching.up){
      brick.body.velocity.y = -300;              

      brick_sound = game.add.audio('brick');
      brick_sound.play();

      setTimeout(function(){
          brick.kill();
      },100);
  }
}

