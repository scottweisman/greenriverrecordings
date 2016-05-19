// Contact Form

$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=639bd9f44467ed4790550817169db6d4",
    data: $('#ajax-form').serialize()
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contact-form-container').find('form')[0].reset();
    $('#contact-form-container').fadeOut(500, function() {
      $('#contact-message').replaceWith('<p style="color:green;">Thank you for contacting us, we will back to you within 24hrs. If you need something sooner, send us a text or give us a call!</p>');
    });
  });
  return false; //to stop the form from submitting
});