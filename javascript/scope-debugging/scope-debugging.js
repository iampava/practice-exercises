var studentRecords = [
  { id: 313, name: "Frank" },
  { id: 410, name: "Suzy" },
  { id: 709, name: "Brian" },
  { id: 105, name: "Henry" },
  { id: 502, name: "Mary" },
  { id: 664, name: "Bob" },
  { id: 250, name: "Peter" },
  { id: 375, name: "Sarah" },
  { id: 867, name: "Greg" }
];

var currentEnrolment = [410, 105, 664, 375];

printEnrolment();

/********************* */
function printEnrolment() {
  i = 0;
  while (i < currentEnrolment.length) {
    var matchingStudent,
    currentStudentId = currentEnrolment[i];

    while (i < studentRecords.length) {
      if (studentRecords[i].id === currentStudentId) {
        matchingStudent = studentRecords[i];
        break;
      }
      i++;
    }

    console.log(matchingStudent);

    i++;
  }
}
