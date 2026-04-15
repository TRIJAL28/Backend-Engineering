const requestAge = (req, res, next) => {
    const age = req.query.age;
    if(!age){
        return res.send('Age is required!');
    }else if(age < 18){
        return res.send("You are not eligible to access this page!");
    }else{
        next();
    }
}

module.exports = requestAge;