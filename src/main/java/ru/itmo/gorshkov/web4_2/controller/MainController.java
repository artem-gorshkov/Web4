package ru.itmo.gorshkov.web4_2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    @RequestMapping("/main")
    public String main() {
        return "forward:/";
    }
}
