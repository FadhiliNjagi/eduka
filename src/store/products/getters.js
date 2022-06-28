export function getProductByCategoryId (state) {
  return state.products.filter((value) => value.category === state.categories[0].category
  )
}
