
// document.getElementById('toggleSkillsBtn').addEventListener('click', function () {
//     const skillsContainer = document.getElementById('skillsContainer');
//     if (skillsContainer.style.display === 'none' || !skillsContainer.style.display) {
//         skillsContainer.style.display = 'block';
//         this.textContent = 'Hide Skills';
//     } else {
//         skillsContainer.style.display = 'none';
//         this.textContent = 'Show Skills';
//     }
// });


document.getElementById('toggleSkillsBtn')?.addEventListener('click', function () {
    const skillsContainer = document.getElementById('skillsContainer') as HTMLElement;
    const toggleButton = this as HTMLButtonElement;
    
    if (skillsContainer.style.display === 'none' || !skillsContainer.style.display) {
        skillsContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsContainer.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
