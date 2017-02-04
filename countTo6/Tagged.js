console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(char, ...args) {
    var str = char[0];
    for (var i = 0; i < args.length; i++) {
        str = str + escape(args[i]) + char[i + 1];
    };
    return str;
}

function escape(raw) {
    return raw.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
};