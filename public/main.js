// Clinet Side Code
$(document).on('ready', function() {
  // $.get('http://localhost:3054', function(data, status){
  //   console.log('Data:', data);
  //   console.log('Status:', status);
  // });
  
  // $.get('/data', function(data, status){
  //   console.log('Data:', data);
  //   console.log('Status:', status);

  //   $('body').append('<p>'+data+'</p>');
  // });
   
  // $('#update-btn').on('click',function(){
  //     console.log('client clicked!');

  //     $.get('/data', function(data) {
  //       console.log('client data:', data);
  //       $('#counter').text(data.counterClient);
  //     });
  // });

  // pulling
  // setInterval(function(){
  //     $.get('/data', function(data) {
  //       console.log('client data:', data);
  //       $('#counter').text(data.counterClient);
  //     });    
  // }, 1000);

  // Handling a form submission
  $('#my-form').on('submit', function(e){
    e.preventDefault();

    var message = $('#my-message').val();

    var dataFromClient = {
      messageFromClient:message
    };

    $.post('/messageSubmit', dataFromClient, function(dataFromServer){
      console.log('Server:', dataFromServer);
      $('#message-from-server').text(dataFromServer.fromClient.messageFromClient);
    });
  });
});