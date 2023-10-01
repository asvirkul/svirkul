$(document).ready(function () {

    var mainWave = $('#main-wave').wavify({
        height: 50,
        bones: 3,
        amplitude: 60,
        color: 'rgba(232,34,40, 1)',
        speed: .15,
      });
    var addWave = $('#add-wave').wavify({
        height: 70,
        bones: 1,
        amplitude: 80,
        color: 'rgba(232,34,40, .6)',
        speed: .25,
      });
      var addWave = $('#rotate-wave').wavify({
        height: 70,
        bones: 1,
        amplitude: 80,
        color: 'rgba(191, 23, 29, 1)',
        speed: .25,
      });

      $('.tabs').tabs();
      
      $('.main-shop-title').hover(
        function () {
          $('.main-shop-wrapper .tab a').css({
            'color': '#fff',
            'border-color': '#fff'
          })
      },
      function () {
        $('.main-shop-wrapper .tab a').css({
          'color': '#ED1C24',
          'border-color': '#ED1C24'
        })
      }
      );

     /*  var rellax = new Rellax('.rellax', {
        speed: -2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      }); */



});
