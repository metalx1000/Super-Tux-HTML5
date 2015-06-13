var player_speed = 300;
var player_decel = 4;
var player_face = "right";
var player_jump_vel = 550;
var player_run = 0;
var pad1;

function preload_player(){
  game.load.spritesheet('player', 'res/player_walk.png', 46, 66);
  game.load.audio('jump', ['res/jump.ogg', 'res/jump.mp3']);

}

function load_player(){
  player = game.add.sprite(10, height - 256, 'player');
  player.scale.setTo(1.5,1.5);
  player.animations.add('left', [0, 1, 2], 10, true);
  player.animations.add('right', [3, 4, 5], 10, true);

  game.physics.arcade.enable(player);
 
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 600;
  player.body.collideWorldBounds = true;
}

function update_player(){
  player_physics();
  player_velocity();
  player_controls();
}

function player_physics(){
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(player, bricks, hit_brick, null, this);
  game.physics.arcade.overlap(player, coins, collect_coins, null, this);
}

function player_jump(){
  jump = game.add.audio('jump');
  jump.play();
  player.body.velocity.y = -player_jump_vel;
}

function player_run_true(){player_run = 200}
function player_run_false(){player_run = 0}

function player_velocity(){
  if(player.body.velocity.x > 1){
      player.body.velocity.x -= player_decel;
  }else if(player.body.velocity.x < -1){
      player.body.velocity.x += player_decel;
  }else{
      player.body.velocity.x = 0;
      player.animations.stop();
      if(player_face == "right"){
          player.frame = 3;
      }else{
          player.frame = 2;
      }
  }
}

function player_controls(){
  //load gamepad
  game.input.gamepad.start();
  // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
  pad1 = game.input.gamepad.pad1;
 
  cursors = game.input.keyboard.createCursorKeys();
  //added gamepad options to left and right
  if(cursors.right.isDown 
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
      player.body.velocity.x = player_speed + player_run;
      player.animations.play('right');
      player_face = "right";
  }else if(cursors.left.isDown
  || pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
      player.body.velocity.x = -player_speed - player_run;
      player.animations.play('left');
      player_face = "left";
  }

  if(cursors.up.isDown && player.body.touching.down){
      player_jump();
  }

  //gamepad connected?
  if(pad1.connected){
      //gamepad jump options
      if(pad1._buttons[0].isDown == true
      //number in array may not be the same as labeled on gamepad
      || pad1._rawPad.buttons[3].pressed == true)
      {
          //if player is on ground
          if(player.body.touching.down){
              player_jump();
          }
      }
      //gamepad Run otpions
      if(pad1._buttons[0].isDown == true
      //number in array may not be the same as labeled on gamepad
      || pad1._rawPad.buttons[2].pressed == true){
          player_run_true();
      }else{
          player_run_false();
      } 
  }

}
