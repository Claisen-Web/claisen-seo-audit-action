const fs = require('fs');
const { glob } = require('glob');

const QUIZ_LINK_REGEX = /\]\([^)]*\/quiz\//i;
const BLOG_LINK_REGEX = /\]\([^)]*\/blog\//i;
const META_DESC_REGEX = /<!--\s*meta:.*?-->/i;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hasQuiz = QUIZ_LINK_REGEX.test(content);
  const hasBlog = BLOG_LINK_REGEX.test(content);
  const hasMeta = META_DESC_REGEX.test(content);
  return { filePath, hasQuiz, hasBlog, hasMeta };
}

(async () => {
  const files = await glob('**/*.md', { ignore: 'node_modules/**' });
  let failed = false;
  const results = files.map(checkFile);
  results.forEach(({ filePath, hasQuiz, hasBlog, hasMeta }) => {
    if (!hasQuiz || !hasBlog || !hasMeta) {
      failed = true;
      console.log(`❌ ${filePath} is missing:`);
      if (!hasQuiz) console.log('  - quiz link');
      if (!hasBlog) console.log('  - blog link');
      if (!hasMeta) console.log('  - meta description');
    } else {
      console.log(`✅ ${filePath} has all required tags.`);
    }
  });
  if (failed) {
    console.error('\nSome files are missing required SEO tags.');
    process.exit(1);
  } else {
    console.log('\nAll Markdown files passed SEO checks!');
  }
})(); 