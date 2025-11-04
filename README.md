### Hey 👋 i'm Charles

Software engineer intern in Machine Learning

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=CharlesPoulin&hide=html,css)
![Top language](https://github-readme-stats.vercel.app/api?username=CharlesPoulin&show_icons=true&count_private=true&line_height=40)

Past Internships:
* Ubisoft Montreal : -C# -Javascript                             (Summer 2023)
* Ubisoft Québec   : (Backend) -Go -Javascript                   (Summer 2024)
* Coveo            : Machine Learning -Python -Scala             (Summer 2025)


[![GitHub Streak](https://github-readme-streak-stats-inky-five.vercel.app?user=CharlesPoulin)](https://git.io/streak-stats)

---

## Minimalist Blog

This repository includes a simple, Apple-inspired minimalist blog where you can write posts in Markdown.

### How to Add a New Post

1. **Create a Markdown file** in `blog/posts/` with your content:
   ```markdown
   ---
   title: Your Post Title
   date: 2025-01-15
   ---

   # Your Post Title

   Your content here...
   ```

2. **Update** `blog/posts.json` to include your new post:
   ```json
   {
       "slug": "your-post-slug",
       "title": "Your Post Title",
       "date": "2025-01-15",
       "excerpt": "A brief description of your post"
   }
   ```

3. **Open** `index.html` in your browser to view your blog!

### Features

- Clean, minimalist Apple-style design
- Write posts in Markdown
- Automatic syntax highlighting for code
- Responsive design for all devices
- No build process required - just open index.html

### Structure

```
/
├── index.html          # Home page listing all posts
├── post.html           # Individual post viewer
├── css/
│   └── style.css      # Apple-inspired minimal styling
├── js/
│   ├── blog.js        # Loads post list
│   └── post.js        # Renders individual posts
└── blog/
    ├── posts.json     # Post metadata
    └── posts/         # Your markdown files
        ├── welcome.md
        └── minimalism.md
```
