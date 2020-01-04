package com.hobookgames.hobookgames;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;


@SpringBootApplication
public class HobookgamesApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(HobookgamesApplication.class, args);
    }
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(HobookgamesApplication.class);
    }
}
