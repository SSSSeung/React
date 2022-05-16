function hi<TY>(arg: TY) : TY {
    return arg;
}

let output = hi(1);
let output2 = hi("hi");

console.log(output);
console.log(output2);

interface Lengthwise {
    length : number;
}

function getLength<T extends Lengthwise>(arg:T): number {
    return arg.length;
}

let r = getLength([]);

function creat<T>(c: {new(): T;}) : T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Bee).keeper.hasMask;