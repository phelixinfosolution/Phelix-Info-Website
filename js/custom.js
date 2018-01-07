
// Footer Enquiry Form 

$(document).ready(function() {

	$('.enquiryPopupSbt').click(function(event){
    	// event.preventDefault();
    	// console.log("click");
    	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var numberFormat = /^(?:[1-9]\d*|\d)$/;

    	var nameEnquiryField = $('.nameEnquiryField').val();
    	var emailEnquiryField = $('.emailEnquiryField').val();
    	var contactEnquiryField = $('.contactEnquiryField').val();
    	var countryEnquiryField = $('.countryEnquiryField').val();
    	var projectEnquiryField = $('.projectEnquiryField').val();
    	var codeEnquiryFieldWrap = $('.codeEnquiryFieldWrap').val();
    	console.log(nameEnquiryField);
  //   	// return false;
    	$('.formError').empty();
    	if( nameEnquiryField.length == 0 ) {
    		$('.nameEnquiryField').parents('.form-group').find('.formError').html("Please enter name");
    		return false;
    	} 

    	if( emailEnquiryField.length == 0 ) {
    		$('.emailEnquiryField').parents('.form-group').find('.formError').html("Please enter email");
    		return false;
    	}

    	if (!emailEnquiryField.match(mailformat)) {
    		$('.emailEnquiryField').parents('.form-group').find('.formError').html("Please enter valid email");
    		return false;
    	} 

    	if( contactEnquiryField.length == 0 ) {
    		$('.contactEnquiryFieldWrap').find('.formError').html("Please enter contact number");
    		return false;
    	} 

    	if( countryEnquiryField.length == 0 ) {
    		$('.countryEnquiryField').parents('.form-group').find('.formError').html("Please enter country");
    		return false;
    	} 

    	if( projectEnquiryField.length == 0 ) {
    		$('.projectEnquiryField').parents('.form-group').find('.formError').html("Please enter project outline");
    		return false;
    	} 
   
			$('.formMail').attr('action', '#');
		// }
    });
 });
$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});

$(document).ready(function(){
 $("#techBtn").click(function(){
        $(".uptechBx").show();
        $(".PumpupBx").hide();
         $(this).addClass("active");
        $("#PumpupBtn").removeClass("active");
    });

    $("#PumpupBtn").click(function(){
       
        $(".PumpupBx").show();
        $(".uptechBx").hide();
         $(this).addClass("active");
        $("#techBtn").removeClass("active");
    });
});
  

   $(window).load(function(){
        setTimeout(function() {
                $('#enquirypopup').modal('show');
        }, 3000);
            });


