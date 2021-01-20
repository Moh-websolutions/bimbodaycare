import Head from "next/head";
import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

import Link from 'next/link';
//import $ from 'jquery';
//import Bootstrap from 'react-bootstrap';
import AOS from "aos";
import Header from './Header';
import Footer from './Footer';
import Cta from './Cta';
import Features from './Features';

class Layout extends React.Component {
 
  componentDidMount() {

    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });


      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();
};

    componentDidMount() {    

        AOS.init();
                  
        const menu = $('ul#navigation');
        if(menu.length){
          setTimeout(() => $('ul#navigation').slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
          }), 100);
     
        };

        // activeLink
        $(function(){
            $('nav a').filter(function() {
                return this.href==location.href
            })
           .parent().addClass('active').siblings().removeClass('active')

            $('nav a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active')
         })
        });

        // preloading
        $('#preloader-active').delay(550).fadeOut('slow');
        $('body').delay(250).css({
            'overflow': 'visible',
        })  

        //Gallery
        $(function () {
            $("#animated-thumbnials").lightGallery({thumbnail:true});
        });

    }


    render() {

        return (
            <>
                <Head>
                    <title>Bimbo</title>
                    <meta name="description" content="We believe it is important to provide an environment where every child feels safe and secure while they're away from home. " />
                    
                    <link rel="shortcut icon" href="/assets/img/favicon/favicon.ico" type="image/x-icon" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-icon-180x180.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/android-icon-192x192.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/android-icon-144x144.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/android-icon-96x96.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/images/android-icon-72x72.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/android-icon-48x48.png" />
                    <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/android-icon-36x36.png" />

                    <link href="../assets/css/animate.min.css" rel="stylesheet" />
                    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="../assets/css/slick.css" rel="stylesheet" />
                    <link href="../assets/css/slicknav.css" rel="stylesheet" />
                    <link href="../assets/css/style.css" rel="stylesheet" />
                    <link href="../assets/css/responsive.css" rel="stylesheet" />
                    <link href="../assets/css/lightgallery.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900|Poppins:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap" rel="stylesheet" />
                    <link  href="../assets/fonts/fontawesome/css/all.css" rel="stylesheet" />
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />


                </Head>
                <div>

                    <Header/>
                    <main data-aos="fade-in" data-aos-duration="1500">  
                     
                    {this.props.children}
                    </main>
                    <Features/>
                    <Cta/>
                    <Footer/>
                </div>
               
                <script src="../assets/js/jquery-1.12.4.min.js"></script>
                <script src="../assets/js/jquery.slicknav.min.js"></script>
                <script src="../assets/js/jquery.sticky.js"></script>
                <script src="../assets/js/slick.min.js"></script>
                <script src="../assets/js/wow.min.js"></script>
                <script src="../assets/js/jquery.scrollUp.min.js"></script>
                <script src="../assets/js/colors-circles.js"></script>

                <script src="../assets/gallery-assets/js/lightgallery.js"></script>
                <script src="../assets/gallery-assets/js/lg-thumbnail.js"></script>
                <script src="../assets/gallery-assets/lib/jquery.mousewheel.min.js"></script>
                <script src="../assets/js/main.js"></script>

                
            </>
        )
    }
}

export default Layout
