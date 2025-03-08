function Playlist() {
    this.songs = []; // Initialize songs property
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
    this.songs.push(song);
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { song } = JSON.parse(input);
  const playlist = new Playlist();
  playlist.addSong(song);
  process.stdout.write(JSON.stringify(playlist.songs));
});