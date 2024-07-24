import ProductItem from "./ProductItem"

function ProductList({productList}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {productList.map( (product) => <ProductItem key={product.id} product={product} /> )}
    </div>
  )
}

export default ProductList