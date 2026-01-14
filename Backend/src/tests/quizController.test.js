const Quiz = require('../models/quiz');
const quizController = require('../controllers/quizController');
const { validationResult } = require('express-validator');

jest.mock('../models/quiz');
jest.mock('express-validator');

describe('Quiz Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    jest.clearAllMocks();
  });

  describe('getAllQuizzes', () => {
    it('should fetch all quizzes', async () => {
      const mockQuizzes = [
        { _id: '1', title: 'Quiz 1', course: 'Math' },
        { _id: '2', title: 'Quiz 2', course: 'Science' }
      ];

      const mockQuery = {
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue(mockQuizzes)
      };

      Quiz.find.mockReturnValue(mockQuery);

      await quizController.getAllQuizzes(req, res);

      expect(Quiz.find).toHaveBeenCalled();
      expect(mockQuery.sort).toHaveBeenCalledWith({ dueto: 1 });
      expect(mockQuery.limit).toHaveBeenCalledWith(2);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        count: 2,
        data: mockQuizzes
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      Quiz.find.mockReturnValue({
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockRejectedValue(error)
      });

      await quizController.getAllQuizzes(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Error fetching quizzes',
        error: error.message
      });
    });
  });

  describe('createQuiz', () => {
    it('should create quiz successfully', async () => {
      const mockQuiz = {
        _id: '123',
        title: 'New Quiz',
        course: 'Math 101',
        dueto: new Date()
      };

      validationResult.mockReturnValue({ isEmpty: () => true });
      Quiz.create.mockResolvedValue(mockQuiz);

      req.body = {
        title: 'New Quiz',
        course: 'Math 101',
        dueto: new Date()
      };

      await quizController.createQuiz(req, res);

      expect(Quiz.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockQuiz
      });
    });

    it('should return 400 if validation fails', async () => {
      const errors = [{ msg: 'Course is required' }];
      validationResult.mockReturnValue({
        isEmpty: () => false,
        array: () => errors
      });

      await quizController.createQuiz(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        errors
      });
    });
  });
});