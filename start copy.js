const fs = require('fs-extra')
var path = require('path');

let LocalFolderPath = "Templates";
let LocalDestinationPath = "public";

var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

var GlobalcurrentPath = process.cwd();

if (fs.existsSync("script.js")) {
    fs.writeFileSync("script.js","");
};

walk(LocalFolderPath, function (err, results) {
    if (err) throw err;

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LocalNewName = element.replace(`${GlobalcurrentPath}\\${LocalFolderPath}\\`, "");
        LocalNewName = LocalNewName.replace(".html", "");

      //  console.log("LocalNewName : ", LocalNewName);

    //    let LocalNewPath = element.replace(LocalFolderPath, LocalDestinationPath);


//        fs.appendFileSync("script.js", `<script id="${LocalNewName}" type="text/x-handlebars-template">${html}</script>`);
        fs.appendFileSync("script.js", `<script id="${LocalNewName}"  KS="KeshavSoft" type="text/x-handlebars-template">\r\n${html}\r\n</script>\r\n`);

    });
});