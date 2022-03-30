//04. Generics Function

//4-1. typeAlias
type HelloFuncrionGeneric1 =<T>(message: T) => T;

const helloFuncrion1: HelloFuncrionGeneric1 = <T>(message: T):T => {
  return message;
}

//4-2. interface

interface HelloFuncrionGeneric2 {
  <T>(message: T): T;
}

const helloFuncrion2: HelloFuncrionGeneric2 =<T>(message: T):T => {
  return message;
}