$(document).ready(function() {
    configureTaskDetailsModal();
});

function configureTaskDetailsModal() {
    var modal = $("#editTaskDetailsModal");
    modal.on("shown.bs.modal", function (e) {
        var taskDetailsId = $(e.relatedTarget).data("taskDetailsId");
        var taskDetails = getTaskDetails(taskDetailsId);
        var html = renderHandlebarsTemplate("editTaskDetailTemplate", taskDetails);
        $("#editTaskDetailsModalBody").html(html);

        $("#saveTaskDetails").on("click", save);
    });

    modal.on("hide.bs.modal",
        function() {
            $("#saveTaskDetails").off("click", save);
        });

    function save() {
        var formData = $("#editTaskDetailsForm").serialize();
        // TODO:  In reality, our AJAX POST request would occur here...
        alert(formData);
        $("#editTaskDetailsModal").modal("hide");
    }
}

function getTaskDetails(taskDetailsId) {
    return taskDetails.filter(function (item) {
        return item.id === taskDetailsId;
    });
}