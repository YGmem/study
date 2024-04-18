enum E {
  Foo = "name",
  Bar = "age",
}

function f(x: E) {
  if (x !== E.Foo) {// 当然这么写也ok x!==100
    return 1
  }
}

let a: E.Foo = E.Foo
f(a)

let aa: (number | string)[] = [1, '1']
