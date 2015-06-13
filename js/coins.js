var numCoinsStart = Math.floor(world_width / 110);
var numCoins = numCoinsStart; 

function preload_coins(){
  game.load.audio('coin', ['res/coin.ogg', 'res/coin.mp3']);
  game.load.spritesheet('coin', 'res/coin.png', 32, 32);
}

function load_coins(){
    coins = game.add.group();
    coins.enableBody = true;
    for (var i = 0; i < numCoinsStart; i++)
    {
        var coin = coins.create(i * width / numCoins + 64, 0, 'coin');
        coin.scale.setTo(1.5,1.5);
        coin.body.gravity.y = 300;
        coin.body.bounce.y = 0.2;
        coin.animations.add('spin', [0, 1, 2], 10, true);
        coin.animations.play('spin');

    }            
}

function update_coins(){
  coins_physics();
}

function coins_physics(){
  game.physics.arcade.collide(coins, bricks);
  game.physics.arcade.collide(coins, platforms);
}

function collect_coins(player,coin){
    coin.kill();
    var coin = game.add.audio('coin');
    coin.play();
    numCoins -= 1;
    if(numCoins == 0){
      music.stop();
      music = game.add.audio('complete');
      music.play();
      numCoins = numCoinsStart;
      load_coins();
      setTimeout(function(){
        music.stop();
        music = game.add.audio('music');
        music.play();
      },7000);
    }
}

