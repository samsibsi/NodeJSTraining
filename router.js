const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()
const Post = require("./models/post") 

const Profile = require("./models/profile") 


// new





var bodyParser = require('body-parser')
const { rearg, cond } = require('lodash')

router.get("/", (req, res)=>{
    res.render('index');
});


router.get("/register", (req, res)=>{
    res.render('register', {title:"Register"});
    console.log('register');
});


router.get("/profile/:id", async (req, res)=>{
    let id = req.params.id;
    let profile =  await Profile.findById(id)
    let post = await Post.find({empid:id})
    res.render('profile', {profile: profile, posts:post});
});




router.post("/register",  async (req, res)=>{
    data = req.body;
    // console.log(req.files);
    // console.log(req.files.picture.name);

    if (!req.files){
    }
    let profile = new Profile({
        Name: data.name,
        Lname: data.lname,
        path:"Imgage"
    })

    await profile.save()
    let  myposts = {post:"hello world"}
    let post = saveNewPost(myposts.post, profile._id)

    let url = '/profile/' + profile._id
    res.redirect(url)
});


router.post('/post', async (req, res)=>{
    body = req.body
    saveNewPost(body.post, body.empid)

    let url = '/profile/' + body.empid
    res.redirect(url)
})


router.get('/deletepost/:id', async (req, res)=>{
    let id  = req.params.id
    let post = await Post.findOne({_id:id})
    let pin = await Post.deleteOne({_id:id})

    console.log(post)
    console.log("pin" + pin)
    
    let url = '/profile/' + post.empid
    res.redirect(url)
})

router.post('/updateprofile', async(req, res) =>{
    let name = req.body.name
    let lname = req.body.lname
    let id = req.body.id

    console.log(name, lname)

    let profile = await Profile.findByIdAndUpdate(id , {Name:name, Lname:lname})
    let url = '/profile/' + profile._id
    res.redirect(url)
})


router.get('/member', async (req, res)=>{
    console.log("check")
    let profiles = await Profile.find({}).exec((err, doc)=>{
        res.render('member', {users:doc})
    });

})

function saveNewPost(post, id){

    let posts = new Post({
        post: post,
        empid : id
        }
    )

    posts.save();

    return posts;
}

module.exports = router
