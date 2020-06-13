console.log("************** DELIVERABLE 05 *********************");

// 5. SLOT MACHINE

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando
// clases donde cada vez que juguemos insertemos una moneda. Cada máquina
// tragaperras(instancia) tendrá un contador de monedas que automáticamente
// se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar
// de forma automática y debe generar tres booleanos aleatorios que
// representarán el estado de las 3 ruletas. El usuario habrá ganado
// en caso de que los tres booleanos sean true, y por tanto deberá
// mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!"

// y reiniciar las monedas almacenadas, ya que las hemos conseguido
//y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

class SlothMachine {
  protected counterCoins: number = 0;
  protected roulettesResult: boolean[] = [];

  constructor() {
    this.counterCoins = 0;
    this.roulettesResult = [];
  }

  get chuck() {
    let roulettesNum: number = 3;
    for (let index: number = 0; index < roulettesNum; index++) {
      this.roulettesResult[index] = !!Math.round(Math.random());
    }
    return this.roulettesResult;
  }

  play() {
    this.counterCoins++;
    this.chuck;
    let result: string = "";
    if (this.roulettesResult.every((item: boolean): boolean => item === true)) {
      result = `Congratulations!!!. You won ${this.counterCoins} coin${
        this.counterCoins > 1 ? "s" : ""
      }!!`;
      this.counterCoins = 0;
    } else {
      result = `Good luck next time!!`;
    }
    return result;
  }
}

const machine1 = new SlothMachine();

console.log(`## Exercise 05 - SLOT MACHINE ##
1st play: ${machine1.play()}
2nd play: ${machine1.play()}
3rd play: ${machine1.play()}
4th play: ${machine1.play()}
5th play: ${machine1.play()}`);
