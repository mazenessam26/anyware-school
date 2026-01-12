const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const error = {
      success: false,
      message: err.message || 'Server Error',
    };
  
    if (err.name === 'ValidationError') {
      error.message = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json(error);
    }
  
    if (err.name === 'CastError') {
      error.message = 'Resource not found';
      return res.status(404).json(error);
    }
  
    res.status(err.statusCode || 500).json(error);
  };
  
  module.exports = errorHandler;