var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get all input values with null checks
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var phoneInput = document.getElementById('phone');
        var educationInput = document.getElementById('education');
        var experienceInput = document.getElementById('experience');
        var skillsInput = document.getElementById('skills');
        var othersInput = document.getElementById('others');
        // Check for null before accessing .value
        var name = nameInput ? nameInput.value : '';
        var email = emailInput ? emailInput.value : '';
        var phone = phoneInput ? phoneInput.value : '';
        var education = educationInput ? educationInput.value : '';
        var experience = experienceInput ? experienceInput.value : '';
        var skills = skillsInput ? skillsInput.value : '';
        var others = othersInput ? othersInput.value : '';
        // Generate HTML for the resume
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Others:</strong> ").concat(others, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
        console.log(name, email, phone, education, experience, skills, others);
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
