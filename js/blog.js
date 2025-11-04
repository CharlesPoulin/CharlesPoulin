// Load and display blog posts on the index page

async function loadPosts() {
    try {
        const response = await fetch('blog/posts.json');
        const posts = await response.json();

        const container = document.getElementById('posts-container');

        if (posts.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No posts yet. Add your first post!</p>';
            return;
        }

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        container.innerHTML = posts.map(post => `
            <a href="post.html?slug=${post.slug}" class="post-card">
                <div class="post-meta">${formatDate(post.date)}</div>
                <h2>${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
            </a>
        `).join('');
    } catch (error) {
        console.error('Error loading posts:', error);
        document.getElementById('posts-container').innerHTML =
            '<p style="text-align: center; color: var(--text-secondary);">Error loading posts. Make sure posts.json exists in the blog folder.</p>';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load posts when page loads
loadPosts();
