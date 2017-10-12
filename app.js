const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
var youtubedl = require('youtube-dl');
var thumbnail ="";
var video = youtubedl('https://www.youtube.com/watch?v=_209r9TMB4MQ');
// Will be called when the download starts.





client.on('ready', () => {
  console.log('I am ready!');
  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);
    console.log('size: ' + info.size);
    thumbnail = info.title;
    video.pipe(fs.createWriteStream("Music/" + thumbnail + '.mp4'), function () {
      console.log("done");
  });
  });
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  } else if(message.content === "hej"){
      message.channel.sendMessage("Med dig");
      let voiceChannel = client.channels.get('228564805689016320');
      voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile(__dirname + '/Music/' + thumbnail + ".mp4");
      })
      .catch(console.error);
      
  }
});



client.login('MzY3MjU3NzQwNjYzNTg2ODE3.DL4zmw.Na1YCkQULd1CEwSd-XnY5HohvCM');