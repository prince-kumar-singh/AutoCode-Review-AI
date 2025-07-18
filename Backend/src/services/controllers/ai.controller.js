// Correct the path to the service file.
// The `ai.service.js` file should be a sibling to the 'controllers' directory.
const { getResponse: getResponseFromService } = require('../ai.service.js');

async function getReview(req, res) {
    try {
        // Correctly destructure 'prompt' from req.query.
        const { code } = req.body.code ? req.body : req.query;

        if (!code) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Call the imported service function.
        const response = await getResponseFromService(code);

        // Send the actual response from the service.
        res.json({ response });
    } catch (error) {
        console.error("Error in getResponse controller:", error);
        // Show detailed error in development, generic in production
        if (process.env.NODE_ENV === 'development') {
            res.status(500).json({ error: 'Internal server error', details: error.message, stack: error.stack });
        } else {
            res.status(500).json({ error: 'An internal server error occurred' });
        }
    }
}

module.exports = {
    getReview,
};