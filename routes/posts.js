const express = require('express');

const Posts = require('../model/posts');
const router = express.Router();

router.post ('/admin/post/save', (req,res) =>{
    let newPost = new Posts(req.body);
    newPost.save((err) => {
        if (err){
            return res.status (400).json({
                error:err
            })
        }
        return res.status(200).json({
            success : "Post Saved Succesfully"
        })
    })
})

// get posts
router.get('/admin/posts', (req,res) =>{
    Posts.find().exec((err,posts) => {
        if (err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success : true,
            existingPosts : posts
        })
    })
})

// update post
router.put('/admin/post/update/:id', (req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id, 
        {
            $set : req.body
        },
        (err,post) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success :"update successfully" 
            })

        }
    )
})

// delete post
router.delete('/admin/post/delete/:id', (req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err)
            return res.status(400).json({
            message :"delete unsuccesfull",err
        });

        return res.json({
            message :"delete successfully", deletedPost 
        })
    })
})


// get spesific post

router.get("/admin/post/:id",(req,res)=>{

    let postId = req.params.id;

    Posts.findById (postId, (err,post) =>{
        if (err){
            return res.status (400).json({success:false,err});
        }
        return res.status(200).json({
            success : true,
            post
        })
    })
})



module.exports = router