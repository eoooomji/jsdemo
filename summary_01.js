식별자(identifier) : 프로그램 구현에 필요한 이름을 정의 - 변수명, 함수명, 클래스명
변수명, 함수명 - 카멜표기법(camel notation)
클래스명 - 파스칼(pascal notation)

변수(variable) : 데이터를 저장하기 위한 메모리 공간

let num(식별자) = 3 + 5;

키워드, 예약어(keyword) - 프로그램에서 의미를 부여해서 정의해놓은 단어
let(변수-중복사용불가능), var(변수-중복사용가능), const(상수-하나의 값을 고정)

연산자(operator) : 연산을 하기 위해서 사용되는 기호(산술, 비교, 논리, 조건, 대입)
피연산자(operand) : 연산에 사용되는 데이터

자료형(datatype) : 데이터의 종류
    (1) primitive type(원시데이터)
        숫자(number) 
        문자(string)
        논리(boolean)
        undefined(자바스크립트 엔진에서 체크한 데이터)
        null(직접 값을 준 데이터)
    (2) reference type
        배열 : [x, y] - 직관적으로 구분이 안된다.
        객체 : {x:n, y:n-1} - 직관적으로 구분이 가능하다.
        function(함수)
    (3) typeof : 어떤 데이터값인지 알아볼 때 사용
        instanceof : 객체가 정확히 어떠한 타입인지 알아볼 때 사용

호이스팅(hoisting) : 변수선언을 취상위로 끌어올리는 작업

code runner : 스크립트 간편한게 보는 프로그램
Node.js설치
