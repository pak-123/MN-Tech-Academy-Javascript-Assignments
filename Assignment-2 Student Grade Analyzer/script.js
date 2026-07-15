function checkGrade() {
    let marks = Number(document.getElementById("marks").value);
    let grade = "";
    let remark = "";

    if (marks < 0 || marks > 100 || isNaN(marks)) {
        alert("Please enter valid marks between 0 and 100");
        document.getElementById("result").innerHTML = "";
        document.getElementById("remark").innerHTML = "";
    }
    else if (marks >= 90) {
        grade = "A+";
        remark = "Excellent Performance!";
    }
    else if (marks >= 80) {
        grade = "A";
        remark = "Very Good!";
    }
    else if (marks >= 70) {
        grade = "B";
        remark = "Good Job!";
    }
    else if (marks >= 60) {
        grade = "C";
        remark = "Needs Improvement.";
    }
    else {
        grade = "Fail";
        remark = "Work Hard and Try Again.";
    }
    document.getElementById("result").innerHTML = "Grade: " + grade;
    document.getElementById("remark").innerHTML = "Remark: " + remark;
}