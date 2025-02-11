import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../../components/molecule/Title';

const Orders = () => {
  const { currency, products } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 mt-40 px-6 sm:px-12 lg:px-20">
      
      {/* Orders Title */}
      <div className="mb-8 text-2xl">
        <Title text1="MY " text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Product Details */}
            <div className="flex items-start gap-6">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                  <p className="text-lg font-medium">{currency}{item.price}</p>
                  <span className="border-l border-gray-400 h-5"></span>
                  <p>Quantity: <span className="font-medium">1</span></p>
                  <span className="border-l border-gray-400 h-5"></span>
                  <p>Size: <span className="font-medium">2</span></p>
                </div>
                <p className="mt-2 text-sm text-gray-500">Date: <span className="font-medium">11, Feb 2025</span></p>
              </div>
            </div>

            {/* Order Status & Track Button */}
            <div className="flex items-center justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base text-green-600 font-medium">Ready to ship</p>
              </div>
              <button className="border px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Orders;
