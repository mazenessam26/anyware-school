const Announcment = require('../models/announcment');
const Teacher = require('../models/teacher');

const { validationResult } = require('express-validator');

exports.createAnnouncment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { course, title, description, teacher } = req.body;
    const announcment = new Announcment({ course, title, description, teacher });
    await announcment.save();
    res.status(201).json(announcment);
}

exports.getAnnouncments = async (req, res) => {
    try{
        const announcments = await Announcment.find().sort({ date: -1 });
        res.status(200).json(announcments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcments', error: error.message });
    }
}

exports.getAnnouncmentById = async (req, res) => {
    try{
        const announcment = await Announcment.findById(req.params.id);
        if (!announcment) {
            return res.status(404).json({ message: 'Announcment not found' });
        }
        res.status(200).json(announcment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcment', error: error.message });
    }
}

exports.updateAnnouncment = async (req, res) => {
try{
    const {course, title, description} = req.body;
    const announcment = await Announcment.findByIdAndUpdate(req.params.id, {course, title, description}, {new: true});
    if (!announcment) {
        return res.status(404).json({ message: 'Announcment not found' });
    }
    res.status(200).json(announcment);
} catch (error) {
    res.status(500).json({ message: 'Error updating announcment', error: error.message });
}
}

exports.deleteAnnouncment = async (req, res) => {
    try{
        const announcment = await Announcment.findByIdAndDelete(req.params.id);
        if (!announcment) {
            return res.status(404).json({ message: 'Announcment not found' });
        }
        res.status(200).json({ message: 'Announcment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting announcment', error: error.message });
    }
}