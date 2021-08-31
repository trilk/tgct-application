const User = require('../models/User')

// GET user profile
exports.profile = async (req, res) => {
    const { username } = req.body
	try {
		const user = await User.findById(username).select('-password')

		if (!user)
			return res.status(400).json({ success: false, message: 'User not found' })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}