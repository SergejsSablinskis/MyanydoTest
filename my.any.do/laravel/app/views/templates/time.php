<section class="name-line" ng-repeat="time in times">
    <div  class="column-header"  >
        <div class="category-name">{{time.date}}</div>
        <div class="add-inline" > <a class="add" ng-click="openPopUp(time.id,1,time.date,'folder')" href="">+</a></div>
    </div>
   <div x-lvl-drop-target="true" x-on-drop="droppedIntoTime(time.id)" class="item-list"> <div class="pre-task"  ng-repeat="task in tasks | filter:{content: search} | orderBy: '-check'" ng-if="task.time_id == time.id">
           <div ondragstart="dragTask(event)" x-lvl-draggable="true" data-id="{{task.id}}" class="tasks-{{task.check}}"   >
            <p ng-click="openPopUpTask(task.id,task.content)" class="task-title">{{task.content}}</p>


            <div class=" delete-task">
                <a href="" ng-click="checkTask(task.id)" class="checkButton"> <img  src="../public/images/checkButton.png"> </a>
                <a href="" ng-click="deleteTask(task.id)" class="deleteButton"><img src="../public/images/deleteButton.jpg"></a></div></div></div></div>

</section>