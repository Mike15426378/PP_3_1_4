package ru.kata.spring.boot_security.demo.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Data
@Component
@Scope("prototype")
@AllArgsConstructor
public class ExceptionInfo {
    private String info;
}
