function changeIconsTime ()
{
    document.getElementById('time_icon').src="../public/images/clock.jpg";
    document.getElementById('folder_icon').src="../public/images/folder_not_view.jpg";


}

function changeIconsFolder ()
{
    document.getElementById('time_icon').src="../public/images/clock_not.jpg";
    document.getElementById('folder_icon').src="../public/images/folder_view.jpg";


}

function focusMode()
{
document.getElementById('focus_icon').src="../public/images/focus.jpg";
    document.getElementById('planning_icon').src="../public/images/planning_off.jpg";
   var elements =  document.getElementsByClassName('name-line');
    for(var i=0;i< elements.length;i++)
    {
        elements[i].style.display = 'block';
    }
}
function planningMode()
{
    document.getElementById('focus_icon').src="../public/images/focus_off.jpg";
    document.getElementById('planning_icon').src="../public/images/planning.jpg";
    var elements =  document.getElementsByClassName('name-line');
    for(var i=0;i< elements.length;i++)
    {
        elements[i].style.display = 'inline-block';
    }
}

function toSubTasks()
{
    document.getElementById('innerSubTask').style.display = 'block';
    document.getElementById('innerAttachment').style.display = 'none';
    document.getElementById('innerShare').style.display = 'none';
}
function toAttachments()
{
    document.getElementById('innerSubTask').style.display = 'none';
    document.getElementById('innerAttachment').style.display = 'block';
    document.getElementById('innerShare').style.display = 'none';
}

function toShare()
{
    document.getElementById('innerSubTask').style.display = 'none';
    document.getElementById('innerAttachment').style.display = 'none';
    document.getElementById('innerShare').style.display = 'flex';
}

function dragTask(event)
{
    draggedTaskId = $(event.currentTarget).attr("data-id");

}