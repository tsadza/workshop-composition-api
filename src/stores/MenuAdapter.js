const filterCoffee = (items) => items.value.filter((item) => item.type === 'drink')

const filterCakes = (items) => items.value.filter((item) => item.type === 'cake')

export { filterCoffee, filterCakes }