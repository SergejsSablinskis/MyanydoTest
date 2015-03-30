<?php

// Class to operate with 'folders' table
class FolderController extends BaseController
{
    public function Index()
    {
        return Response::json(Folder::get());
    }
    public function Save()
    {
        Folder::create(array('name' => Input::get('name')));
        return Response::json(array('success'=>true));
    }
    public function Destroy($id)
    {
        Folder::destroy($id);
        return Response::json(array('success'=>true));
    }
}