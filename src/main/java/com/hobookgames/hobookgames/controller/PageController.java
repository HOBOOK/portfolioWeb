package com.hobookgames.hobookgames.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home()
    {
        return "index";
    }

    @RequestMapping(value = "modal/modal_project", method = RequestMethod.GET)
    public String modalProject(){
        return "modal/modal_project";
    }

}
