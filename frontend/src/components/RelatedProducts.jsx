import React, { useContext, useEffect, useState, useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './molecule/Title';
import ProductItem from './molecule/ProductItem';

const RelatedProducts = ({ category = '', subcategory = '' }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  // Use useMemo to optimize the filtering process
  const filteredProducts = useMemo(() => {
    if (products.length === 0) return [];

    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    // Further filter by subcategory if it exists
    if (subcategory) {
      filtered = filtered.filter(item => item.subcategory === subcategory);
    }

    return filtered.slice(0, 2); // Limit to 2 products
  }, [products, category, subcategory]);

  // Update the related state when the filtered products change
  useEffect(() => {
    setRelated(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED " text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
