import ProductInfo from './ProductInfo';
import Review from './Review';

export const product = {
  name: 'Rajkonna 100% Natural & Organic Red Sandalwood Powder',
  howToUse: 'Hundreds of funnel absorb liquid faster and give instant dry feel. Its pleasant fragrance fights to lock odour in 240mm pad. Six wall protection prevents leakage. Converts liquid into gel and locks it inside. This pad is skin friendly and individual pouch make easy to carry and disposal for users.',
  description: 'This is a sample product description.',
  price: 19.99,
  weight:"25gm",
  originalPrice: 24.99,
  discountedPrice: true,
  totalReview:30,
  rating:4.7,
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni3f81WLvtDNfR2e-g5c-VO0N6eNhrkhhhA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGAQOkOZoruQ3cp6vd_TovSoUU1lDcjknzA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLUWwfFB03LeYqsHb1LuLyNFVUv2ITtKALA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfytaqxH5mkhrft-GJce4laWg9etr938wGYg&s',
  ],
};

const ProductMain = () => {
  return <div>
    <ProductInfo product={product} />
    <Review></Review>
  </div>
};

export default ProductMain;