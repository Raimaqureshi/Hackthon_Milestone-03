const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement | null;

if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get all input values with null checks
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
        const educationInput = document.getElementById('education') as HTMLInputElement | null;
        const experienceInput = document.getElementById('experience') as HTMLInputElement | null;
        const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
        const othersInput = document.getElementById('others') as HTMLInputElement | null;

        // Check for null before accessing .value
        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const education = educationInput ? educationInput.value : '';
        const experience = experienceInput ? experienceInput.value : '';
        const skills = skillsInput ? skillsInput.value : '';
        const AnythingElseWouldYouLikeToSay = othersInput ? othersInput.value : '';

        // Generate HTML for the resume
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Others:</strong> ${AnythingElseWouldYouLikeToSay}</p>
        `;

        resumeOutput.innerHTML = resumeHTML;
        console.log(name, email, phone, education, experience, skills, AnythingElseWouldYouLikeToSay);
        
    });
} else {
    console.error('Form or output div not found in the DOM');
}