// script.js

// Handle Attendance Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const attendanceForm = document.getElementById('attendance-form');
    if (attendanceForm) {
        attendanceForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(attendanceForm);
            const attendanceData = {};

            // Iterate through form data and collect attendance
            for (let [key, value] of formData.entries()) {
                // Assuming each select has the name 'status'
                // You might need to adjust based on your form structure
            }

            // For simplicity, we'll collect the data from the table directly
            const tableRows = attendanceForm.querySelectorAll('tbody tr');
            const attendanceResult = {};

            tableRows.forEach(row => {
                const team = row.cells[0].innerText;
                const member = row.cells[1].innerText;
                const status = row.cells[2].querySelector('select').value;

                if (!attendanceResult[team]) {
                    attendanceResult[team] = [];
                }

                attendanceResult[team].push({ member, status });
            });

            // Save to localStorage (or handle as needed)
            const today = new Date().toLocaleDateString();
            localStorage.setItem(`attendance_${today}`, JSON.stringify(attendanceResult));

            // Display the result
            const resultDiv = document.getElementById('attendance-result');
            resultDiv.innerHTML = `<h3>Attendance Recorded for ${today}</h3>`;
            resultDiv.innerHTML += `<pre>${JSON.stringify(attendanceResult, null, 2)}</pre>`;

            // Optionally, reset the form
            attendanceForm.reset();
        });
    }
});
