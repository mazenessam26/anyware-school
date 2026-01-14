const Announcment = require('../models/announcment');
const Teacher = require('../models/teacher');
const announcementController = require('../controllers/announcmentController');
const { validationResult } = require('express-validator');

jest.mock('../models/announcment');
jest.mock('../models/teacher');
jest.mock('express-validator');

describe('Announcement Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    jest.clearAllMocks();
  });

  describe('createAnnouncment', () => {
    it('should create announcement successfully', async () => {
      const mockAnnouncement = {
        _id: '123',
        course: 'Math 101',
        title: 'Test Announcement',
        description: 'Test description',
        teacher: 'teacher123',
        save: jest.fn()
      };

      validationResult.mockReturnValue({ isEmpty: () => true });
      Announcment.mockImplementation(() => mockAnnouncement);

      req.body = {
        course: 'Math 101',
        title: 'Test Announcement',
        description: 'Test description',
        teacher: 'teacher123'
      };

      await announcementController.createAnnouncment(req, res);

      expect(mockAnnouncement.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockAnnouncement);
    });

    it('should return 400 if validation fails', async () => {
      const errors = [{ msg: 'Course is required' }];
      validationResult.mockReturnValue({
        isEmpty: () => false,
        array: () => errors
      });

      await announcementController.createAnnouncment(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ errors });
    });
  });

  describe('getAnnouncments', () => {
    it('should fetch announcements with populated teacher', async () => {
      const mockAnnouncements = [
        {
          _id: '1',
          course: 'Math 101',
          title: 'Test 1',
          description: 'Desc 1',
          teacher: { name: 'John Doe' },
          toObject: function() { return { ...this }; }
        }
      ];

      const mockQuery = {
        populate: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue(mockAnnouncements)
      };

      Announcment.find.mockReturnValue(mockQuery);

      await announcementController.getAnnouncments(req, res);

      expect(Announcment.find).toHaveBeenCalled();
      expect(mockQuery.populate).toHaveBeenCalledWith('teacher', 'name');
      expect(mockQuery.sort).toHaveBeenCalledWith({ date: -1 });
      expect(mockQuery.limit).toHaveBeenCalledWith(3);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      Announcment.find.mockReturnValue({
        populate: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        limit: jest.fn().mockRejectedValue(error)
      });

      await announcementController.getAnnouncments(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Error fetching announcments',
        error: error.message
      });
    });
  });

  describe('getAnnouncmentById', () => {
    it('should return announcement by id', async () => {
      const mockAnnouncement = {
        _id: '123',
        course: 'Math 101',
        title: 'Test',
        description: 'Desc'
      };

      Announcment.findById.mockResolvedValue(mockAnnouncement);
      req.params.id = '123';

      await announcementController.getAnnouncmentById(req, res);

      expect(Announcment.findById).toHaveBeenCalledWith('123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockAnnouncement);
    });

    it('should return 404 if announcement not found', async () => {
      Announcment.findById.mockResolvedValue(null);
      req.params.id = '123';

      await announcementController.getAnnouncmentById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Announcment not found' });
    });
  });

  describe('updateAnnouncment', () => {
    it('should update announcement successfully', async () => {
      const mockUpdated = {
        _id: '123',
        course: 'Updated Course',
        title: 'Updated Title',
        description: 'Updated Desc'
      };

      Announcment.findByIdAndUpdate.mockResolvedValue(mockUpdated);
      req.params.id = '123';
      req.body = {
        course: 'Updated Course',
        title: 'Updated Title',
        description: 'Updated Desc'
      };

      await announcementController.updateAnnouncment(req, res);

      expect(Announcment.findByIdAndUpdate).toHaveBeenCalledWith(
        '123',
        req.body,
        { new: true }
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUpdated);
    });
  });

  describe('deleteAnnouncment', () => {
    it('should delete announcement successfully', async () => {
      const mockAnnouncement = { _id: '123' };
      Announcment.findByIdAndDelete.mockResolvedValue(mockAnnouncement);
      req.params.id = '123';

      await announcementController.deleteAnnouncment(req, res);

      expect(Announcment.findByIdAndDelete).toHaveBeenCalledWith('123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Announcment deleted successfully' });
    });
  });
});