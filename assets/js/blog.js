// assets/js/blog.js

document.addEventListener('DOMContentLoaded', (event) => {
    const blogPostsDiv = document.getElementById('blogPosts');
    const clearButton = document.getElementById('clearBlogPosts');

    // Load existing blog posts from local storage (or from server)
    loadBlogPosts();

    // Clear blog posts from local storage
    clearButton.addEventListener('click', function() {
        clearBlogPosts();
    });
});

function loadBlogPosts() {
    const blogPostsDiv = document.getElementById('blogPosts');
    // Clear existing posts to prevent duplication
    blogPostsDiv.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.forEach(post => displayBlogPost(post));
}

function displayBlogPost(post) {
    const blogPostsDiv = document.getElementById('blogPosts');
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post';
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>By: ${post.username}</p>
        <p>${post.content}</p>
    `;
    blogPostsDiv.appendChild(postDiv);
}

function clearBlogPosts() {
    localStorage.removeItem('blogPosts');
    const blogPostsDiv = document.getElementById('blogPosts');
    while (blogPostsDiv.firstChild) {
        blogPostsDiv.removeChild(blogPostsDiv.firstChild);
    }
}
