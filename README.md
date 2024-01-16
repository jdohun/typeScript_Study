1. Typescript 공부

- javascript ->  typescript (Javascript의 슈퍼셋 언어)
- 자료형이 생긴다 -> 강제성이 없음(툴에서 검사해주는거 말곤 강제성이 없다)

## 공부한 내용

### 24.01.15 ~ 24.01.16

- [Typescript Project 생성 및 tsc 초기 세팅](https://yamoo9.gitbook.io/typescript/cli-env)

- 변수
    - 변수 타입 확인(string, number, boolean, array, tuple)
        - tuple 의 경우 기본적으로 null 을 허용하지 않으며 선언 시 `type | null` 을 통해 null 을 허용 할 수 있다.
        - var 사용 안하고 let 과 const 를 사용함
        - 값 대입시에 `!`를 통해 `non-null-assertion`(널이 아님을 단언)이 가능하다.
    - 서로 다른 파일이더라도 중복된 변수명을 허용하지 않음

- 재사용
    - export 를 이용하여 외부 파일에서 해당 변수 또는 함수를 재사용 가능
    - import {변수명, 함수명} from 파일; 을 통해 외부 파일의 변수 또는 함수 재사용 가능
        - export 를 하지 않을 시 java 의 private 과 동일하게 import 를 하여도 사용 불가능

- class 정의 및 상속
    - 메서드를 선언 하는 방식이 기본적으로 생각의 흐름과 유사한 것 같음
        - 이름이 뭐고, 무엇을 받아서, 어떤 타입으로 반환한다.
    - 접근제한자 지정이 가능하다.
        - default 가 public 이다.

- interface 정의 및 상속 및 구현
    - 속성(멤버)의 타입을 정의(추상화, 초기화x)한다.
    - 기능을 추상화 할 수 있다.
    - 생성자를 사용하지 않고 `{매개변수명: 값}`를 통해 객체를 생성 할 수 있다.
        - 대신 속성과 기능을 동시에 추상화 할 경우 class 를 통한 구현이 필수이다.
    - 인터페이스 자체를 배열로 활용 가능하다.
        - 외의 인터페이스의 확장과 상속은 java 와 동일함

- type
    - 인터페이스와 유사하나 확장이 불가능하다.
    - 사용 비추

- operator(연산자)
    - Union Type(유니언 타입)
        - 한 개 이상의 타입을 선언할 때 `|` 키워드를 사용할 수 있다.
    - Intersection Type(교차 타입)
        - 합집합과 동일한 개념
        - 명시한 type 의 속성을 모두 제공해야 한다.

- enum
    - 숫자형
    - 문자형
        - enum의 특성상 연속적이고 고정된 값 집합을 나타내기 때문에 가변적인 구조를 가진 array, tuple 은 부적절하다.

- generic
    - 함수와 interface 에 사용 가능하다.