export function getProductByCategoryId (state, value) {
  return state.products.filter(() => value.category === state.categories[0].category
  )
}
