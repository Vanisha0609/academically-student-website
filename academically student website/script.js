function goToHome() {
    document.getElementById('signup-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}

function goToMain() {
    document.getElementById('cgpa-calculator').style.display = 'none';
    document.getElementById('credits-calculator').style.display = 'none';
    document.getElementById('events-section').style.display = 'none';
    document.getElementById('clubs-section').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}

function showCalculator(type) {
    document.getElementById('main-screen').style.display = 'none';
    if (type === 'cgpa') {
        document.getElementById('cgpa-calculator').style.display = 'block';
    } else if (type === 'credits') {
        document.getElementById('credits-calculator').style.display = 'block';
    }
}

function showSection(section) {
    document.getElementById('main-screen').style.display = 'none';
    if (section === 'events') {
        document.getElementById('events-section').style.display = 'block';
    } else if (section === 'clubs') {
        document.getElementById('clubs-section').style.display = 'block';
    }
}

function calculateCGPA() {
    const credits = [
        parseFloat(document.getElementById('credit1').value) || 0,
        parseFloat(document.getElementById('credit2').value) || 0
    ];
    const grades = [
        parseFloat(document.getElementById('grade1').value) || 0,
        parseFloat(document.getElementById('grade2').value) || 0
    ];

    let totalCredits = credits.reduce((acc, curr) => acc + curr, 0);
    let weightedSum = credits.reduce((acc, curr, idx) => acc + curr * grades[idx], 0);

    let cgpa = (weightedSum / totalCredits).toFixed(2);
    document.getElementById('cgpa-result').innerText = cgpa;
}

function calculateCredits() {
    const credits = [
        parseFloat(document.getElementById('credits-earned1').value) || 0,
        parseFloat(document.getElementById('credits-earned2').value) || 0
    ];

    let totalCredits = credits.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('credits-result').innerText = totalCredits;
}

function loginWithGoogle() {
    alert('Google login not implemented');
}

function loginWithFacebook() {
    alert('Facebook login not implemented');
}
function goToSignUp() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('signup-screen').style.display = 'flex';
}

function goToLogin() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
}

function goToHome() {
    document.getElementById('signup-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}


