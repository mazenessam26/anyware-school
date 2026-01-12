const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const announcmentController = require('../controllers/announcmentController');

const validateAnnouncement = [
    
    body('teacher').notEmpty().trim().withMessage('Author is required'),
    body('course').notEmpty().trim().withMessage('Course is required'),
    body('description').notEmpty().withMessage('Description is required'),
  ];
  
  // Routes
  router.get('/', announcmentController.getAnnouncments);
  router.get('/:id', announcmentController.getAnnouncmentById);
  router.post('/', validateAnnouncement, announcmentController.createAnnouncment);
  router.put('/:id', announcmentController.updateAnnouncment);
  router.delete('/:id', announcmentController.deleteAnnouncment);
  
  module.exports = router;