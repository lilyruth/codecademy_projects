let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
          },
  get appetizers() {
    return this._courses._appetizers;
  },
  get mains() {
    return this._courses._mains;
  },
  get desserts() {
    return this._courses._desserts;
  },
  set appetizers(newApp) {
      this._courses._appetizers = newApp;
  },
   set mains(newMain) {
      this._courses._mains = newMain;
  },
   set desserts(newDess) {
      this._courses._desserts = newDess;
  },
  get courses() {
   return this._courses;
  },
 addDishToCourse(courseName, dishName, dishPrice) {
   let dish = {
     name: dishName,
     price: dishPrice
   };
   if (courseName === "appetizers") {
      let menuArr = this._courses._appetizers;
      menuArr.push(dish);
   } else if (courseName === "mains") {
     let menuArr = this._courses._mains;
     menuArr.push(dish);
   } else if (courseName === "desserts") {
     let menuArr = this._courses._desserts;
     menuArr.push(dish);
   }
  },
 getRandomDishFromCourse(courseName) {
   let dishes = courseName;
   let dishIndex = Math.floor(Math.random() * dishes.length);
   return dishes[dishIndex];
 },
 generateRandomMeal() {
   let randomApp = this.getRandomDishFromCourse(this.appetizers);
   let randomMain = this.getRandomDishFromCourse(this.mains);
   let randomDess = this.getRandomDishFromCourse(this.desserts);
   let price = randomApp.price + randomMain.price + randomDess.price;
   let randomMenu = `The selected menu is ${randomApp.name}, a main course of ${randomMain.name}, and dessert of ${randomDess.name}.`
 
 return `${randomMenu} The cost is ${price} excluding tax and tip.`
 }
}

menu.addDishToCourse("appetizers", "fried onions", 8);
menu.addDishToCourse("appetizers", "potato skins", 10);
menu.addDishToCourse("appetizers", "caesar salad", 7);

menu.addDishToCourse("mains", "fried chicken", 12);
menu.addDishToCourse("mains", "pot stickers", 11);
menu.addDishToCourse("mains", "monte cristo", 14);

menu.addDishToCourse("desserts", "cheesecake", 10);
menu.addDishToCourse("desserts", "chocolate cake", 10);
menu.addDishToCourse("desserts", "Irish coffee", 8);

let meal = menu.generateRandomMeal();

console.log(meal);
