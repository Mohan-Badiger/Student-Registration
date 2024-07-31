function showResults() {
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    const marks1 = parseFloat(document.getElementById('subject1').value) || 0;
    const marks2 = parseFloat(document.getElementById('subject2').value) || 0;
    const marks3 = parseFloat(document.getElementById('subject3').value) || 0;
    const marks4 = parseFloat(document.getElementById('subject4').value) || 0;
    const marks5 = parseFloat(document.getElementById('subject5').value) || 0;

    const totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    const percentage = (totalMarks / 500) * 100;

    document.getElementById('resultName').textContent = `Name: ${name}`;
    document.getElementById('resultCourse').textContent = `Course: ${course}`;
    document.getElementById('resultEmail').textContent = `Email: ${email}`;
    document.getElementById('resultPercentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;

    document.getElementById('results').style.display = 'block';
}
