var db = require("../database");
var course_grades = {
  getAllcourseGrades: function(callback) {
    return db.query("select * from course_grades", callback);
  },
  getcourseGradeByID: function(student_id, callback) {
    return db.query(
      "select * from course_grades where student_id=?",
      [student_id],
      callback
    );
  },
  addcourseGrade: function(course_grades, callback) {
    return db.query(
      "insert into course_grades values(?,?,?)",
      [
        course_grades.student_id,
        course_grades.course_id,
        course_grades.student_grade
      ],
      callback
    );
  },
  deletecourseGrade: function(student_id, callback) {
    return db.query(
      "delete from course_grades where student_id=?",
      [student_id],
      callback
    );
  },
  updatecourseGrade: function(student_id, course_grades, callback) {
    return db.query(
      "update course_grades set course_id=?,student_grade=? where student_id=?",
      [
        course_grades.course_id,
        course_grades.student_grade,
        student_id,
        callback
      ]
    );
  }
};
module.exports = course_grades;
