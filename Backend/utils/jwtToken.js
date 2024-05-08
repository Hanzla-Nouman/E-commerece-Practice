

// Creating Token and saving it into cookie 
const sendToken = (user, statusCode, res, avatar = {}) => {
    const token = user.getJWTToken();
 
    const options = {
        expires: new Date(
            // Date.now() + parseInt(process.env.COOKIE_EXPIRE) * 1000 + 24 * 60 * 60 * 1000
            Date.now() + 7 * 1000 + 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;
