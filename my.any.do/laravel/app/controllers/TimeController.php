<?php

class TimeController extends BaseController {

    public function Index()
    {
      return Response::json(Time::get());
    }

}
