// Function to change colors on refresh
function changeColors() {
    const hue = Math.floor(Math.random() * 360);
    document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 70%, 50%)`);
    document.documentElement.style.setProperty('--secondary-color', `hsl(${(hue + 40) % 360}, 70%, 50%)`);
}

// Function to set random skill percentages
function setSkillPercentages() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const percentage = Math.floor(Math.random() * 41) + 60; // Random percentage between 60% and 100%
        skill.querySelector('.skill-fill').style.width = `${percentage}%`;
        skill.querySelector('.skill-percent').textContent = `${percentage}%`;
    });
}

// Function to create click animation
function createClickAnimation(e) {
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.border = '2px solid var(--primary-color)';
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    circle.style.width = '0px';
    circle.style.height = '0px';
    circle.style.opacity = '1';
    circle.style.transition = 'all 0.5s ease-out';
    circle.style.transform = 'translate(-50%, -50%)';

    document.getElementById('click-animation').appendChild(circle);

    setTimeout(() => {
        circle.style.width = '100px';
        circle.style.height = '100px';
        circle.style.opacity = '0';
    }, 0);

    setTimeout(() => {
        circle.remove();
    }, 500);
}


// Event listeners
window.addEventListener('load', () => {
    changeColors();
    setSkillPercentages();
    setRandomNickname();
});

document.addEventListener('click', createClickAnimation);