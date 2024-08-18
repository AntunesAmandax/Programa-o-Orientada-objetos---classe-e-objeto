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
console.log(`A área do retângulo é ${retangulonovo.calculaArea()}.`)