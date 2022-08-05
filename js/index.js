$("li").hover(function(){
    $(this).css("color","#B15318");},
    function(){
    $(this).css("color","#1c1c1c");

})

    // Add smooth scrolling to all links
    $("#pSection").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("body").animate({
            scrollTop: $(hash).offset().top
          }, slow, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
