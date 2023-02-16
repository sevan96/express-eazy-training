
let posts = [];

exports.createPost = (req, res) => {
    let { author, message } = req.body;
    posts.push({"author" : author, "message": message});
    res.status(201).json("post create");
}

exports.getAllPosts = (req, res) => {
    res.status(200).json(posts);
}

exports.getPost = (req, res) => {
    let { id } = req.params;
    let result = (posts[id] != undefined ) ? posts[id] : "post not found";
    res.status(200).json(result);
}

exports.updatePost = (req, res) => {
    let { id } = req.params;
    let { author } = req.body;
    let post = (posts[id] != undefined ) ? posts[id] : null;
    let result = '';
    if(post != null){
        post.author = author;
        result = 'post updated';
    }else{
        result = 'post not found';
    }
    res.status(200).json(result);
}

exports.deletePost = (req, res) => {
    let { id } = req.params;
    let post = (posts[id] != undefined ) ? posts[id] : null;
    let result = '';
    if(post != null){
        posts = posts.filter( (post, index) => {
            return index != id
        });
        result = 'post deleted';
    }else{
        result = 'post not found';
    }
    res.status(200).json(result);
}