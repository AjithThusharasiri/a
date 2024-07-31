emailjs.init("rbAFNd7zp_8pkZ7_C");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    emailjs.sendForm('service_4bgbi5x', 'template_kpfhdrl', this)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('Success:', response);
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('Error details:', error);
        });
});