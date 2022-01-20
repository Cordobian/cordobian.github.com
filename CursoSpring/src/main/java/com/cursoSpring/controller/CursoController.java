package com.cursoSpring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CursoController {
    
    @GetMapping("/")
    public String inicio() {
        return "Holaa Mundo";
    }
}
