import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import Rating from '@mui/material/Rating';
import RelatedProducts from '../../components/organism/RelatedProducts';

const Product = () => {
  const { productID } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productID);
    if (product) {
      setProductData(product);
      setSelectedImage(Array.isArray(product.image) ? product.image[0] : product.image);
    }
  }, [productID, products]);

  if (!products.length) {
    return <div className="mt-40 text-center">Loading products...</div>;
  }

  if (!productData) {
    return <div className="mt-40 text-center">Product not found.</div>;
  }

  return (
    <div className="mt-40 px-6">
      {/* Product Details Section */}
      <div className="flex flex-col sm:flex-row gap-12 items-start justify-center">
        
        {/* Product Images Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:w-1/2 items-center justify-center">
          
          {/* Image Thumbnails */}
          <div className="flex sm:flex-col sm:w-16 w-full overflow-x-auto sm:overflow-y-scroll gap-3">
            {Array.isArray(productData.image) ? (
              productData.image.map((item, index) => (
                <img
                  src={item}
                  alt={`Product ${index}`}
                  key={index}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover border border-gray-300 hover:border-gray-500 cursor-pointer mx-2 sm:mx-0 sm:mb-3"
                  onClick={() => setSelectedImage(item)}
                />
              ))
            ) : (
              <img
                src={productData.image}
                alt="Product"
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover border border-gray-300 hover:border-gray-500 cursor-pointer mx-2 sm:mx-0 sm:mb-3"
              />
            )}
          </div>

          {/* Main Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-64 h-64 sm:w-52 sm:h-52 object-cover border border-gray-400"
            />
          </div>

        </div>

        {/* Product Info */}
        <div className="flex-1 sm:w-1/2">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`py-2 border px-4 bg-gray-400 ${item === selectedSize ? 'border-orange-500' : ''}`}
                  onClick={() => setSelectedSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id, selectedSize)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 3 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description and Features Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>At CozyLoops, we bring you the finest selection of high-quality yarns, perfect for knitting, crocheting, and all your crafting needs. Whether you're a seasoned artisan or just starting your fiber journey, our collection offers a wide range of colors, textures, and materials to bring your creativity to life!</p>
          
          <b>Why Choose Us?</b>
          <div className="flex">
            <b>✅ Premium Quality Yarns – </b><p>Wool, cotton, alpaca, silk blends & more!</p>
          </div>
          <div className="flex">
            <b>✅ Vibrant Color Collections –</b><p>From soft pastels to bold, rich hues.</p>
          </div>
          <div className="flex">
            <b>✅ Eco-Friendly & Sustainable –</b><p>Ethically sourced fibers for mindful crafting.</p>
          </div>
          <div className="flex">
            <b>✅ Fast & Reliable Shipping –</b><p>Get your yarn delivered right to your doorstep.</p>
          </div>
          <div className="flex">
            <b>✅ Inspiration & Support –</b><p>Join our community of passionate crafters!</p>
          </div>
          <b>🧵 Explore our collection today & start your next masterpiece! 🧵</b>
          <b>💖 CozyLoops – Where Every Stitch Tells a Story.</b>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory} />
    </div>
  );
};

export default Product;
