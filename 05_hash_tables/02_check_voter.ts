import { HashTable } from "./01_price_of_groceries"

const voted: HashTable<boolean> = {}

function checkVoter(name: string) {
  if (voted[name]) {
    console.log("kick them out!")
  } else {
    console.log("let them vote!")
    voted[name] = true
  }
}

checkVoter("tom") // let them vote!
checkVoter("mike") // let them vote!
checkVoter("mike") // kick them out!
