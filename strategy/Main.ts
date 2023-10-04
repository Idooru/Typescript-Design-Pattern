import GaussSumStrategy from "./GaussSumStrategy";
import LoopSumStrategy from "./LoopSumStrategy";
import SumPrinter from "./SumPrinter";

const sumPrinter = new SumPrinter();
sumPrinter.print(new GaussSumStrategy(), 5);
