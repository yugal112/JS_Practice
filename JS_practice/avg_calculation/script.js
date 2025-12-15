const students = [];

function calculateTotal(marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}

function calculateAverage(total, count) {
  return total / count;
}

function calculateGrade(avg) {
  if (avg >= 80) return "A";
  if (avg >= 60) return "B";
  if (avg >= 40) return "C";
  return "F";
}

document.getElementById("resultForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  const marks = {
    science: Number(document.getElementById("science").value),
    social: Number(document.getElementById("social").value),
    math: Number(document.getElementById("math").value),
    nepali: Number(document.getElementById("nepali").value),
    english: Number(document.getElementById("english").value)
  };

  for (let subject in marks) {
    if (marks[subject] < 0 || marks[subject] > 100) {
      alert("Marks must be between 0 and 100");
      return;
    }
  }

  const markValues = Object.values(marks);
  const total = calculateTotal(markValues);
  const average = calculateAverage(total, markValues.length);
  const grade = calculateGrade(average);

  students.push({
    name,
    marks,
    total,
    average,
    grade
  });

  students.sort((a, b) => b.average - a.average);

  displayResults();
  document.getElementById("resultForm").reset();
});

function displayResults() {
  let html = "<h3>Students data</h3>";

  students.forEach((s, index) => {
    html += `
      <p>
        <strong>Rank ${index + 1}: ${s.name}</strong><br>
        Total: ${s.total} |
        Average: ${s.average.toFixed(2)} |
        Grade: ${s.grade}
      </p>
    `;
  });

  document.getElementById("output").innerHTML = html;
}
