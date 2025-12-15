const studentName = prompt("Enter your full name");

const subjectMarks = [];
let totalMarks = 0;
let grade;

const calculateAverage = (sum) => {
  return sum / subjectMarks.length;
};

for (let i = 0; i < 5; i++) {
  let mark = Number(prompt(`Enter marks of subject ${i + 1}`));
  subjectMarks.push(mark);
  totalMarks += mark;
}

let averageMarks = calculateAverage(totalMarks);

if (averageMarks >= 0 && averageMarks < 40) {
  grade = "F";
} else if (averageMarks >= 40 && averageMarks < 50) {
  grade = "C";
} else if (averageMarks >= 50 && averageMarks < 60) {
  grade = "C+";
} else if (averageMarks >= 60 && averageMarks < 70) {
  grade = "B";
} else if (averageMarks >= 70 && averageMarks < 80) {
  grade = "B+";
} else if (averageMarks >= 80 && averageMarks < 90) {
  grade = "A";
} else if (averageMarks >= 90 && averageMarks <= 100) {
  grade = "A+";
} else {
  grade = "Invalid Average Marks";
}

document.getElementById("result").innerHTML = `
  <p><strong>Student Name:</strong> ${studentName}</p>
  <p><strong>Total Marks:</strong> ${totalMarks}</p>
  <p><strong>Average Marks:</strong> ${averageMarks}</p>
  <p><strong>Grade:</strong> ${grade}</p>
`;
