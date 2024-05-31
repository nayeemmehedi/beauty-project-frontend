import ProductInfo from './ProductInfo';
import Review from './Review';



const ProductMain = ({product}) => {
  return <div>
    <ProductInfo product={product} />
    <Review product={product}></Review>
  </div>
};

export default ProductMain;