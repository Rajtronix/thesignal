   
   $(document).ready(function()
   {
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio').offset().top-88 }, 600, 'easeOutCirc');
      });
      var $overlaymenu = $('#OverlayMenu2-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#OverlayMenu2').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      var $overlaymenu = $('#OverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#OverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
   });
