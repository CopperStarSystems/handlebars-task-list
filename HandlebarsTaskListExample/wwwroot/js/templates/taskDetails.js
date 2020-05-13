registerPartials();


// Helper function to tell Handlebars about any partials we need
// (in this case, the Task Detail Update partial)
function registerPartials() {
    // Register the Task Details partial with Handlebars so it can render it when we need it.
    Handlebars.registerPartial("taskDetailUpdatesList", $("#taskDetailUpdatePartial").html());

}


