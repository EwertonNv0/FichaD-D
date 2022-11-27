export function more(state, set) {
    if (state < 20) set(state + 1)
}
export function less(state, set) {
    if (state > 1) set(state - 1)
}
