var db = require("../database");
var courses = {
  getAllcourses: function(callback) {
    return db.query("select * from courses", callback);
  },
  getcoursesBycourse_id: function(course_id, callback) {
    return db.query(
      "select * from courses where course_id=?",
      [course_id],
      callback
    );
  },
  addcourse: function(courses, callback) {
    return db.query(
      "insert into courses values(?,?,?)",
      [courses.course_id, courses.course_name, courses.course_description],
      callback
    );
  },
  deletecourse: function(course_id, callback) {
    return db.query(
      "delete from courses where course_id=?",
      [course_id],
      callback
    );
  },
  updatecourse: function(course_id, courses, callback) {
    return db.query(
      "update courses set course_name=?,course_description=? where course_id=?",
      [courses.course_name, courses.course_description, course_id],
      callback
    );
  }
};
module.exports = courses;
