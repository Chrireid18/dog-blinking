const leftEye = document.getElementById('leftEye');
const rightEye = document.getElementById('rightEye');
const dog = document.getElementById('dog');
const leftPupil = leftEye.querySelector('.pupil');
const rightPupil = rightEye.querySelector('.pupil');

function blinkEyes() {
    // Add blink class to hide the eyes and pupils
    leftEye.classList.add('blink');
    rightEye.classList.add('blink');
    
    // Hide the pupils
    leftPupil.style.display = 'none';
    rightPupil.style.display = 'none';

    setTimeout(() => {
        // Remove blink class and show pupils after a short delay
        leftEye.classList.remove('blink');
        rightEye.classList.remove('blink');

        // Show the pupils again
        leftPupil.style.display = 'block';
        rightPupil.style.display = 'block';
        
    }, 200); // Blinking duration
}

// Attach click event to the dog div
dog.addEventListener('click', blinkEyes);