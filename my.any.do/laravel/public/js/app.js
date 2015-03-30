var app = angular.module('app',['ngRoute', 'angularFileUpload']);
// Service to get time view
app.factory('getDate', function($http) {
    return{
        get : function() {
            return $http.get('index.php/times'); }
    }
});

// connections with controller
app.factory('tasks',function($http) {
    return{
        get : function() {
            return $http.get('index.php/tasks');
        },
        save: function(data){
                return $http.post('index.php/tasks/post',data);

        },
        delete: function(id){
            return $http.delete('index.php/tasks/delete/' +id);
        },

        check: function(id){
            return $http.post('index.php/tasks/check/' +id);
        },
        saveSubtask : function(data){
            return $http.post('index.php/sub-tasks/post',data);
        },
        getSubtask : function() {
            return $http.get('index.php/subtasks');
        },
        updateSubtask : function(data)
        {
            return $http.put('index.php/sub-tasks/update/'+data.id,data);
        },
        deleteSubtask: function(id){
            return $http.delete('index.php/sub-tasks/delete/' +id);
        },

        saveAttachmentsPath: function(data){
        return $http.post('index.php/saveAtt',data);
         },
        getAttachments: function(id){
            return $http.get('index.php/attachments/'+id);
        },
        getLastId: function(){
            return $http.get('index.php/last_id');
        },
        downloads: function(id){
            return $http.get('index.php/download/'+id);
        },
        deleteAttachment: function(id)
        {
          return $http.delete('index.php/attachment-delete/'+id);
        },
        sendEmail: function(data)
        {
            return $http.post('index.php/sendEmail',data);
        }
    }});
//Services for 'folders' part
app.factory('serviceFolder',function($http){
    return{
        get: function() {
            return $http.get('index.php/folders');
        },
        save: function(name){
            return $http.post('index.php/folders/post',name);

        },
        delete: function(id){
            return $http.delete('index.php/folders/delete/' +id);
        }
    }
});
// Controller for 'folders' part
app.controller('folderController',function($scope,$http,serviceFolder){
    $scope.loading = true;
$scope.Folder={};
$scope.Folder.name="new folder";

    //sends query to save new folder
    $scope.addFolder = function(){
        serviceFolder.save($scope.Folder)
            .success(function(data){
                serviceFolder.get()
                    .success(function(getData){
                        $scope.folders = getData;
                    });});

    };
// delete folder by it's ID
    $scope.folderDelete = function(id){
        $scope.loading = true;
        serviceFolder.delete(id).success(function(data){
            serviceFolder.get().success(function(getData){
                $scope.folders = getData;
               })})

        $scope.loading = false;
    };
    });
