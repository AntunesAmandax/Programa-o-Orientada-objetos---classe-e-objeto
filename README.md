# Calculadora de Perímetro e Área de um Retângulo

Este projeto em Node.js calcula o perímetro e a área de um retângulo com base nas dimensões fornecidas. O código é implementado utilizando classes e métodos para encapsular a lógica de cálculo.

## Funcionalidades

- **Calcular Perímetro:** Soma dos quatro lados do retângulo.
- **Calcular Área:** Multiplicação da base pela altura.

## Estrutura do Código

O código consiste em uma classe `Retangulo` que possui os seguintes métodos:

- `calculaPerimetro()`: Calcula o perímetro do retângulo somando os lados.
- `calculaArea()`: Calcula a área do retângulo multiplicando a base pela altura.

## Como Usar

### Pré-requisitos

- Node.js instalado.

### Passos

1. Clone o repositório ou baixe o código.

2. Instale as dependências (se houver):

    ```bash
    npm install
    ```

3. Edite o código, se necessário, para definir as dimensões do retângulo:

    ```javascript
    let retangulonovo = new Retangulo();
    retangulonovo.lado1h = 50; // Altura do lado 1
    retangulonovo.lado2b = 80; // Base do lado 2
    retangulonovo.lado3h = 50; // Altura do lado 3
    retangulonovo.lado4b = 80; // Base do lado 4
    ```

4. Execute o código:

    ```bash
    node classe-objeto.js
    ```

5. Veja os resultados:

    O código retornará o perímetro e a área do retângulo diretamente no terminal.

    ```
    O perímetro do retângulo é 260.
    A área do retângulo é 4000.
    ```

## Tecnologias Utilizadas

- Node.js
