registerHelpers();

function registerHelpers() {
    Handlebars.registerHelper("toLowerCase", toLowerCaseHelper);
    Handlebars.registerHelper("select", selectOption);
}

function selectOption(value, options) {
    var $el = $('<select />').html(options.fn(this));
    $el.find('[value="' + value + '"]').attr({
        'selected': 'selected'
    });
    return $el.html();
}
// Converts input to lowercase
function toLowerCaseHelper(input) {
    return input.toLowerCase();
}

// Helper function to hide away basic complexity of Handlebars templates
// In most cases, we don't have to care about these internals, we're concerned
// with rendering a specific template with a corresponding dataset.
function renderHandlebarsTemplate(sourceId, data) {
    var context = data;
    var templateHtml = $("#" + sourceId).html();
    var compiledHtml = Handlebars.compile(templateHtml);
    var html = compiledHtml(context);
    return html;
}