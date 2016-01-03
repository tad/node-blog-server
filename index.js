var fs = require('fs');
var markdown = require('markdown').markdown;

fs.readFile('./static/post1.md', 'utf8', function(err, data) {
  if (err) throw err;
  var html = markdown.toHTML(data);
  fs.writeFile('./static/post1.html', html, function(err) {
    if (err) throw err;
    console.log('File created');
  })
});
