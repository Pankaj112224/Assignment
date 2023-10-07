document.getElementById('submit-button').addEventListener('click', function() {
    // Get values from the form
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Check if at least one gender checkbox is checked
    let gender = '';
    if (genderElements.length > 0) {
        gender = Array.from(genderElements).map(element => element.value).join(', ');
    } else {
        alert('Please select at least one gender.');
        return;
    }

    // Populate the popup with form values
    document.getElementById('popup-first-name').textContent = firstName;
    document.getElementById('popup-last-name').textContent = lastName;
    document.getElementById('popup-date-of-birth').textContent = dateOfBirth;
    document.getElementById('popup-country').textContent = country;
    document.getElementById('popup-gender').textContent = gender;
    document.getElementById('popup-profession').textContent = profession;
    document.getElementById('popup-email').textContent = email;
    document.getElementById('popup-mobile-number').textContent = mobileNumber;

    // Display the popup
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('reset-button').addEventListener('click', function() {
    // Reset the form
    document.getElementById('survey-form').reset();

    // Hide the popup
    document.getElementById('popup').style.display = 'none';
});
