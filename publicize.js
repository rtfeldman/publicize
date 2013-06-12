(function() {
    var context;
    var publicize = function(obj) {
        for (key in obj) {
            context[key] = obj[key];
        }
    }

    if (typeof module !== "undefined" && typeof global !== "undefined") {
        context = global;
        module.exports = publicize;
    }

    if (typeof window !== "undefined") {
        context = window;
        window.publicize = publicize;
    }
})();