var parser = function (input, match) {
    for (var i, found, inputTmp = input; inputTmp !== ""; ) {
        for (i = 0; i < match.length; i++) {
            if ((found = match[i].pattern.exec(inputTmp)) !== null) {
                match[i].action(found);
                inputTmp = inputTmp.substr(found[0].length);
                break;
            }
        }
    }
};

var report = function (match) {
    console.log(JSON.stringify(match));
};
parser("Foo 1 Bar 7 Baz 42", [
    { pattern: /^Foo\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^Bar\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^Baz\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^\s*/,         action: function (match) {}                 }
]);