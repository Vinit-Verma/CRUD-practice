const express = require("express");
const Student = require("../Modals/Student");
const router = express.Router();

router.get("/", (req, res) => {
  Student.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.post("/", (req, res) => {
  const student = new Student({
    name: req.body.name,
    roll_no: req.body.roll_no,
    class: req.body.class,
  });
  student
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.patch("/:id", (req, res) => {
  Student.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        roll_no: req.body.roll_no,
        class: req.body.class,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.delete("/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = router;
