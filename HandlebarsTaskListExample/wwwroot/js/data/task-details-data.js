var taskDetails = [{
    id: 1,
    topic: "Task Detail 1 Topic",
    assignee: "Jack Jackson",
    projectSTartDt: "02/01/1980",
    statusDescription: "Active",
    urgencyDescription: "Medium",
    projectId: 2,
    detailSummary: "Task Detail 1 Detail Summary",
    taskDetailUpdates: [{
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 1 Update 1 Comment"
    },
    {
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 1 Update 2 Comment"
    },
    {
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 1 Update 3 Comment"
    }
    ]
},
{
    id: 2,
    topic: "Task Detail 2 Topic",
    assignee: "John Johnson",
    projectSTartDt: "01/01/1980",
    statusDescription: "Active",
    urgencyDescription: "Medium",
    detailSummary: "Task Detail 2 Detail Summary",
    projectId: 1,
    taskDetailUpdates: [{
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 2 Update 1 Comment"
    },
    {
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 2 Update 2 Comment"
    },
    {
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 2 Update 3 Comment"
    }
    ]
},
{
    id: 3,
    topic: "Task Detail 3 Topic",
    assignee: "John Johnson",
    projectSTartDt: "01/01/1980",
    statusDescription: "Active",
    urgencyDescription: "Normal",
    projectId: 1,
    detailSummary: "Task Detail 3 Detail Summary",
    taskDetailUpdates: [{
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 3 Update 1 Comment"
    },
    {
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 3 Update 2 Comment"
    },
    {
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 3 Update 3 Comment"
    }
    ]
}
];

var allTaskUpdates = [
    {
        taskDetailId: 1,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 1 Update 1 Comment"
    },
    {
        taskDetailId: 1,
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 1 Update 2 Comment"
    },
    {
        taskDetailId: 1,
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 1 Update 3 Comment"
    },
    {
        taskDetailId: 1,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 1 Update 4 Comment"
    },
    {
        taskDetailId: 1,
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 1 Update 5 Comment"
    },
    {
        taskDetailId: 1,
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 1 Update 6 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 2 Update 1 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 2 Update 2 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 2 Update 3 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 2 Update 4 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 2 Update 5 Comment"
    },
    {
        taskDetailId: 2,
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 2 Update 6 Comment"
    },
    {
        taskDetailId: 3,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 3 Update 1 Comment"
    },
    {
        taskDetailId: 3,
        taskUpdateDt: "01/02/1980",
        taskUpdateComment: "Task 3 Update 2 Comment"
    },
    {
        taskDetailId: 3,
        taskUpdateDt: "01/03/1980",
        taskUpdateComment: "Task 3 Update 3 Comment"
    },
    {
        taskDetailId: 3,
        taskUpdateDt: "01/01/1980",
        taskUpdateComment: "Task 3 Update 4 Comment"
    }
];