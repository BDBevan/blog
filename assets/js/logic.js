document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;
            postElement.appendChild(postTitle);

            const postAuthor = document.createElement('p');
            postAuthor.textContent = `By: ${post.username}`;
            postElement.appendChild(postAuthor);

            const postContent = document.createElement('p');
            postContent.textContent = post.content;
            postElement.appendChild(postContent);

            postsContainer.appendChild(postElement);
        });
    }
});
