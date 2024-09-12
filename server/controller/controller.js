const student=require('../model/model');

//create and save new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be emtpy!"});
        return;
    }
    //new user
    const user=new student({
        name:req.body.name,
        usn:req.body.usn,
        course:req.body.course,
        sem:req.body.sem,
        email:req.body.email,
        gender:req.body.gender        
    })

    //save user in the database
    user
    .save(user)
    .then(data=>{
        //res.send(data)
        res.redirect('/newstudent')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error occurred while creating a create operation"
        });
    });
}


//retrive and return all user/retrive and return a single user
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        student.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Not found student with id"+id})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:"Err retrieving student with id"+id})
        })
    }else{

        student.find()
    .then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send({message:err.message || "Error occurred while retriving user information"})
    })
}
}


//Update a new identified user by user id
exports.update=(req,res)=>{
if(!req.body){
    return res
    .status(400)
    .send({message:"Data to Update can not be empty"})
}
const id = req.params.id;
student.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then(data=>{
    if(!data){
        res.status(404).send({message:'Cannot Update user with ${id}. may be user not found!'})
    }else{
        res.send(data)
    }
}).catch(err=>{
    res.status(500).send({message:"Error Update Student Information"})
})
}

//Delete a user with specified id in the request
exports.delete=(req,res)=>{
const id=req.params.id;

student.findByIdAndDelete(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:'cannot delete with id ${id}. may be id is worng'})
    }else{
        res.send({
            message:"User was deleted successfully!"
        })
    }
})
.catch(err=>{
    res.status(500).send({
        message:"could not delete user with id=" +id
    });
});
}