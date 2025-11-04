// Load and display a single blog post

async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        document.getElementById('post-content').innerHTML =
            '<p>Post not found.</p>';
        return;
    }

    try {
        // Load the markdown file
        const response = await fetch(`blog/posts/${slug}.md`);
        if (!response.ok) {
            throw new Error('Post not found');
        }

        const markdown = await response.text();

        // Parse markdown content
        const { title, date, content } = parseMarkdown(markdown);

        // Render the post
        const postContent = document.getElementById('post-content');
        postContent.innerHTML = `
            <h1>${title}</h1>
            <span class="date">${formatDate(date)}</span>
            <div class="post-body">
                ${marked.parse(content)}
            </div>
        `;

        // Update page title
        document.title = `${title} - Blog`;

    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-content').innerHTML =
            '<p>Error loading post. Please try again.</p>';
    }
}

function parseMarkdown(markdown) {
    // Extract frontmatter (title and date)
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);

    let title = 'Untitled';
    let date = new Date().toISOString().split('T')[0];
    let content = markdown;

    if (match) {
        const frontmatter = match[1];
        content = match[2];

        // Parse frontmatter
        const titleMatch = frontmatter.match(/title:\s*(.+)/);
        const dateMatch = frontmatter.match(/date:\s*(.+)/);

        if (titleMatch) title = titleMatch[1].replace(/["']/g, '');
        if (dateMatch) date = dateMatch[1];
    } else {
        // If no frontmatter, try to extract title from first # heading
        const titleMatch = markdown.match(/^#\s+(.+)$/m);
        if (titleMatch) {
            title = titleMatch[1];
            content = markdown.replace(/^#\s+.+$/m, '').trim();
        }
    }

    return { title, date, content };
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load post when page loads
loadPost();
