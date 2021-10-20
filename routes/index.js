var express = require('express');
const dateModel = require('../models/date');
var router = express.Router();

var emailModel = require('../models/email')

router.post('/submitemail', async function (req, res, next) {
  var saveEmail = null
  var error = []

  var data = await emailModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('email déjà enregistré')
  }

  if (req.body.emailFromFront === '') {
    error.push('champs vides')
  }

  if (error.length === 0) {
    var newEmail = new emailModel({
      email: req.body.emailFromFront
    })
    saveEmail = await newEmail.save()
  }

  if (newEmail) {
    result = true
  } else {
    result = false
  }

  console.log(error)
  console.log(saveEmail)

  res.json({ saveEmail, error, result });
});


// ----------------------------- VISITE -------------------------
router.post('/calendar', async function (req, res, next) {

var dateSaved=req.body.dateFromFront
var result=false

var newDate = await dateModel({
  date:Date
})

dateSaved = await newDate.save()

console.log(dateSaved)

  res.json({ dateSaved, result });
});

module.exports = router;
