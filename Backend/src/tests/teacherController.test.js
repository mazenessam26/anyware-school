const Teacher = require('../models/teacher');
const teacherController = require('../controllers/teacherController');
const { validationResult } = require('express-validator');

jest.mock('../models/teacher');
jest.mock('express-validator');

describe('Teacher Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    jest.clearAllMocks();
  });

  describe('createTeacher', () => {
    it('should create teacher with profile picture', async () => {
      const mockTeacher = {
        _id: '123',
        name: 'John Doe',
        profilePicture: 'https://example.com/profile.jpg',
        save: jest.fn()
      };

      validationResult.mockReturnValue({ isEmpty: () => true });
      Teacher.mockImplementation(() => mockTeacher);

      req.body = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile.jpg'
      };

      await teacherController.createTeacher(req, res);

      expect(mockTeacher.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockTeacher);
    });

    it('should create teacher without profile picture', async () => {
      const mockTeacher = {
        _id: '123',
        name: 'Jane Doe',
        save: jest.fn()
      };

      validationResult.mockReturnValue({ isEmpty: () => true });
      Teacher.mockImplementation(() => mockTeacher);

      req.body = { name: 'Jane Doe' };

      await teacherController.createTeacher(req, res);

      expect(mockTeacher.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });

    it('should return 400 if validation fails', async () => {
      const errors = [{ msg: 'Name is required' }];
      validationResult.mockReturnValue({
        isEmpty: () => false,
        array: () => errors
      });

      await teacherController.createTeacher(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ errors });
    });
  });
});
