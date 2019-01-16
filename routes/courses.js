var express = require("express");
var router = express.Router();
var courses = require("../models/courses");
router.get("/:course_id?", function(req, res, next) {
  if (req.params.course_id) {
    courses.getcoursesBycourse_id(req.params.course_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    courses.getAllcourses(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  courses.addcourse(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:course_id", function(req, res, next) {
  courses.deletecourse(req.params.course_id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:course_id", function(req, res, next) {
  courses.updatecourse(req.params.course_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
