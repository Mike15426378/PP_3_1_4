package ru.kata.spring.boot_security.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String surname;

    @Column
    private int age;

    @Column
    private String email;
}
