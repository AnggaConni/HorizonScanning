const fs = require('fs');
const path = require('path');

// 1. Setup Paths
const dataPath = path.join(__dirname, '../blog/data.json');
const blogIndexPath = path.join(__dirname, '../blog.html');
const articlesDir = path.join(__dirname, '../blog/article');

// Buat folder 'blog/article' jika belum ada
if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
}

// 2. Helper Function: Ubah Judul jadi Slug (URL SEO-friendly)
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Ganti spasi dengan -
        .replace(/[^\w\-]+/g, '')       // Hapus karakter non-word
        .replace(/\-\-+/g, '-');        // Ganti multiple - dengan single -
}

// 3. Baca data dari JSON
const articles = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// TAMBAHKAN INI: Urutkan artikel dari yang paling baru (Newest) ke yang lama (Oldest)
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// Variabel penampung untuk daftar artikel di blog.html
let articleCards = '';

// 4. Generate HTML untuk setiap Artikel INDIVIDU & Buat Card-nya
articles.forEach(article => {
    // Buat slug dari title
    const slug = slugify(article.title);
    const articleUrl = `blog/article/${slug}.html`;
    const fallbackImage = 'https://via.placeholder.com/1200x600/0f172a/ffffff?text=HorizonScan+AI';
    const imageUrl = article.image || article.imageUrl || fallbackImage;

    // A. Buat Card untuk dimasukkan ke blog.html (List)
    articleCards += `
        <a href="${articleUrl}" data-category="${article.category}" data-timestamp="${new Date(article.date).getTime()}" class="article-card bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
            <div class="h-48 overflow-hidden relative border-b border-slate-100">
                <img src="${imageUrl}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='${fallbackImage}'">
                <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    ${article.category}
                </span>
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                    <i class="ph-fill ph-calendar-blank"></i> ${article.date}
                </div>
                
                <h3 class="text-xl font-bold text-navy-900 mb-3 leading-snug group-hover:text-teal-600 transition-colors">
                    ${article.title}
                </h3>
                
                <p class="text-sm text-slate-600 mb-6 flex-1 line-clamp-3">
                    ${article.excerpt}
                </p>
                
                <div class="mt-auto">
                    <span class="text-teal-600 text-sm font-bold flex items-center gap-1 group-hover:text-teal-500 transition-colors">
                        Read Article <i class="ph-bold ph-arrow-right"></i>
                    </span>
                </div>
            </div>
        </a>
    `;

    // B. Template untuk Halaman Artikel Individu (misal: anticipatory-governance.html)
    const singleArticleHtml = `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | Horizon Scan AI</title>
    <meta name="description" content="${article.excerpt}">
    
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.excerpt}">
    <meta property="og:image" content="../../${imageUrl}">
    <meta property="og:type" content="article">

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        navy: { 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
                        teal: { 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488' }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased">

    <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="../../index.html" class="flex items-center gap-2">
                    <i class="ph ph-radar text-teal-600 text-2xl"></i>
                    <span class="font-bold text-lg text-navy-900 tracking-tight">HorizonScan<span class="text-teal-600">AI</span></span>
                </a>
                <a href="../../blog.html" class="text-sm font-bold text-slate-600 hover:text-teal-600 flex items-center gap-1">
                    <i class="ph-bold ph-arrow-left"></i> Back to Articles
                </a>
            </div>
        </div>
    </nav>

    <header class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <span class="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            ${article.category}
        </span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">${article.title}</h1>
        
        <div class="flex items-center gap-4 text-sm text-slate-500 font-medium">
            <div class="flex items-center gap-2">
                <i class="ph-fill ph-user-circle text-xl text-slate-400"></i> ${article.author}
            </div>
            <span>•</span>
            <div class="flex items-center gap-2">
                <i class="ph-fill ph-calendar-blank text-lg text-slate-400"></i> ${article.date}
            </div>
        </div>
    </header>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img src="../../${imageUrl}" alt="${article.title}" class="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg border border-slate-200" onerror="this.src='${fallbackImage}'">
    </div>

    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <article class="prose prose-slate prose-lg max-w-none prose-headings:text-navy-900 prose-a:text-teal-600 hover:prose-a:text-teal-500 prose-img:rounded-xl">
            ${article.content}
        </article>
        
        <div class="mt-16 pt-8 border-t border-slate-200 text-center">
            <h3 class="text-xl font-bold text-navy-900 mb-4">Share this insight</h3>
            <div class="flex justify-center gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors"><i class="ph-fill ph-linkedin-logo text-xl"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><i class="ph-fill ph-twitter-logo text-xl"></i></a>
            </div>
        </div>
    </main>

</body>
</html>
    `;

    // C. Simpan File Artikel ke folder blog/article/
    const outPath = path.join(articlesDir, `${slug}.html`);
    fs.writeFileSync(outPath, singleArticleHtml);
    console.log(`📄 Created: ${slug}.html`);
});

