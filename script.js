const students = [];

function registerStudent() {
    const student = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value
    };

    students.push(student);
    alert('Student Registered Successfully!');
    document.getElementById('registrationForm').reset();
}

function showStudentInfo() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `Student ${index + 1}: ${student.firstName} ${student.lastName}, ${student.email}, ${student.phone}, ${student.dob}, ${student.address}, ${student.city}, ${student.state}, ${student.zip}, ${student.country}`;
        studentList.appendChild(li);
    });

    document.getElementById('studentInfo').classList.remove('hidden');
}
