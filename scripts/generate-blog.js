const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../blog/data.json');
const outputPath = path.join(__dirname, '../blog.html');

const articles = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

let articleCards = '';

articles.forEach(article => {
  articleCards += `
    <article style="margin-bottom:40px;">
      <h2><a href="blog.html?id=${article.id}">${article.title}</a></h2>
      <p><strong>${article.date}</strong> | ${article.category}</p>
      <p>${article.excerpt}</p>
    </article>
  `;
});

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog | Horizon Scan AI</title>
  <meta name="description" content="Strategic foresight articles and horizon scanning insights.">
</head>
<body>
  <h1>Articles</h1>
  ${articleCards}
</body>
</html>
`;

fs.writeFileSync(outputPath, html);

console.log('✅ blog.html generated!');
