const jwt = require("jsonwebtoken");

exports.userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorized. Please login again."
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (decodedToken.id) {
            req.body.userId = decodedToken.id;
            // req.userId = decodedToken.id;
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "Not authorized. Please login again."
            });
        }
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });
    }
};