// controller for getting main data
app.controller('mainController', function($scope,$http, getDate,tasks,serviceFolder,FileUploader) {
    $scope.flag = 0;
    task_id = null;
    $scope.loading = true;
    $scope.Task ={};
    $scope.Attachment = {};
    getDate.get().success(function(data) {
        $scope.times = data;

    });
//Events:

    // Event to change task status on "checked"
    $scope.checkTask = function(taskId)
    {

        for(i=0;i<$scope.tasks.length;i++)
        {
           if($scope.tasks[i].id == taskId)
           {
               $scope.tasks[i].check = "checked";
               tasks.check(taskId);
                  break;
           }

        }

    };
// "search" animation to hide
   $scope.searchOut = function(){

        document.getElementById('searchInput').style.width = '0px';
        document.getElementById('searchInput').value = "";
       $scope.search = "";

    }
    // Events end

    // Invitations function
    $scope.mail = {};
    $scope.sendMail = function()
    {
       // get all data from models, add title and send it to controller
        $scope.mail.title = "Invitation!";
        alert(
            'Your mail was successfully sent');
        tasks.sendEmail($scope.mail)
            .success(function(data){
                alert(
                    'Your mail was successfully sent');
                $scope.mail.to = "";
                $scope.mail.body = "";
            })
            .error(function(data){

                alert('Your mail was not sent, please try one more time');

            });
    };
    //function that opens search input
$scope.openSearch = function() {

  document.getElementById('searchInput').style.width = '180px';
    document.getElementById('searchInput').focus();


};
    //for Calendar issue tracking

    $scope.activated = "nonActive";
    $scope.openPopUpCalendar = function(){
        $scope.flag = 1;

            $scope.showPopUpCalendar = true;
if($scope.activated == "nonActive")
{
        window.setTimeout(calendarActive,100);
    $scope.activated = "Active"
}
    };
// saves selected date from calendar and closes it
$scope.saveDate= function(){
    $scope.selectedDate = selectedDate;
    $scope.showPopUpCalendar = false;
}

    // calendar window close
    $scope.closeCal = function(){
        $scope.showPopUpCalendar = false;
        $scope.flag = 0;
    };
    tasks.get().success(function(data){
        $scope.tasks = data;
        $scope.loading = false;
    });
    serviceFolder.get().success(function(data){
        $scope.folders = data;

    });
    $scope.showPopUpTask = false;
    $scope.showPopUpMsg = false;

// Dialog-box to add task
    $scope.openPopUp = function(time_id,folder_id,timeDate,folderName) {
        $scope.showPopUpMsg = true;
        $scope.time_id = time_id;

        $scope.selectedDate = timeDate;

        $scope.folder_id = folder_id;

        if(folderName=='folder')
        {
            $scope.folderName = $scope.folders[0].name;
        }
        else
        {
        $scope.folderName = folderName;
        }
          };
// closes Dialog-box to add task
    $scope.closePopUp = function(){
        $scope.showPopUpMsg = false;
        document.getElementById('taskInput').value = "";
    };
    $scope.Task={};
    $scope.Task.name="";

    //function to get all Sub-tasks
    tasks.getSubtask().success(function(data){
        $scope.subtasks = data.reverse();
    });
// function to create new task
    $scope.addTask = function(time_id,folder_id){
         $scope.Task.folder_id = folder_id;
        $scope.Task.day = $scope.selectedDate;
        selectedDate = new Date($scope.selectedDate);
        thisDay = new Date (today);
if($scope.flag == 0)
{
    $scope.Task.day = new Date (today);
//checking which time category was selected
    if( time_id == 2 )
    {


        $scope.Task.day.setDate($scope.Task.day.getDate()+ 1);


    }
    else if( time_id == 3 )
    {

        $scope.Task.day.setDate($scope.Task.day.getDate() + 2);


    }
            else if( time_id == 4 )
    {

        $scope.Task.day.setDate($scope.Task.day.getDate() + 3);


    }

    $scope.Task.time_id = time_id;
    $scope.Task.day = getNewDate($scope.Task.day);
}
//checking which date was selected and get difference with today's to save into correct category
     else   if(selectedDate - thisDay <= 0  )
        {
            $scope.Task.time_id = 1;
        }
        else if((selectedDate - thisDay)/(1000*60*60*24) >= 1 && (selectedDate - thisDay)/(1000*60*60*24)  <= 2)
        {
            $scope.Task.time_id = 2;
        }
        else if((selectedDate - thisDay)/(1000*60*60*24) > 2 && (selectedDate - thisDay)/(1000*60*60*24)  <= 3){
            $scope.Task.time_id = 3;
        }

else {
    $scope.Task.time_id = 4;
}

// flag to track use of calendar
$scope.flag = 0;

        // save new task
        tasks.save($scope.Task)
            .success(function(data){
                tasks.get()
                    .success(function(getData){
                        $scope.tasks = getData;
                    });});
        $scope.closePopUp();
    };
    $scope.deleteTask = function(id){
        $scope.loading = true;
            tasks.delete(id).success(function(data){
           tasks.get().success(function(getData){
                $scope.tasks = getData;
            })})};


    //function to view task
    $scope.openPopUpTask = function(id, content) {

        $scope.showPopUpTask = true;
      task_id =  $scope.Task.task_id = id;
        $scope.content = content;
      //  $scope.last_id = {};
        $scope.last_id= 0;
      //  tasks.getLastId();

// load attachments for selected task
        tasks.getAttachments($scope.Task.task_id).success(function(data) {
            $scope.attachments = data;
            if($scope.attachments[0]!=null)
            {
            last_id =  $scope.attachments[$scope.attachments.length-1]['id']+1;
            }
            else
            {
                last_id = 1;
            }

            $scope.uploader.url = 'index.php/uploadFile/'+task_id+'/'+last_id;
        });

    };
    $scope.closePopUpTask = function(){

        $scope.showPopUpTask = false;
        document.getElementById('addSub_task').value="";

    };
//function to add sub-task
    $scope.addSubtask = function(){
               tasks.saveSubtask($scope.Task)
            .success(function(data){
                tasks.getSubtask()
                    .success(function(getData){
                        $scope.subtasks = getData.reverse();
                    });});
        document.getElementById('addSub_task').value="";
    };
    // update sub-task
    $scope.updateSubtask = function(id){
        $scope.SubTask = {};
        $scope.SubTask.id = id;
        $scope.SubTask.content = document.getElementById('subtask-'+$scope.SubTask.id).value;
        tasks.updateSubtask($scope.SubTask).success(function(data){
            tasks.getSubtask()
                .success(function(getData){
                    $scope.subtasks = getData.reverse();
                });});
    };
    $scope.deleteSubtask = function(id){
        tasks.deleteSubtask(id).success(function(data){
           tasks.getSubtask().success(function(getData){
                $scope.subtasks = getData;
            })});
    };
//
    //
    //
    /// Folder Dialog box --->
$scope.openPopUpFolder = function(){

    $scope.showPopUpFolder = true;
};
    $scope.uploader = new FileUploader({

       });

   $scope.chooseFolder = function(folderName,folderId)
   {
       $scope.folderName = folderName;
       $scope.folder_id = folderId;
       $scope.showPopUpFolder = false;

   };


// FILTERS
   $scope.uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });
   $scope.uploader.onAfterAddingFile = function (item, response, status, headers)
    {

      $scope.Attachment.name = item.file.name;
      $scope.Attachment.weight = (item.file.size/1024);
      $scope.Attachment.task_id =  $scope.Task.task_id;
      $scope.Attachment.path = "../public/files/"+$scope.Task.task_id+"/"+last_id+item.file.name;
      tasks.saveAttachmentsPath($scope.Attachment);


    };

    $scope.downloadAttachment = function(id)
    {
      tasks.downloads(id).success(function(getData){
          file = getData;
          var element = angular.element('<a></a>');
             element.attr({
              target: '_self',
              download: file,
              headers: 'undefined'
          })[0].click();

      });;


    };

    $scope.deleteAttachment = function(id)
    {
        tasks.deleteAttachment(id).success(function(data){
            tasks.getAttachments(task_id).success(function(getData){
                $scope.attachments = getData;
            })});
    };
