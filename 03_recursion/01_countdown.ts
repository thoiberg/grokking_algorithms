function countdown(i: number) {
  console.log(i)

  if (i > 0) {
    countdown(i - 1)
  }
}

countdown(5)
