document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        document.getElementById('message').textContent = 'Please complete all fields.';
        return;
    }

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const newPost = {
        username: username,
        title: title,
        content: content
    };

    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html'; // Redirect to the blog entries page
});
