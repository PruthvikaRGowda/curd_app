const axios=require('axios');

exports.homeRoutes=(req,res)=>{
    //Make a get request to the api/users
    axios.get('http://127.0.0.1:8080/api/E-learning')
    .then(function(response){
        console.log(response.data)
        res.render("addstudent",{student:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
} 

exports.newstudent=(req,res)=>{
    res.render("newstudent");
}

exports.updates = (req, res) => {
    axios.get("http://127.0.0.1:8080/api/E-learning", { params: { id: req.query.id } })
        .then(function (studentdata) {
            res.render("updates", { student: studentdata.data }); // Render the "updates" page with student data
        })
        .catch(err => {
            res.render("error"); // Render an "error" page in case of an error
        });
}