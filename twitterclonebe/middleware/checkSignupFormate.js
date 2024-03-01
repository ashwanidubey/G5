const checkSignupFormate = (req, res, next) => {
    const { name, email, password, cpassword } = req.body
    console.log(name, email, password, cpassword)
    if (password !== cpassword) {
        return res.send("password is not matching pls check")
    }
    if (name.length < 4) {
        return res.send("please eneter a valid name")
    }
    if (!email.includes("@")) {
        return res.send("please eneter a valid email")
    }
    next();
}

module.exports = { checkSignupFormate }