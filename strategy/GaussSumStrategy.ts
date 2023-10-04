import SumStrategy from "./SumStrategy";

export default class GaussSumStrategy implements SumStrategy {
  constructor() {
    console.log("Gauss Mode");
  }

  get(N: number): number {
    return (N * (N + 1)) / 2;
  }
}
