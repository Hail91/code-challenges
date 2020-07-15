function gradingStudents(grades) {
  let closestMultiple = 0;
  // Loop over grades array (array of integers)
  for (let i = 0; i < grades.length; i++) {
    // Check if grade is less than 38, if it is...do nothing.
    if (grades[i] < 38) {
      continue;
    }
    // Get closest multiple of 5 from current grade.
    else if (grades[i] >= 38) {
      closestMultiple = grades[i];
      while (closestMultiple % 5 !== 0) {
        closestMultiple += 1;
      }
      if (closestMultiple - grades[i] < 3) {
        grades[i] = closestMultiple;
      } else {
        continue;
      }
    }
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
