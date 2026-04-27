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

walkDir('.', function(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Pattern for centered titles
  const pattern = /<div className="([^"]*?relative flex justify-center items-center[^"]*?)">\s*<div className="absolute w-full h-\[([0-9]+px)\] bg-gradient-to-r from-transparent via-red-600 to-transparent[^>]*><\/div>\s*<(h[1-6]) className="bg-white dark:bg-\[#121212\] px-\d+([^"]*)">([\s\S]*?)<\/\3>\s*<\/div>/g;

  content = content.replace(pattern, (match, divClass, hSize, hTag, hClass, innerHTML) => {
    let newDivClass = divClass.replace(/\brelative\b/g, '').replace(/\s+/g, ' ').trim();
    newDivClass += " gap-4 md:gap-8";
    
    let newHClass = hClass.replace(/\brelative\b/g, '').replace(/\bz-10\b/g, '').replace(/\s+/g, ' ').trim();
    newHClass += " shrink-0";

    return `<div className="${newDivClass}">
          <div className="h-[${hSize}] flex-1 bg-gradient-to-r from-transparent to-red-600 opacity-100"></div>
          <${hTag} className="${newHClass}">
${innerHTML}          </${hTag}>
          <div className="h-[${hSize}] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>`;
  });

  // Pattern for left-aligned titles
  const leftAlignedPattern = /<div className="([^"]*?relative flex items-center[^"]*?)">\s*<div className="absolute w-full h-\[([0-9]+px)\] bg-gradient-to-r from-red-600 to-transparent[^>]*><\/div>\s*<(h[1-6]) className="bg-white dark:bg-\[#121212\] pr-\d+([^"]*)">([\s\S]*?)<\/\3>\s*<\/div>/g;

  content = content.replace(leftAlignedPattern, (match, divClass, hSize, hTag, hClass, innerHTML) => {
    let newDivClass = divClass.replace(/\brelative\b/g, '').replace(/\s+/g, ' ').trim();
    newDivClass += " gap-4 md:gap-8";
    
    let newHClass = hClass.replace(/\brelative\b/g, '').replace(/\bz-10\b/g, '').replace(/\s+/g, ' ').trim();
    newHClass += " shrink-0";

    return `<div className="${newDivClass}">
          <${hTag} className="${newHClass}">
${innerHTML}          </${hTag}>
          <div className="h-[${hSize}] flex-1 bg-gradient-to-l from-transparent to-red-600 opacity-100"></div>
        </div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
