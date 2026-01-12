const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const teacherController = require('../controllers/teacherController');

const validateTeacher = [   
    body('name').notEmpty().trim().withMessage('Name is required'),
  ];

router.post('/',validateTeacher,teacherController.createTeacher);  
module.exports = router;