$scope.uploader.onCompleteItem = function(item, response, status, headers)
    {
        //get new attachments list and changes save path for next attachment
        tasks.getAttachments($scope.Task.task_id).success(function(data) {
            $scope.attachments = data;
            if($scope.attachments[0]!=null)
            {
                last_id =  $scope.attachments[$scope.attachments.length-1]['id']+1;
            }
            else
            {
                last_id = 1;
            }

            $scope.uploader.url = 'index.php/uploadFile/'+task_id+'/'+last_id;
        });
        $scope.uploader.queue.splice(0,1);

    }
// tracking upload process
    $scope.uploader.onProgressItem = function(item, response, status, headers)
    {
        document.getElementById(item.file.name).style.width = item.progress+'%';
    }

});


// Routes configuration for controllers
app.config(function($routeProvider)
{$routeProvider
    .when('/', {
    templateUrl: '../app/views/templates/time.php' })
    .when('/folder', {controller: 'folderController',
        templateUrl: '../app/views/templates/folder.php' })
   .otherwise ({redirect: 'home'})

});
// directive for adding new tasks
app.directive('popUpMsg', function(){
        return {
        restrict: 'E',
        scope: false,
        template: '<div id="popUpMsg-bg" ng-show="showPopUpMsg"><div id="popUpMsg"><div class="content"><div class="lightbox"><div class="task">' +
            '<div class="box">' +
            '<form  ng-submit="addTask(time_id,folder_id)" >' +
            '<input id="taskInput" type="text" ng-model="Task.content" placeholder="I want to..." class="addTask"/>' +
            '</form>' +
            ' </div><div class="taskDetails"><span class="folderSelector" ng-click="openPopUpFolder()">{{folderName}}</span> <span class="timeSelector" ng-click="openPopUpCalendar()">{{selectedDate}}</span></div></div><div class="close" ng-click="closePopUp()">X</div></div></div></div></div>'

        }
});
// task properties window
app.directive('popUpTask', function(){
    return {
        restrict: 'E',
        scope: false,
        template: '<div id="popUpTask-bg" ng-show="showPopUpTask"><div id="popUpTask"><div class="content"><div class="lightbox"><div class="task">' +
            '<div class="box">' +
            '<textarea  class="viewTask">{{content}}</textarea>' +
            '</div><div class="extras"><div class="tabs"> <header><span  class="tab-header"><span onclick="toSubTasks()" class="tab-label">Sub-tasks</span></span><span  class="tab-header">' +
            '<span onclick="toAttachments()" class="tab-label">Attachments</span></span><span  class="tab-header">' +
            '<span onclick="toShare()" class="tab-label">Share & Assignments</span></span></header><section><div id="extra-task" class="sub-tasks">' +
//attachments window:
            '<div id="innerAttachment" class="inner"><div class="upload-main"><div nv-file-drop="" uploader="uploader" nv-file-over=""  class="dropbox" ">Drop files here</div>' +
            '<div class="scroll-wrap"> <ul class="t-file" ><li ng-repeat="item in uploader.queue" class="i-file"><div  class="container" > <div class="thumb"></div> ' +
            '<div class="file-content">{{item.file.name}}</div>' +
            '<div class="file-details"> <div class="progress-bar" ><div id="{{item.file.name}}" class="progress-bar-complete" ></div></div> </div>' +
            ' <div class="file-controls"> <a class="click-able-progress" ng-click="item.file.Cancel()" ><img class="file-control" src="../public/images/deleteFile.jpg"></a></div> </div> </li> ' +
            '<li ng-repeat="attachment in attachments |orderBy: created_at:true" class="i-file"><div class="container" > <div class="thumb"></div> ' +
            '<div class="file-content">{{attachment.name}}</div>' +
            '<div class="file-details"><span class="file-size">{{attachment.weight}} KB</span> <span class="sap">|</span> <span class="file-time">{{attachment.created_at}}</span> </div>' +
            ' <div class="file-controls"> <a class="click-able"  target="_self" href="{{attachment.path}}" download="{{attachment.name}}" ><img class="file-control"  src="../public/images/download.jpg" ></a> <a class="click-able" ng-click="deleteAttachment(attachment.id)" ><img class="file-control" src="../public/images/deleteFile.jpg"></a></div> </div> </li> </ul></div> ' +
            '</div><div class="buttons"><div class="file-input">SELECT FROM YOUR COMPUTER<input class="fileBrowse" type="file" nv-file-select="" uploader="uploader" /></div></div></div>' +
// sharing window:
             '<div id="innerShare" class="inner"> <header class="ShareHeader"></header><section class="ShareSection">' +
            '<div class="ShareInvite"> <input type="text" ng-model="mail.to" placeholder="Type a friend e-mail" class="Email"/><div class="InviteeControls"></div></div>' +
            '<textarea  class="emailBody" ng-model="mail.body" placeholder="Add a message to all invitees(optional)" ></textarea><footer class="EmailFooter"><span class="sendInvites"><span ng-click="sendMail()" class="sendButtonText">SEND INVITATIONS</span></span></footer></section> </div>'+
// sub-tasks window:
            ' <div id="innerSubTask" class="inner">'+'<div class="new-subtask"><form ng-submit="addSubtask()" class="input-subtask"><input id="addSub_task" class="subtask" ng-model="Task.sub_content" placeholder="+ Add a sub task" type="text" /></form>' +
            ' </div><div class="scroll-wrap"> <ul class="sub-tasks-list"> ' +
            '<li ng-repeat="subtask in subtasks | filter:{task_id : Task.task_id}"  class="task-item">' +
            '<div class="container">' +


            '<form class="task-view" ng-submit="updateSubtask(subtask.id)"> <input class="task-view" id="subtask-{{subtask.id}}"  type="text" value="{{subtask.content}}" /> </form>' +
            '<div class="controls"><a ng-click="deleteSubtask(subtask.id)" class="deleteButton" ><img src="../public/images/deleteButton.jpg"/></a> </div></div> <' +
            '/li></ul></div> </div>' +
            '</div></div>' +
            ' </section></div>'+
            '</div><div class="close" ng-click="closePopUpTask()">X</div></div></div></div>'

    }
});
//calendar window:
app.directive('popUpCal', function(){
    return {
        restrict: 'E',
        scope: false,
        template: '<div id="popUpCal-bg" ng-show="showPopUpCalendar"><div id="popUpCal">' +
            '<div class="content"><div class="lightbox"><div class="main-calendar"><div class="calendar-content"><div id="calendar" class="calendar-css"></div></div><div class="calendar-control"> <div ng-click="closeCal()" class="calendar-cancel">CANCEL</div><div class="calendar-ok" ng-click="saveDate()">OK</div></div></div>' +
            '</div></div></div></div>'

    }
});
// create new folder window:
app.directive('popUpFolder', function(){
    return {
        restrict: 'E',
        scope: false,
        template: '<div id="popUpFolder-bg" ng-show="showPopUpFolder"><div id="popUpFolder"><div class="content"><div class="lightbox">' +
            '<div class="folderDialog"><div class="folderWrapper"><ul class="folderList"><li  class="folderItem" id="'+'{{folder.id}}'+'{{folder.name}}'+'"  ' +
            ' ng-repeat="folder in folders" ng-click="chooseFolder(folder.name,folder.id)"><p ng-if="folder_id==folder.id" class="selectedFolder">{{folder.name}}</p><p ng-if="folder_id!=folder.id" >{{folder.name}}</p></li></ul></div></div>' +
           '</div></div></div></div>'

    }
});
