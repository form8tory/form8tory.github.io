// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sib-form');
    const spinner = document.querySelector('.spinner');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(e) {
        // Show spinner and disable button
        spinner.style.display = 'inline-block';
        submitButton.disabled = true;

        // If the form submission is via AJAX, handle the response here to hide the spinner
        // For example:
        /*
        e.preventDefault();
        // Perform AJAX submission
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            spinner.style.display = 'none';
            submitButton.disabled = false;
            // Show success message
        })
        .catch(error => {
            // Handle error
            spinner.style.display = 'none';
            submitButton.disabled = false;
            // Show error message
        });
        */
    });
});

const links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }