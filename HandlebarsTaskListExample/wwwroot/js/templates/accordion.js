registerHelpers();
registerPartials();

$(document).ready(function () {

    //registerPartials();
    renderAccordionTemplate();
    configureAccordion();
});

function registerHelpers() {
    Handlebars.registerHelper("headerId", headerIdHelper);
    Handlebars.registerHelper("panelId", panelIdHelper);
    Handlebars.registerHelper("headerBackground", headerBackgroundHelper);
}

// Given a TaskDetails, generates the correct Card Header Id
function headerIdHelper(input) {
    return "header-" + input.urgencyDescription.toLowerCase() + "-" + input.projectId;
}

// Given a TaskDetails, generates the correct Card Panel Id
function panelIdHelper(input) {
    return input.urgencyDescription.toLowerCase() + "-container-" + input.projectId;
}

// Given a TaskDetails, generates the correct CSS class for setting the background color of the accordion header
function headerBackgroundHelper(input) {
    switch (input.urgencyDescription.toLowerCase()) {
    case "urgent":
        return "accordion-header-high-priority";
    case "medium":
        return "accordion-header-medium-priority";
    case "normal":
        return "accordion-header-low-priority";
    default:
        return "";
    }
}

function registerPartials() {
    Handlebars.registerPartial("accordionItemPartial", $("#accordionItemPartial").html());
}

// Renders the accordion DOM so we can manipulate it
function renderAccordionTemplate() {
    $("#accordion-container").html(renderHandlebarsTemplate("accordionTemplate", accordion));
}

function showTaskDetails(containerId, data) {
    // Ask Handlebars to render the taskDetailsTemplate with the submitted data
    var html = renderHandlebarsTemplate("taskDetailsTemplate", data);

    // Take the rendered HTML and stick it in the specified container
    document.getElementById(containerId).innerHTML = html;
}

// Configures the accordion's behavior (e.g. expand/collapse, etc.)
function configureAccordion() {
    // Set up general Bootstrap accordion behavior
    $(".collapse").collapse();

    // Hook and configure "Show All" button click event when a Card is shown
    $(".card").on("shown.bs.collapse", function () {
        // We have to hook this event **after** the accordion pane is shown (e.g. on the shown.bs.collapse 
        // event), because the "show all updates" button does not get rendered until the accordion pane
        // is actually opened.
        $(".btn-show-all-updates").on("click", function (ev) {
            ev.preventDefault();
            // Get the associated TaskDetailId from the data-task-detail-id attribute on the "Show All" link
            var taskDetailId = $(this).data("taskDetailId");
            showAllUpdatesForTaskDetail(taskDetailId);
        });

        $(".editTaskLink").on("click",
            function(event) {
                event.preventDefault();
                $("#editTaskDetailsModal").modal("show", $(this));
                $("#editTaskDetailsModal").on("hidden.bs.modal",
                    function(event) {
                        $("#editTaskDetailsModal").off("hidden.bs.modal");
                        // TODO: Refresh current panel  
                    });
            });

    });

    // Hook accordion header click event so we can load 
    $(".accordion-header").click(function () {
        // Get the urgencyDescription from the data-urgency-description attribute on the accordion header link
        // and convert it to lowercase
        var urgencyDescription = $(this).data("urgencyDescription").toLowerCase();
        //var containerId = urgencyDescription + "-container";
        var projectId = $(this).data("projectId");
        var containerId = urgencyDescription + "-container-" + projectId;
        var data = getTaskDetailsForUrgency(urgencyDescription, projectId);
        showTaskDetails(containerId, data);
    });
}

// Helper function to get and display all updates for the specified TaskDetailId
function showAllUpdatesForTaskDetail(taskDetailId) {
    // Do our AJAX GET request to the endpoint that gets us all TaskDetailUpdates
    // NOTE:  RIGHT NOW WE'RE JUST SIMULATING DATA RETRIEVED FROM THE WEB API BY FILTERING
    // THE allTaskUpdates ARRAY ABOVE TO GIVE US ONLY UPDATES FOR THE SPECIFIED taskDetailId
    var updates = getUpdatesForTaskDetail(taskDetailId);

    // When that returns...
    // 1: Use the retrieved taskDetailId to generate the ID for the correct Task Detail Updates container
    var updatesContainerId = "#task-detail-updates-" + taskDetailId;


    // 2: Use the generated container ID to get a reference to the div that contains the list of 
    // Task Detail Updates so we can manipulate it
    var updatesContainer = $(updatesContainerId);

    // 3:  Clear the container's existing contents
    updatesContainer.empty();

    // 4: Re-render the content for the container with the full list of TaskDetailUpdates
    var html = renderHandlebarsTemplate("taskDetailUpdatePartial", updates);

    // 5:  Show it, yo.
    updatesContainer.html(html);
}


// Helper function for filtering the allTaskUpdates array to only get
// updates for the selected task.
//
// This is similar to the lambda expression in a LINQ .Where(...) call - in C#, it would translate to:
// var x = allTaskUpdates.Where(p=>p.taskDetailId == taskDetailId);
function getUpdatesForTaskDetail(taskDetailId) {
    return allTaskUpdates.filter(function (item) {
        return item.taskDetailId === taskDetailId;
    });
}

// Helper function for filtering the taskDetails array to only get TaskDetails for the
// specified urgencyDescription and projectId
function getTaskDetailsForUrgency(urgencyDescription, projectId) {
    return taskDetails.filter(function (item) {
        return item.urgencyDescription.toLowerCase() === urgencyDescription && item.projectId === projectId;
    });
}