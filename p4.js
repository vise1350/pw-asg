const marks = [90, 80, 70, 60, 50];

let highestMarks = marks[0];
let highestMarksStudent = 0;

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highestMarks) {
    highestMarks = marks[i];
    highestMarksStudent = i;
  }
}

console.log(`The highest marks are ${highestMarks} scored by student ${highestMarksStudent}`);
