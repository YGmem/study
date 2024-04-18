interface Deer {
  deerId: number
}

interface Horse {
  horseId: number
}

let deer: Deer = { deerId: 1 }
// 这样会报错，没法直接指鹿为马
let horse = deer as Horse   // 报错

let horse2 = deer as unknown as Horse 


interface FoodInterface {
  type: string
}
class FoodClass implements FoodInterface {
  public type: string
}

class A {
  protected name: string
}


interface I extends A {}
class B extends A implements I {
  public name: string
}

