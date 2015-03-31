<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>My.Any.Do</title>
    <link rel="stylesheet" type="text/css" href="../public/css/fullcalendar.css">
    <link rel="stylesheet" type="text/css" href="../public/css/style.css">


    <script src="../public/js/angular.js"></script>
    <script src="../public/js/jquery.js"></script>
    <script src="../public/js/angular-file-upload.js"></script>
    <script src="../public/js/angular-route.js"></script>

    <script src="../public/js/drag-drop.js"></script>
    <script src="../public/js/lvluuid.js"></script>
    <script src="../public/js/functions.js"></script>
    <script src="../public/js/moment.min.js"></script>
    <script src="../public/js/fullcalendar.js"></script>
    <script src="../public/js/calendarToStart.js" ></script>

    <script src="../public/js/app.js"></script>

</head>

<body ng-controller="mainController">
    <div class="app">

        <div class="main-toolbar">
            <div class="main-toolbar-content">
        <div class="toolbar">

    <a  data-tip="Time view" onclick="changeIconsTime();" ng-href="#/" ><img id="time_icon" class="sort_by_time" src="../public/images/clock.jpg"></a>
    <a  ng-href="#/folder" onclick="changeIconsFolder();"><img class="sort_by_time" id="folder_icon" src="../public/images/folder_not_view.jpg"></a>
<a href="" onclick="focusMode();"><img id="focus_icon" class="sort_by_time" src="../public/images/focus_off.jpg"></a>
 <a href="" onclick="planningMode();"><img id="planning_icon" class="sort_by_time" src="../public/images/planning.jpg"></a>

        </div>
        <div class="right-toolbar"><div class="search_div" ng-mouseover="openSearch()"><input class="search_tasks" id="searchInput" ng-blur="searchOut()" placeholder="search tasks" ng-model="search" type="text"/>
                <img class="search"  src="../public/images/search.jpg"></div></div>
            </div>
        </div>
    <div class="pre-main">

        <div class="scrollable" >
            <div ng-view class="main"> </div>

    </div>
        </div>
    </div>

    <pop-up-msg></pop-up-msg>
    <pop-up-task></pop-up-task>
    <pop-up-cal></pop-up-cal>
    <pop-up-folder></pop-up-folder>


</body>

</html>

