
var _a;
(_a = document.getElementById('toggleSkillsBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsContainer = document.getElementById('skillsContainer');
    var toggleButton = this;
    if (skillsContainer.style.display === 'none' || !skillsContainer.style.display) {
        skillsContainer.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContainer.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