// 5. Generate Template HTML untuk blog.html (Daftar Artikel)
const blogIndexHtml = `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strategic Insights | Horizon Scan AI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div class="relative w-full md:w-96">
                <i class="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input type="text" id="searchInput" placeholder="Search articles by title..." class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
            </div>
            <div class="flex gap-3 w-full md:w-auto">
                <select id="categoryFilter" class="w-full md:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-teal-500">
                    <option value="all">All Categories</option>
                    <option value="Foresight Strategy">Foresight Strategy</option>
                    <option value="Methodology">Methodology</option>
                </select>
                <select id="sortFilter" class="w-full md:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-teal-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>
        </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div id="articleGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${articleCards}
        </div>
        <div id="emptyState" class="hidden text-center py-12 text-slate-500">
            <i class="ph-fill ph-file-dashed text-4xl mb-3 text-slate-300"></i>
            <p>No articles found matching your criteria.</p>
        </div>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('searchInput');
            const categoryFilter = document.getElementById('categoryFilter');
            const sortFilter = document.getElementById('sortFilter');
            const articleGrid = document.getElementById('articleGrid');
            const emptyState = document.getElementById('emptyState');
            // Ambil semua card yang sudah di-generate oleh Node.js
            let cards = Array.from(document.querySelectorAll('.article-card'));

            function filterAndSort() {
                const searchTerm = searchInput.value.toLowerCase();
                const category = categoryFilter.value;
                const sortOrder = sortFilter.value;
                let visibleCount = 0;

                // 1. Proses Filter (Pencarian & Kategori)
                cards.forEach(card => {
                    const title = card.querySelector('h3').innerText.toLowerCase();
                    const cardCategory = card.getAttribute('data-category');
                    
                    const matchesSearch = title.includes(searchTerm);
                    const matchesCategory = category === 'all' || cardCategory === category;

                    if (matchesSearch && matchesCategory) {
                        card.style.display = 'flex'; // Munculkan
                        visibleCount++;
                    } else {
                        card.style.display = 'none'; // Sembunyikan
                    }
                });

                // 2. Proses Sorting (Newest / Oldest)
                const visibleCards = cards.filter(card => card.style.display !== 'none');
                
                visibleCards.sort((a, b) => {
                    const timeA = parseInt(a.getAttribute('data-timestamp'));
                    const timeB = parseInt(b.getAttribute('data-timestamp'));
                    return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
                });

                // Terapkan urutan baru ke DOM
                visibleCards.forEach(card => articleGrid.appendChild(card));

                // 3. Tampilkan Empty State jika tidak ada yang cocok
                if (visibleCount === 0) {
                    emptyState.classList.remove('hidden');
                } else {
                    emptyState.classList.add('hidden');
                }
            }

            // Pasang Event Listeners
            searchInput.addEventListener('input', filterAndSort);
            categoryFilter.addEventListener('change', filterAndSort);
            sortFilter.addEventListener('change', filterAndSort);
        });
    </script>
</body>
</html>
`;

// 6. Tulis file blog.html
fs.writeFileSync(blogIndexPath, blogIndexHtml);

// =========================================================
// 7. AUTO-GENERATE SITEMAP.XML
// =========================================================
const sitemapPath = path.join(__dirname, '../sitemap.xml');
const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://horizon-scanning.org/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://horizon-scanning.org/blog.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://horizon-scanning.org/tool.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://horizon-scanning.org/3d-visual/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;

// Tambahkan URL dinamis untuk setiap artikel
articles.forEach(article => {
    const slug = slugify(article.title);
    sitemapXml += `
  <url>
    <loc>https://horizon-scanning.org/blog/article/${slug}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

sitemapXml += `\n</urlset>`;

// Tulis ke file sitemap.xml
fs.writeFileSync(sitemapPath, sitemapXml);
console.log(`🗺️  sitemap.xml berhasil di-generate dengan ${articles.length} link artikel.`);

console.log('\n✅ SUKSES!');
console.log(`📊 blog.html di-generate dengan ${articles.length} artikel.`);
console.log(`📂 Artikel individu disimpan di folder: /blog/article/`);
