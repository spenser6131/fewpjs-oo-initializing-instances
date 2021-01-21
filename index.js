class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.soup = soup;
    this.drink = drink;
    this.salad = salad;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
    this.salad = salad;
  }
}
