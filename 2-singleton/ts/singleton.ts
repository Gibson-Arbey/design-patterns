class SingletonTS{
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singleton1 = SingletonTS.getInstance();
console.log(singleton1.random);

const singleton4 = SingletonTS.getInstance();
console.log(singleton4.random);

singleton1.random = 7;
console.log(singleton1.random);
console.log(singleton4.random);

console.log(singleton1 === singleton4);
