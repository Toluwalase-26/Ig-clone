alert("Welcome to Instagram")
let username=prompt("What is your name?");
let posts = [
" Post 1:Sunset picture",
" Post 2:Delicious Food ",
" Post 3:Cute Puppy"
];
let feed = document.getElementById("feed");
function showPosts(){
    feed.innerHTML="";
    for(let i = 0; i<posts.length;i++){
        let postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.textContent= posts[i];
        feed.appendChild(postDiv)
    }
}
showPosts();
let choice = prompt(
    "Hello" + username+"!\nChoose an option:\n1= View Posts\n2= Create Post\n3 = Exit"
);
switch(choice){
    case "1":
    alert("Here are the post:\n" + posts.join("\n"));
    break;
    case "2":
        let newPost = prompt("Type your new post:");
    posts.push("Post"+newPost);
    alert("Post added! Here are all posts now:\n"+posts.join("\n"));
    break;
    case "3":
        alert("Goodbye"+ username+"!");
        break;
        default:
            alert("Invalid choice.Refresh to try again.");
}