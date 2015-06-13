function preload_music(){
  game.load.audio('music', ['res/music.ogg', 'res/music.mp3']);
  game.load.audio('complete', ['res/leveldone.ogg', 'res/leveldone.mp3']);

}

function create_music(){
  music = game.add.audio('music');
  music.play('',0,1,true);
}
