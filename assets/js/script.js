$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();
                $("#certs_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#certs").click(function(){
                    $("#index").fadeOut();
                    $("#certs_scroll").fadeIn();
                    $('#certs_left').addClass('animated slideInLeft');
                    $('#certs_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                   
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
                    // let skilsContent = select('.skills-content');
                    // if (skilsContent) {
                    //   new Waypoint({
                    //     element: skilsContent,
                    //     offset: '80%',
                    //     handler: function(direction) {
                    //       let progress = select('.progress .progress-bar', true);
                    //       progress.forEach((el) => {
                    //         el.style.width = el.getAttribute('aria-valuenow') + '%'
                    //       });
                    //     }
                    //   })
                    // } 

           
		});
        