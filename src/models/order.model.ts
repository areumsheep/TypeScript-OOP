//d.ts 불러오기
import { CoffeeDTO } from 'Coffee';

export class OrderModel {
  private coffees: CoffeeDTO[] = [];

  setOrderCoffees(coffees: CoffeeDTO[]) {
    this.coffees = coffees;
  }
  getOrderCoffees() {
    return this.coffees;
  }
}
