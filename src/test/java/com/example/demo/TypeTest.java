package com.example.demo;

import org.apache.poi.ss.formula.functions.T;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class TypeTest {
    class Fruit{}
    class Apple extends Fruit {}
    class Jonathan extends Apple {}
    class Orange extends Fruit {}
    @Test
    public void test1(){

    }



}
