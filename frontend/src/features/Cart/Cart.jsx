import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/molecule/Title";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import CartTotal from "../../components/organism/CartTotal";

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className="mt-40 px-6 sm:px-10">
            {/* Cart Title */}
            <div className="text-center mb-10 text-4xl font-semibold">
                <Title text1="YOUR " text2="CART" />
            </div>

            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
                {cartData.length > 0 ? (
                    <>
                        {cartData.map((item, index) => {
                            const productData = products.find((product) => product._id === item._id);

                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-gray-50 p-5 rounded-lg shadow-sm mb-5 border border-gray-200"
                                >
                                    {/* Product Image & Details */}
                                    <div className="flex items-center gap-6">
                                        <img
                                            src={productData.image}
                                            alt={productData.name}
                                            className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-900">{productData.name}</p>
                                            <div className="flex items-center gap-4 mt-2 text-gray-700">
                                                <p className="text-lg font-medium">{currency}{productData.price}</p>
                                                <p className="px-4 py-1 text-sm bg-gray-200 border border-gray-300 rounded-md">
                                                    {item.size}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition flex items-center justify-center w-9 h-9"
                                        >
                                            <FiMinus className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <input
                                            type="text"
                                            readOnly
                                            value={item.quantity}
                                            className="w-12 text-center border border-gray-300 rounded-md px-2 py-2 bg-white text-lg"
                                        />
                                        <button
                                            onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition flex items-center justify-center w-9 h-9"
                                        >
                                            <FiPlus className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                        className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition ml-4"
                                    >
                                        <IoTrashBinOutline className="w-5 h-5" />
                                    </button>
                                </div>
                            );
                        })}

                        {/* Cart Total Section */}
                        <div className="flex justify-end mt-10">
                            <div className="w-full sm:w-[450px]">
                                <CartTotal />
                                <div className="w-full text-end">
                                    <button className="bg-black text-sm text-white my-8 px-8 py-3" onClick={()=>navigate('/place-order')}>PROCEED TO CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500 py-8 text-lg">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
