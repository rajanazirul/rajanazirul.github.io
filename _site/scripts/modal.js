$(document).ready(function() {
  // MODAL
  var modalText = {
    dahderma: {
      title: 'DahDerma.my',
      tag: 'Donation and volunteering platform for NGO.',
      detail:
        'DahDerma is your one-stop platform to act on any noble causes that you care about. Champion a noble cause by fundraising or reach out for volunteers.',
      link: 'https://dahderma.my'
    },
    dashboard: {
      title: 'Penang2030 Dashboard',
      tag: 'Dashboard for Penang 2030',
      detail:
        'Dashboard to measure Penang 2030 digital transformation',
      link: 'https://dashboard.penang2030.com/'
    },
    jomboat: {
      title: 'jomboat.com',
      tag: 'Fishing Boat Booking Platform.',
      detail:
        'Jomboat is a fishing boat booking platform that allows users to book fishing boats for their fishing trips.',
      link: 'https://jomboat.com',
      imgExt: 'png'
    },
    invoicemudah: {
      title: 'Invoicemudah',
      tag: 'Invoice/Accounting System.',
      detail:
        'Invoicemudah is a web application with mobile apps ready for freelance and small business to fasten process of generating invoice/quotation',
      link: 'https://invoicemudah.com'
    },
    haltsys: {
      title: 'Jabil Halt System',
      tag: 'Automation.',
      detail:
        'Conveyor auto halt system to minimize escapee from production line. Use python with microcontroller to trigger using wifi '
    },
    ict: {
      title: 'ICT Data Analysis Dashboard',
      tag: 'Data Analysis.',
      detail:
        'Use data analysis tools V-one to integrate Board Tester in production line and generate data analysis dashboard consist of Output Yield.'
    },
    tracer: {
      title: 'MTSC Tracer',
      tag: 'Temperature Tracking System.',
      detail:
        'MTSC Tracer is a system with social login that integrate with firebase for user to key in their temperature in easy way',
      link: 'https://tracer.mtsc-solution.com/'
    },
    diabetic: {
      title: 'Diabetic Retinopathy Monitoring',
      tag: 'Image processing system.',
      detail:
        'Diabetic Retinopathy Monitoring and Grading System is an image processing tools develop using matlab to analyse and grading image from patient'
    },
    pacer: {
      title: 'Pacer Sleep Cycle',
      tag: 'IOS/Android App.',
      detail:
        'Pacer sleep cycle is an app that use to monitor your sleep cycle and wake you up at the best time in your sleep cycle',
      link: 'https://pacer.gg'
    },
    tawbahpro: {
      title: 'TawbahPro',
      tag: 'Islamic Lifestyle App.',
      detail:
        'TawbahPro is an Islamic lifestyle app featuring prayer times with Malaysian JAKIM integration, habit tracking, Quran reading with bookmarks, and offline-first architecture for seamless experience anywhere.',
      link: 'https://tawbahpro.com'
    },
    passportpro: {
      title: 'PassportPro',
      tag: 'AI Passport Photo App.',
      detail:
        'GPU-accelerated passport photo processing app that transforms casual photos into government-compliant passport photos using AI-powered face detection, background removal, and automatic cropping.',
      link: 'https://passportpro.app'
    },
    iopply: {
      title: 'iopply',
      tag: 'SaaS Dashboard Platform.',
      detail:
        'A modern Next.js 14 dashboard platform with Supabase authentication, Material-UI components, and comprehensive admin panel features including user management, analytics, and real-time capabilities.',
      link: 'https://iopply.com'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function(event) {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(event) {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  // Close modal with Escape key
  $(document).on('keydown', function(event) {
    if (event.key === 'Escape' && $('.modal-wrap').hasClass('visible')) {
      $('.modal-wrap, #modal .button').removeClass('visible');
    }
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    var imgExt = modalText[id].imgExt || 'jpg';
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + '.' + imgExt + "') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
