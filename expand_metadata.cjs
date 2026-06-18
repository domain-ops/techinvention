const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const BASE_URL = 'https://impulsedigital.co.in/techinvention';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath, callback);
        else if (f === 'page.tsx') callback(dirPath);
    });
}

walkDir(appDir, (pagePath) => {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Look for the metadata export block
    const metaRegex = /export\s+const\s+metadata:\s*Metadata\s*=\s*{([\s\S]*?)};\s*\r?\n/m;
    const match = content.match(metaRegex);
    
    if (match) {
        // We already have some metadata. Let's extract title and description using regex or parsing
        const block = match[1];
        
        let titleMatch = block.match(/title:\s*(['"`])([\s\S]*?)\1/);
        let descMatch = block.match(/description:\s*(['"`])([\s\S]*?)\1/);
        
        if (titleMatch && descMatch) {
            const title = titleMatch[2];
            const description = descMatch[2];
            
            // Calculate canonical path
            let relativePath = path.relative(appDir, path.dirname(pagePath)).replace(/\\/g, '/');
            if (relativePath === '.') relativePath = '';
            const canonicalUrl = `${BASE_URL}${relativePath ? '/' + relativePath : ''}`;

            const newMetaBlock = `export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: ${JSON.stringify(canonicalUrl)},
    siteName: "TechInvention",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
  },
  alternates: {
    canonical: ${JSON.stringify(canonicalUrl)},
  },
  robots: {
    index: true,
    follow: true,
  },
};
`;
            // Replace old block with new block
            content = content.replace(metaRegex, newMetaBlock);
            fs.writeFileSync(pagePath, content, 'utf8');
            console.log('Enhanced metadata for:', pagePath);
        } else {
            console.warn('Could not extract title/description from metadata block in', pagePath);
        }
    }
});
