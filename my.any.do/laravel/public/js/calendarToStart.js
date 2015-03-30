
$(document).ready(function() {

     today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;


    $('#calendar').fullCalendar({
        defaultDate: today,
        editable: true,
        selectable: true,
        selectHelper: true,
        defaultFormat:'YYYY, MM, DD',
        select: function(start) {

             start =  (new Date(start)).toISOString().slice(0, 10)
         selectedDate =   start;
            $('#calendar').fullCalendar('unselect');
        }

    });

});

function getNewDate (date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
  date =  yyyy+'-'+mm+'-'+dd;

    return date;
};

function calendarActive()
{

    $('.fc-next-button span').click();

    }