export const randBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randAttributes = () => {
    return Math.floor(randBetween(1, 6) + randBetween(1, 6) + randBetween(1, 6))
}