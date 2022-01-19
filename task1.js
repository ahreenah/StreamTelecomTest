function parent() {
    this.multiplier = 3;
    return [33, 77, 99, 81, 55].map((I) => { return I * this.multiplier});
}

console.log(parent())