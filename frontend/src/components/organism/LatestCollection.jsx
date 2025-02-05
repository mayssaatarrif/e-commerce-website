import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../molecule/Title.jsx';
import ProductItem from '../molecule/ProductItem.jsx';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
            {/* Title Section */}
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-3xl">
                <Title text1={'LATEST '} text2={'COLLECTIONS'} />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    CozyLoops Yarn Store offers a wide range of high-quality yarns, tools, and accessories, 
                    from merino wool to acrylic blends, with expert advice, fast shipping, and a community 
                    for every crafter.
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                    {latestProducts.map((item, index) => (
                        <div 
                            key={index}
                            className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestCollection;