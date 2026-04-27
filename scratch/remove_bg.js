const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (f === 'node_modules' || f === '.next') return;
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const bgsToRemove = [
  'bg-white', 'dark:bg-[#121212]', 'bg-[#121212]', 
  'bg-zinc-50', 'dark:bg-[#1c1c1c]', 'bg-zinc-100', 'bg-zinc-900', 'dark:bg-black', 'bg-black',
  'dark:bg-[#1a1a1a]', 'bg-zinc-800'
];

walkDir('.', function(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  // Skip BC and BCE
  if (filePath.includes('biroul-de-conducere')) return;
  if (filePath.includes('layout.tsx')) return; // Do not touch layout.tsx
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We want to remove bg classes from <main ...> and <section ...>
  content = content.replace(/<(main|section)([^>]*)className="([^"]+)"([^>]*)>/g, (match, tag, beforeClass, className, afterClass) => {
    let classes = className.split(/\s+/);
    classes = classes.filter(c => !bgsToRemove.includes(c));
    return `<${tag}${beforeClass}className="${classes.join(' ')}"${afterClass}>`;
  });

  // Also remove from outermost divs that might act as wrappers, like <div className="w-full py-...">
  content = content.replace(/<div([^>]*)className="([^"]*w-full[^"]*py-[0-9]+[^"]*)"([^>]*)>/g, (match, beforeClass, className, afterClass) => {
    let classes = className.split(/\s+/);
    classes = classes.filter(c => !bgsToRemove.includes(c));
    return `<div${beforeClass}className="${classes.join(' ')}"${afterClass}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
