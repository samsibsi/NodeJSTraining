const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

const Profile = require("./models/profile") 


// new





var bodyParser = require('body-parser')

router.get("/", (req, res)=>{
    res.render('index');
});


router.get("/register", (req, res)=>{
    res.render('register', {title:"Register"});
    console.log('register');
});



router.post("/register",  async (req, res)=>{
    data = req.body;
    // console.log(req.files);
    // console.log(req.files.picture.name);

    if (!req.files){
    }
    let profile = new Profile({
        name: data.name,
        Lname: data.name,
        path:"Imgage"
    })

    await profile.save()
    let  myposts = {post:"hello world"}
    
    console.log(profile)
    var post = saveNewPost(myposts.post, profile._id)
    console.log(post)
    res.render("profile", {profile:data, posts:post})
});


router.post('/post', async (req, res)=>{

})


router.get('/member', async (req, res)=>{
    console.log("check")
    let profiles = await Profile.find();
    res.render('member' ,{users:profiles})
})

function saveNewPost(post, id){

    const Post = require("./models/post") 
    console.log('empid' + id)
    let posts = new Post({
        post: post,
        empid : id
        }
    )

    posts.save();

    return posts;
}

module.exports = router
