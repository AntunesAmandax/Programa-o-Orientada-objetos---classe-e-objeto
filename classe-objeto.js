<<<<<<< HEAD
import promptsync from 'prompt-sync';
import { validate } from 'bycontract';
const prompt = promptsync({sigint:true});

class retangulo{
    #lado1h;
    #lado2b;
    #lado3h;
    #lado4b;

    constructor(){
        validate(arguments, ["number", "number", "number", "number"]);
        this.#lado1h = 50;
        this.#lado2b = 80;
        this.#lado3h = 50;
        this.#lado4b = 80;

    }


    calculaPerimetro(){
        return (this.#lado1h + this.#lado2b + this.#lado3h + this.#lado4b);
    }

    calculaArea(){
        return (this.#lado4b * this.#lado3h)
    }

    setlados(lado1h, lado2b, lado3h, lado4b){
        validate(arguments, ["number", "number", "number", "number"]);
        this.#lado1h = lado1h;
        this.#lado2b = lado2b;
        this.#lado3h = lado3h;
        this.#lado4b = lado4b;
    }

    getlados(){
        return{
            lado1h: this.#lado1h,
            lado2b: this.#lado2b,
            lado3h: this.#lado3h,
            lado4b: this.#lado4b
        };
    }
}

let retangulonovo = new retangulo(0,0,0,0);
//retangulonovo.setlados(50,80,50,80);

console.log(`O perímetro do retângulo é ${retangulonovo.calculaPerimetro()}.`)
=======
import promptsync from 'prompt-sync';
//import { validate } from 'bycontract';
const prompt = promptsync({sigint:true});

class retangulo{
    lado1h;
    lado2b;
    lado3h;
    lado4b;

    calculaPerimetro(){
        return (this.lado1h + this.lado2b + this.lado3h + this.lado4b);
    }

    calculaArea(){
        return (this.lado4b * this.lado3h)
    }
}

let retangulonovo = new retangulo();
retangulonovo.lado1h = 50;
retangulonovo.lado2b = 80;
retangulonovo.lado3h = 50;
retangulonovo.lado4b = 80;

console.log(`O perímetro do retângulo é ${retangulonovo.calculaPerimetro()}.`)
>>>>>>> 85a9ed255c00e1eb3eb6098358475be8daeddecb
console.log(`A área do retângulo é ${retangulonovo.calculaArea()}.`)