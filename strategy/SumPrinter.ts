import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number) {
    console.log(`1부터 ${N}까지 합: ${strategy.get(N)}`);
  }
}
