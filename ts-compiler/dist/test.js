"use strict";
const hello = () => {
    console.log("hello");
};
/*
@target, lib

target
- 빌드의 결과물을 어떤 버전으로 할 것이냐
- 지정을 안하면 es3

lib
- 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
- lib를 지정하지 않을 때
- taget이 es3이고 디폴트로 lib.d.ts를 사용
- taget이 es5이고 디폴트로 dom,es5,scripthost 를 사용
- taget이 es6이고 디폴트로 dom, es6, dom.iterable, scripthost 를 사용
-lib를 지정하면 그 lib 배열로만 라이브러리를 사용
- 빈 [ ] => 'no definition found ~'

*/ 
