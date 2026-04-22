$(document).ready(function() {
  // MODAL
  var modalText = {
    dahderma: {
      title: 'DahDerma.my',
      tag: 'Cloud Platform Architecture (GCP).',
      detail:
        'DahDerma is a donation and volunteering platform for NGOs, architected on GCP with Vue.js and Node.js. Handles fundraising flows, volunteer matching, and cause management at scale.',
      link: 'https://dahderma.my'
    },
    dashboard: {
      title: 'Penang2030 Dashboard',
      tag: 'Government Digital Transformation Dashboard.',
      detail:
        'Dashboard tracking Penang 2030 digital transformation KPIs. Built with Vue.js and TypeScript, providing real-time visibility into programme metrics and progress across initiatives.',
      link: 'https://dashboard.penang2030.com/'
    },
    jomboat: {
      title: 'jomboat.com',
      tag: 'Cloud-Native Booking Platform (Azure / Supabase).',
      detail:
        'Jomboat is a fishing boat booking platform built on Next.js with Azure cloud infrastructure and Supabase for real-time data. Integrates third-party APIs for vessel management and scheduling.',
      link: 'https://jomboat.com',
      imgExt: 'png'
    },
    invoicemudah: {
      title: 'Invoicemudah',
      tag: 'Full-Stack SaaS (Laravel / Flutter).',
      detail:
        'Invoice and accounting system for freelancers and SMEs. Laravel backend with Flutter mobile app — full document lifecycle from quotation to payment tracking.',
      link: 'https://invoicemudah.com'
    },
    haltsys: {
      title: 'Jabil Halt System',
      tag: 'Industrial IoT Automation.',
      detail:
        'Automated conveyor halt system built in Python with WiFi-connected microcontrollers. Detects production-line escapes in real time and triggers halts — reducing manual inspection cycles on the factory floor.'
    },
    ict: {
      title: 'ICT Data Analysis Dashboard',
      tag: 'Data Pipeline & Analytics.',
      detail:
        'Integrated V-One Board Tester with a Python data pipeline to stream production yield data into a live analytics dashboard. Replaced manual Excel reporting with automated, real-time Output Yield monitoring.'
    },
    tracer: {
      title: 'MTSC Tracer',
      tag: 'Real-Time Tracking (React / Firebase).',
      detail:
        'Temperature tracking system with social login, built on React and Firebase. Enables staff to log and monitor temperature readings in real time with role-based access.',
      link: 'https://tracer.mtsc-solution.com/'
    },
    diabetic: {
      title: 'Diabetic Retinopathy Monitoring',
      tag: 'Medical Image Processing (MATLAB / AI).',
      detail:
        'Image processing system developed in MATLAB to analyse retinal images, detect diabetic retinopathy markers, and output a grading score — supporting clinical decision-making.'
    },
    pacer: {
      title: 'Pacer Sleep Cycle',
      tag: 'Mobile Backend on AWS (Django).',
      detail:
        'Backend API for a sleep-cycle monitoring iOS/Android app, deployed on AWS. Django REST service calculates optimal wake times from sleep stage data and serves the mobile clients.',
      link: 'https://pacer.gg'
    },
    tawbahpro: {
      title: 'TawbahPro',
      tag: 'Offline-First Mobile App (React Native / Supabase).',
      detail:
        'Islamic lifestyle app with Malaysian JAKIM prayer-time integration, habit tracking, and Quran reading with bookmarks. Offline-first architecture via React Native and Supabase for seamless experience anywhere.',
      link: 'https://tawbahpro.com'
    },
    passportpro: {
      title: 'PassportPro',
      tag: 'GPU-Accelerated AI Photo Pipeline.',
      detail:
        'Hybrid-cloud passport photo system: FastAPI orchestrator on a low-cost CPU VPS dispatches to RunPod serverless GPU running Bria RMBG-2.0 for background removal, with MediaPipe for compliance-checked face positioning. Scales to zero, costs ~$0.002 per photo. React Native mobile client. Country-specific compliance for Malaysia, Singapore, and more.',
      link: 'https://passportpro.app'
    },
    iopply: {
      title: 'iopply',
      tag: 'Capability-Based Talent Marketplace (Next.js / Supabase).',
      detail:
        'Multi-role SaaS platform for jobseekers, volunteers, companies, and organizations. Built on Next.js 14 with Supabase (auth, RLS, edge functions), bullmq/Redis job queues, pgvector-ready profile search, OpenAPI-documented REST APIs, and Playwright E2E coverage across core flows.',
      link: 'https://iopply.com'
    },
    founderkit: {
      title: 'Founder-Kit (CoreKit)',
      tag: 'AI-Ready SaaS Boilerplate (Next.js / Claude SDK / Supabase).',
      detail:
        'Production-ready Next.js 14 + TypeScript monorepo with Supabase auth and RLS, Anthropic Claude SDK integration, BullMQ background workers on Upstash Redis, Resend transactional email, and Vercel deployment — everything an early-stage SaaS needs to ship with AI built in from day one.',
      imgExt: 'png'
    },
    spms: {
      title: 'SPMS — SEED Programme Monitoring',
      tag: 'Enterprise Grant Monitoring Dashboard.',
      detail:
        'Monitoring dashboard for the SEED Programme tracking project obligations, disbursements, Gantt timelines, and compliance across multiple sub-programmes. Built on React + Vite + MUI + Syncfusion with PDF report export, i18n, and Vercel deployment.',
      imgExt: 'png'
    },
    leadmio: {
      title: 'LeadMio',
      tag: 'AI WhatsApp Lead Qualification (DeepSeek / pgvector / Go).',
      detail:
        'AI-powered WhatsApp CRM that qualifies and scores leads for Malaysian SMEs. Next.js frontend, four Go microservice workers (message, notification, qualification, scoring), PostgreSQL with pgvector for semantic search, DeepSeek LLM for conversational AI, and Ollama-served nomic-embed-text embeddings — packaged in Docker Compose for on-prem or cloud deploy.',
      imgExt: 'png'
    },
    dronai: {
      title: 'Dronai',
      tag: 'AI · UAV · Cloud Inspection Pipeline.',
      detail:
        'AI-based reporting platform for breakwater construction inspection. UAV data ingestion feeds a cloud pipeline running AI anomaly detection and automated data labelling, with comprehensive dashboards for site engineers to track structural health over time.',
      link: 'https://dronai.my',
      imgExt: 'png'
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
