//define error handler
const errorHandler = (err, req, res, next) => {
	return res.status(err.status || 500).json({
		status: err.status || 500,
		message: err.message || "Something Went Wrong!"
	});
};

//export error handlers
module.exports = {
	errorHandler
};
