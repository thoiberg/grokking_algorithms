interface HashTable<T> {
  [key: string]: T
}

const book: HashTable<number> = {}

book.apple = 0.67
book.milk = 1.47
book.avocado = 1.49

console.log(book)
