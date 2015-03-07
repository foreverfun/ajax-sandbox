// Server Side Code

var counterServer = 0;

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  data: function(req, res) {
    // res.send('Got some data!');
    
    // send data as an object
    res.send({
      counterClient: counterServer
    });
    
    counterServer++;
  },

  messageSubmit: function(req, res) {
    console.log('Server:', req.body);
    res.send({
      fromClient: req.body,
      fromServer: 'Hey from server!'
    });
  }
};

module.exports = indexController;