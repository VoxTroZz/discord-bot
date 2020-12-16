client.on('message', message => {
    if (message.content === 'clearall') {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
              message.channel.fetchMessages()
                 .then(function(list){
                      message.channel.bulkDelete(list);
                  }, function(err){message.channel.send("Erreur pour le clear du channel .")})
          }
    }
  });