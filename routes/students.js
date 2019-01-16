var express = require("express");
var router = express.Router();
var students = require("../models/students");
router.get("/:student_id?", function(req, res, next) {
  if (req.params.student_id) {
    students.getstudentBystudent_id(req.params.student_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    students.getAllstudents(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  students.addstudent(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:student_id", function(req, res, next) {
  students.deletestudent(req.params.student_id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:student_id", function(req, res, next) {
  students.updatestudent(req.params.student_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
