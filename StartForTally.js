const fs = require('fs-extra')
var path = require('path');

let LocalFolderPath = "TemplatesForTally";
let LocalDestinationPath = "public";
let LocalDestinationFileName = "TallyScript.js";

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

if (fs.existsSync("LocalDestinationFileName")) {
    fs.writeFileSync("LocalDestinationFileName", "");
};

walk(LocalFolderPath, function (err, results) {
    if (err) throw err;

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LocalNewName = element.replace(`${GlobalcurrentPath}\\${LocalFolderPath}\\`, "");
        LocalNewName = LocalNewName.replace(".html", "");
        LocalNewName = LocalNewName.replace(/\\/g, "/");

        fs.appendFileSync(LocalDestinationFileName, `<script id="${LocalNewName}"  KS="KeshavSoft" type="text/x-handlebars-template">\r\n${html}\r\n</script>\r\n`);
    });

    fs.appendFileSync(LocalDestinationFileName, `\r\n<script>\r\n`);

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LocalNewName = element.replace(`${GlobalcurrentPath}\\${LocalFolderPath}\\`, "");
        LocalNewName = LocalNewName.replace(".html", "");
        LocalNewName = LocalNewName.replace(/\\/g, "/");

        fs.appendFileSync(LocalDestinationFileName, `\r\nClassForHbs.FillPartialFromScriptInHtml({ inHtmlHbsScriptId: "${LocalNewName}" })\r\n`);
    });

    fs.appendFileSync(LocalDestinationFileName, `\r\n</script>\r\n`);
    //fs.appendFileSync(LocalDestinationFileName, `<script>\r\njClassForHbs.FillPartialFromScriptInHtml({ inHtmlHbsScriptId: "${LocalNewName}" })\r\n</script>\r\n`);
});