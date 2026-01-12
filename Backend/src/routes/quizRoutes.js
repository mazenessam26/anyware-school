const express= require('express');
const router = express.Router();
const {body} = require('express-validator');

const quizController = require('../controllers/quizController');

const validateQuiz = [
    body('course').notEmpty().trim().withMessage('Course is required'),
    body('dueto').isISO8601().withMessage('Valid due date is required'),
  ];
  
  // Routes
  router.get('/', quizController.getAllQuizzes);
  router.get('/:id', quizController.getQuizById);
  router.post('/', validateQuiz, quizController.createQuiz);
  router.put('/:id', quizController.updateQuiz);
  router.delete('/:id', quizController.deleteQuiz);
  
  module.exports = router;