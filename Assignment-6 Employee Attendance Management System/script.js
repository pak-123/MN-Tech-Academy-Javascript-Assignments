// Array to store employees
let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("employeeName").value.trim();
    let status = document.getElementById("attendanceStatus").value;

    // Input Validation
    if (name == "") {
        alert("Please enter employee name.");
        return;
    }

    // duplicate employee
    for (let i = 0; i < employees.length; i++) {

        if (employees[i].name.toLowerCase() == name.toLowerCase()) {
            alert("Employee already exists.");
            return;
        }
    }

    // Add Employee
    employees.push({
        name: name,
        status: status
    });

    // Show Updated Report
    showReport();

    // Clear Input
    document.getElementById("employeeName").value = "";
    document.getElementById("attendanceStatus").value = "Present";
}


// report
function showReport() {
    let reportList = document.getElementById("reportList");
    reportList.innerHTML = "";
    let present = 0;
    let absent = 0;
    let late = 0;

    for (let i = 0; i < employees.length; i++) {
        let colorClass = "";
        if (employees[i].status == "Present") {
            colorClass = "present";
            present++;

        }
        else if (employees[i].status == "Absent") {
            colorClass = "absent";
            absent++;
        }
        else {
            colorClass = "late";
            late++;
        }
        reportList.innerHTML += `
            <li>
                <span>${employees[i].name}</span>
                <span class="${colorClass}">
                    ${employees[i].status}
                </span>
            </li>`;
    }

    // Summary
    document.getElementById("totalEmployees").innerHTML =
        "Total Employees: " + employees.length;

    document.getElementById("presentCount").innerHTML =
        "Present: " + present;

    document.getElementById("absentCount").innerHTML =
        "Absent: " + absent;

    document.getElementById("lateCount").innerHTML =
        "Late: " + late;
}