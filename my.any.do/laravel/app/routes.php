<?php


Route::get('/', function () { return View::make('home'); });


Route::get('times','TimeController@Index');
Route::get('tasks','TaskController@Index');
Route::get('subtasks','TaskController@subtasksIndex');
Route::get('folders','FolderController@Index');
Route::resource('folders/post','FolderController@Save');
Route::resource('folders/delete','FolderController@Destroy');
Route::resource('tasks/post','TaskController@Save');
Route::resource('tasks/delete','TaskController@Destroy');
Route::resource('sub-tasks/post','TaskController@SaveSubTask');
Route::resource('sub-tasks/update','TaskController@UpdateSubTask');
Route::resource('sub-tasks/delete','TaskController@DeleteSubTask');
Route::post('uploadFile/{id}/{last_id}', 'TaskController@Upload');
Route::get('attachments/{id}', 'TaskController@getAttachments');
Route::get('download/{id}', 'TaskController@downloadAttachments');
Route::resource('saveAtt','TaskController@SaveAttachment');
Route::get('last_id', 'TaskController@getLastId');
Route::delete('attachment-delete/{id}','TaskController@deleteAttachment');
Route::post('sendEmail', 'TaskController@sendEmail');
Route::post('tasks/check/{id}','TaskController@checkTask');

App::missing(function($exception)
{
    return View::make('home');
});
