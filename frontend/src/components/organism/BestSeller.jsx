import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../molecule/Title';
import ProductItem from '../molecule/ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5)); // Limit to top 5 products
        }
    }, [products]);

    return (
        <section className="my-16 px-4 md:px-8 lg:px-12">
            {/* Title Section */}
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 text-3xl">
                <Title text1="BEST " text2="SELLERS" />
                <p className="max-w-2xl mx-auto mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
                    Discover the finest selection of premium yarns.
                </p>
            </div>

            {/* Products Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {bestSeller.map((item, index) => (
                    <div key={index} className="hover:scale-105 transition-transform duration-300 sm:text-xs md:text-xs">
                        <ProductItem 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSeller;
