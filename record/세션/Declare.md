# Declare 키워드
declare let / const / function / class    
해당 키워드는 컴파일러에게 해당 변수, 상수, 함수, 클래스가 **어딘가에 생성**되어 있다는 것을 알리는 역할을 한다.

## 특징
1. Javascript 코드로 컴파일되지 않고, **Typescript 코드로 컴파일**된다.
2. Type / Interface는 Javascript 코드로 컴파일 되지 않으므로 `ts` 파일 내에 선언하는 것이 불필요하다.   
![image](https://user-images.githubusercontent.com/48716298/170878139-7e51ac49-0075-4ebe-aba4-ac3f5793dee3.png)

## `*.d.ts` 란?
구현이 아니라 **선언부만 작성**하는 파일.   
`d.ts`파일을 소스 파일보다 상위에 해줄 경우 import 없이 사용가능하다.   

### skipLibCheck 설정
`tsconfig.json`의 `skipLibCheck` 프로퍼티는 `d.ts` 파일의 타입 검사를 하는지 정하는 설정이다.   
외부 라이브러리의 모듈을 참조할 경우 .d.ts 파일에 타입 정의가 잘못돼 있어서 오류가 나는 경우가 가끔씩 있다.   
이럴 경우 skipLibCheck를 **true**로 지정하면 tsc에게 `.d.ts` 파일의 타입 검사를 생략시킬 수 있다.   

### 사용 이유
1. 타입이 너무 길어서 따로 정의하여 보관해야 할 때 사용한다.
2. 타입 레퍼런스 생성하고 싶을 때 사용한다.
   - [lodash 코드 저장소](https://github.com/lodash/lodash)에서 Javascript 코드가 100% 인데 타입 검사가 되는 이유는 [lodash의 타입 저장소](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash)가 따로 있기 때문이다. 
     - npm의 [@types/lodash](https://www.npmjs.com/package/@types/lodash)에서도 확인 가능하다!

## declare namespace
블록 스코프를 생성해주는 것. 전역적으로 생성되는 객체이다.    
`window.CoffeeLib` / `globalThis.CoffeeLib`로 객체를 검색할 수 있다.
```typescript
declare namespace CoffeeLib {
  function makeCoffee(coffee: string): string;
  let indexOfCoffee: number;
}
// const a = CoffeeLib.indexOfCoffee
```

## declare module
export 생략 가능.
```typescript
declare module 'oop-cafe' {
  type CoffeeNames = 'a'
}
// import { CoffeeNames } from 'oop-cafe';
// const coffee: CoffeeName = 'a'
```

## declare class
```typescript
declare class Order {
  constructor(order: unknown);
  orderList: unknown[];
  showOrder(): void;
}
```

## declare function
```typescript
declare function getCoffeeIngredients(n: number): number;
//const x = getCoffeeIngredients(43);
```