class Rate {
  constructor(rate, validRate) {
    this.rate = rate
    this.validRate = validRate
  }

  isValid() {
    return this.rate === this.validRate
  }

  isFast() {
    return this.rate < this.validRate
  }

  isSlow() {
    return this.rate > this.validRate
  }
}

export default Rate
