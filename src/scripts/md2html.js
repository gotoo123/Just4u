const marked = require('marked');
const path = require('path');
const fs = require('fs');

const fileList = fs.readdirSync(path.resolve(__dirname, '../assets/md'));
fileList.forEach((name) => {
  const fileName = name.replace('.md', '');
  const file = marked.parse(fs.readFileSync(path.resolve(__dirname, `../assets/md/${fileName}.md`), {encoding: 'utf8'}));
  const content = `export const a = (<>${file}</>) `.replace(/\n/g, '');
  fs.writeFileSync(path.resolve(__dirname, `../assets/docs/${fileName}.jsx`), content);
});
