$(function() {


  $('body').on('click', '.fa-times', function() {
    console.log(this);
    var _id = $(this).parent().attr('id');

    console.log('user in jq: ' + User.id);


    $.get('http://localhost:3000/users/' + User.id)
      .done(function(user) {
        $services = user.saved_resources;
        var _services = [];
        $services.forEach(function(service, index) {
          if (index == _id) {
            $services.splice(index, 1);
          }

          console.log('services now: ' + $services);
        })
        var saved_resources = $services;
        console.log('sr: ' + saved_resources[0].id)

        $.ajax({
          url: 'http://localhost:3000/users/' + User.id,
          type: 'PUT',
          data: {saved_resources: saved_resources}
        })
      })
  })

})