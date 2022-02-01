   
   $(document).ready(function()
   {
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#projects']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_projects').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_portfolio').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid6']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid6').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#otherProjectsGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_otherProjectsGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("#Combobox2").change(function()
      {
         if ($('#Combobox2').val() == '1')
         {
            $('#Combobox2').trigger('change');
         }
      });
      $("#Combobox2").trigger('change');
      $("#SlideShow1").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 0,
         maxWidth: 400,
         easing: 'swing',
         effectlength: 2000
      });
      $("#SlideShow1_back a").click(function()
      {
         $('#SlideShow1').slideshow('previmage');
      });
      $("#SlideShow1_next a").click(function()
      {
         $('#SlideShow1').slideshow('nextimage');
      });
      $("#SlideShow2").slideshow(
      {
         interval: 5000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 0,
         maxWidth: 400,
         easing: 'swing',
         effectlength: 2000
      });
      $("#SlideShow2_back a").click(function()
      {
         $('#SlideShow2').slideshow('previmage');
      });
      $("#SlideShow2_next a").click(function()
      {
         $('#SlideShow2').slideshow('nextimage');
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
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_projects,#wb_LayoutGrid3,#wb_LayoutGrid6,#wb_contact').css('background-attachment', 'scroll');
      }
   });
