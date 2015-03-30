<section class="name-line" ng-repeat="folder in folders">
        <div  class="column-header"  >
        <div> <div class="category-name">{{folder.name}} </div><a href="" ng-click="folderDelete(folder.id)" class="deleteFolderButton"> <img src="../public/images/deleteButton.jpg"> </a></div>
        <div class="add-inline" > <a class="add" ng-click="openPopUp(1,folder.id,'today',folder.name)" href="">+</a></div>

        </div>

    <div class="item-list"> <div class="pre-task"  ng-repeat="task in tasks | filter:{content: search} | orderBy: '-check'" ng-if="task.folder_id == folder.id">  <div class="tasks-{{task.check}}" >
            <p ng-click="openPopUpTask(task.id,task.content)" class="task-title">{{task.content}}</p><div class="delete-task">
                    <a href="" ng-click="checkTask(task.id)" class="checkButton"> <img  src="../public/images/checkButton.png"> </a>
                        <a href="" ng-click="deleteTask(task.id)" class="deleteButton"> <img src="../public/images/deleteButton.jpg"> </a></div></div></div></div>
</section>
    <section class="name-line"> <div class="column-header"> <form  ng-submit="addFolder()" >
                <input type="text" ng-model="Folder.name"  class="category"  placeholder="NEW FOLDER"  /> </form></div> </section>
