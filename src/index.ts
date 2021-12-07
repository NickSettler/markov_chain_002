import { bible } from "./bible";

const string = bible;

type MarkovChainToken = {
  string: string;
  counts: number;
};

string.split(" ").map((str: string) => {
  if (str.startsWith("Revelation")) console.log("a");
});
