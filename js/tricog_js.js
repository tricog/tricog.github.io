$(document).ready(function(){
   //responsive dropdown menubar
   $(".open_subcat").click(function(){
		$(".subcat").hide("fast");
		$(".open_subcat").removeClass("active");
		if($(this).next().is(":hidden") == true)
		{
				$(this).addClass("active");
				$(this).next().slideDown("slow");
			
		}
	});
	
	//body click close responsive menu
	$(".responsive_menu").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isDown") ) {
        $(".responsive_slider").animate({right:"-300px"}, 200);          
        $(this).removeClass("isDown");
    } else {
        $(".responsive_slider").animate({right:"0px"}, 200);   
        $(this).addClass("isDown");
    }
    return false;
	});
	
	//onclose button click on close responsive menu
	 $(".rs_close").click(function(){
		 $(".responsive_slider").animate({right:"-300px"}, 200);          
         $('.responsive_menu').removeClass("isDown");
	});
	
	//scroll down page
	$(".scroll_page").click(function() {
		var top_position = $(".scroll_page").offset().top + 5;
		  $("html, body").animate({ scrollTop: top_position }, "slow");
		  return false;
	});
	//go up
	$(".gototop").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
	});
	
});

$(document).mousedown(function (e)
{
    var container = $(".responsive_slider");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".responsive_slider").animate({right:"-300px"}, 200);          
        $('.responsive_menu').removeClass("isDown");
    }
});
$(window).scroll(function() {
	var sticky = $('.top_navigation'),
	scroll = $(window).scrollTop();

	if (scroll >= 100)
	{
		sticky.addClass('fixed');
		$('.scroll_page').fadeOut();
		$('.gototop').fadeIn();
	}
	else 
	{
		sticky.removeClass('fixed');
		$('.scroll_page').fadeIn();
		$('.gototop').fadeOut();
	}
});

//wow animation initialization
new WOW().init();

//validation
function allLetter(text)  
{   
	var letters = /^[A-Za-z ]+$/; 
	if(text.match(letters))  
		return true;  
	else  
		return false; 
}
function validEmail(emailaddress)
{   
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(reg.test(emailaddress))  
		return true;  
	else  
		return false;
}

function validateform()
{
	var frm = document.forms['contact_form'];
	var name = frm.name.value.trim();
	var email = frm.email.value.trim();
	var messages = frm.messages.value.trim();
	if(frm.tricog_type.value.trim()=="")
	{ 
		swal("", "I am a ?", "warning")
		return false;
	}
	else if(frm.name.value.trim()=="")
	{ 
		frm.name.focus();
		swal("", "Enter your name", "warning")
		return false;
	}
	else if(!allLetter(frm.name.value))
	{
		frm.name.focus();
		swal("", "Enter correct name", "warning")
		return false;
	}
	else if(email=="")
	{
		frm.email.focus();
		swal("", "lease enter your email address", "warning")
		return false;
	}
	else if(!validEmail(email))
	{ 
		frm.email.focus();
		swal("", "Please enter a valid email address", "warning")
		return false;
	}
	else
	{
		/* frm.submit(); */
		event.preventDefault();
		var formdata=$("#contact_form").serialize();
		//alert(formdata);
		$.ajax({
			url : "enquiry_action.php",
			type: "POST",
			data: formdata,
			success: function(data, textStatus, jQxhr){
				swal("Thanks you", "Your request have been sent.", "success");
			},
			error:function(){
				swal("Sorry", "Your request have not been sent.", "error");
			}
		});
		
	}
}

	