<?php
class Task extends Eloquent
{
    protected $fillable = array('id','time_id','folder_id','content','day','check');
}