(function() {
  emailjs.init({ publicKey: 'fA6Ccq2YQm2IB1kAC' }); // Correct Public Key
})();

document.getElementById('contactUs-Form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('comment').value
  };

  emailjs.send(
      'service_xtwm1yl', // Correct Service ID
      'template_7qdnder', // Correct Template ID
      {
          name: form.name,
          email: form.email,
          message: form.message
      }
  ).then(
      function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you! Your message has been sent.');
          document.getElementById('contactUs-Form').reset();
      },
      function(error) {
          console.error('FAILED...', error);
          alert('Something went wrong. Check the console for details.');
      }
  );
});
