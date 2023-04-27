// javascript

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main");


for (let i = 0; i < posts.length; i++) {
    let mainContent = `
        <section class="section-one">
           <img src=${posts[i].avatar} alt="" class="avatar">
           <div>
               <h3 class="name">${posts[i].name}</h3>
               <p class="location">${posts[i].location}</p>
           </div>
       </section>
       <section>
           <img src=${posts[i].post} alt="" class="artist">
           <div class="icon-container">
               <img src="./images/icon-heart.png" alt="" class="icon">
               <img src="./images/icon-comment.png" alt="" class="icon">
               <img src="./images/icon-dm.png" alt="" class="icon">
           </div>
       </section>
       <section>
           <p class="likes">
               <span id="likesNumber">${posts[i].likes}</span> likes
           </p>
           <div>
               <span class="author">${posts[i].username}</span>
               <span class="comment">${posts[i].comment}</span>
           </div>
       </section>
    `
    main.innerHTML += mainContent;
}

    const artist = document.querySelector(".artist");
    
    artist.addEventListener("dblclick", () => {
        console.log("clicked");
    })

