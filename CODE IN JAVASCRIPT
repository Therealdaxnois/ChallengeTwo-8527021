class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let results = [];
    let prefix = '';

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      let suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break;
      }

      results.push(suggestions);
    }

    return results;
  }
}
