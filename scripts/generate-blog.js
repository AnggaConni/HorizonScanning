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
        <a href="${articleUrl}" class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
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
    <meta name="description" content="Publications, methodologies, and case studies on navigating uncertainty and mastering horizon scanning.">
    
    <script src="https://cdn.tailwindcss.com"></script>
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
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="flex items-center gap-2">
                    <i class="ph ph-radar text-teal-600 text-3xl"></i>
                    <span class="font-bold text-xl text-navy-900 tracking-tight">HorizonScan<span class="text-teal-600">AI</span></span>
                </a>
                <a href="index.html" class="text-sm font-bold text-slate-600 hover:text-teal-600 flex items-center gap-1">
                    <i class="ph-bold ph-house"></i> Back to Home
                </a>
            </div>
        </div>
    </nav>

    <section class="pt-16 pb-10 bg-gradient-to-b from-white to-slate-50 text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4 tracking-tight">Strategic Insights</h1>
        <p class="text-slate-500 max-w-2xl mx-auto text-lg">Publications, methodologies, and case studies on navigating uncertainty and mastering horizon scanning.</p>
    </section>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${articleCards}
        </div>
    </main>

</body>
</html>
`;

// 6. Tulis file blog.html
fs.writeFileSync(blogIndexPath, blogIndexHtml);

console.log('\n✅ SUKSES!');
console.log(`📊 blog.html di-generate dengan ${articles.length} artikel.`);
console.log(`📂 Artikel individu disimpan di folder: /blog/article/`);
