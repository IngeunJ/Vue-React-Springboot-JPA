package com.project.web.common.lambda;

import java.util.function.Consumer;

@FunctionalInterface 
public interface IConsumer {
    public abstract void accept(Object o);
}


//@FunctionalInterface ,public abstract void accept(Object o); 쓰면 
//자바 8를 쓰고 있는거고 함수형프로그래밍을 하고 있는것이다.