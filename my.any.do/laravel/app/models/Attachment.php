<?php
class Attachment extends Eloquent
{
    protected $fillable = array('id','name','weight','path','task_id');
}