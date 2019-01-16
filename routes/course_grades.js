var express = require("express");
var router = express.Router();
var course_grades = require("../models/course_grades");
router.get("/:student_id?", function(req, res, next) {
  if (req.params.student_id) {
    course_grades.getcourseGradeByID(req.params.student_id, function(
      err,
      rows
    ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    course_grades.getAllcourseGrades(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  course_grades.addcourseGrade(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:student_id", function(req, res, next) {
  course_grades.deletecourseGrade(req.params.student_id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:student_id", function(req, res, next) {
  course_grades.updatecourseGrade(req.params.student_id, req.body, function(
    err,
    rows
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
