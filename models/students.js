var db = require("../database");
var students = {
  getAllstudents: function(callback) {
    return db.query("select * from students", callback);
  },
  getstudentBystudent_id: function(student_id, callback) {
    return db.query(
      "select * from students where student_id=?",
      [student_id],
      callback
    );
  },
  addstudent: function(students, callback) {
    return db.query(
      "insert into students values(?,?,?,?)",
      [
        students.student_id,
        students.student_name,
        students.student_address,
        students.student_class
      ],
      callback
    );
  },
  deletestudent: function(student_id, callback) {
    return db.query(
      "delete from students where student_id=?",
      [student_id],
      callback
    );
  },
  updatestudent: function(student_id, students, callback) {
    return db.query(
      "update students set student_name=?,student_address=?,student_class=? where student_id=?",
      [
        students.student_name,
        students.student_address,
        students.student_class,
        student_id
      ],
      callback
    );
  }
};
module.exports = students;
