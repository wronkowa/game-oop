class Wallet {
  constructor(money) {
    let _money = money;
    //pobieranie aktualnej zawartosci portfela
    this.getWalletValue = () => _money;

    // sprawdzanie czy mozna przystapic do gry, czy jest odpowiednia ilosc srodków
    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    }

    //porfel zwieksza sie lub maleje
    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return _money += value;
        } else if (type === "-") {
          return _money -= value;
        } else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error("nieprawidłowa liczba");
      }
    }

  }

}

const wallet = new Wallet(200);
