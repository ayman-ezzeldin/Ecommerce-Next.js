
export const ProductInfo = ({product}) => {
  console.log(product);
  return (
    <div>
      <h2>Title : {product?.attributes?.title} </h2>
    </div>
  )
}
