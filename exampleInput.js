const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const sss = new SearchSuggestionSystem(products);
const result = sss.getSuggestions(searchWord);

console.log("Suggestions:");
console.log(result);
