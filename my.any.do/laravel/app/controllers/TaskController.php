<?php
class TaskController extends BaseController {

    public function Index()
    {
        return Response::json(Task::get());
    }
    public function Save()
    {
     Task::create(array('content' => Input::get('content'),
            'folder_id' =>Input::get('folder_id'),
            'time_id' => Input::get('time_id'),
            'day' => Input::get('day'),
            'check' => "unchecked"
        ));

        return Response::json(array('success'=>true));
    }
    public function checkTask($id)
    {
       $task =  Task::find($id);
        $task->check =  "checked";

         $task->save();


    }
    public function Destroy($id)
    {
        Task::destroy($id);
        return Response::json(array('success'=>true));
    }

    public function updateTask($id)
    {
        Task::where('id','=',$id)->update(array('content'=>Input::get('content')));
        return Response::json(array('success'=>true));
    }

    public function updateTaskByFolder($id)
    {
        Task::where('id','=',$id)->update(array('folder_id'=>Input::get('folder_id')));
        return Response::json(array('success'=>true));
    }
    public function updateTaskByTime($id)
    {
        Task::where('id','=',$id)->update(array('time_id'=>Input::get('time_id')));
        return Response::json(array('success'=>true));
    }
    public function SaveSubTask()
    {
       Subtask::create(array('task_id' => Input::get('task_id'),
            'content' =>Input::get('sub_content'),

        ));
        return Response::json(array('success'=>true));
    }

    public function subtasksIndex()
    {
        return Response::json(Subtask::get());
    }
    public function updateSubTask($id)
    {
        Subtask::where('id','=',$id)->update(array('content'=>Input::get('content')));
        return Response::json(array('success'=>true));
    }

    public function DeleteSubTask($id)
    {
        Subtask::destroy($id);
        return Response::json(array('success'=>true));
    }
    public function Upload($id,$last_id)
    {
              if (Input::hasFile('file'))
        {
if(!is_dir('../public/files/'.$id))
{
    mkdir('../public/files/'.$id,0777);
}
          $file_name =  $last_id.Input::file('file')->getClientOriginalName();

            Input::file('file')->move('../public/files/'.$id.'/',$file_name);
            return Response::json(array('success'=>true));

        }
        else
        {
            return Response::json(array('success'=>false));
        }
    }

    public function SaveAttachment()
    {



       Attachment::create(array('task_id' => Input::get('task_id'),
            'path' =>Input::get('path'),
            'name' => Input::get('name'),
            'weight'=>Input::get('weight')
        ));


      }

    public function getLastId()
    {
    $last_id =  Attachment::orderBy('created_at', 'desc')->first()['id'];

    return View::make( 'home',array('last_id' => 5 ));
    }

    public function getAttachments($id)
    {

       return Response::json(Attachment::where('task_id','=',$id)->get());

    }

    public function downloadAttachments($id)
    {
      $file = Attachment::find($id);
        return Response::download($file['path'],$file['name'],array('Content-Type'=>'undefined'));

    }

    public function deleteAttachment ($id)
    {
       $file = Attachment::find($id);
        Attachment::destroy($id);
        unlink($file['path']);

        return Response::json(array('success'=>true));
    }

    public function sendEmail()
    {
      $to =  Input::get('to');
        $title = Input::get('title');
        $body = Input::get('body');
        mail($to,$title,$body);

        return Response::json(array('success'=>true));
    }
}
