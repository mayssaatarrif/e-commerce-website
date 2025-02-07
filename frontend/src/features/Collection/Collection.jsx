import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import Title from '../../components/molecule/Title';
import ProductItem from '../../components/molecule/ProductItem';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
        setCategory(prev => 
            prev.includes(e.target.value) 
            ? prev.filter(item => item !== e.target.value) 
            : [...prev, e.target.value]
        );
    };

    const toggleSubCategory = (e) => {
        setSubcategory(prev => 
            prev.includes(e.target.value) 
            ? prev.filter(item => item !== e.target.value) 
            : [...prev, e.target.value]
        );
    };

    const applyFilter = () => {
        let productsCopy = [...products];

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory));
        }

        setFilterProduct(productsCopy);
    };

    const sortProduct = () => {
        let sortedProducts = [...filterProduct];

        switch (sortType) {
            case 'low-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                applyFilter();
                return;
        }

        setFilterProduct(sortedProducts);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subcategory]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t mt-40 lg:px-6">
            {/* Filters Sidebar */}
            <div className="w-64 sm:w-72">
                <div 
                    onClick={() => setShowFilter(!showFilter)}
                    className="flex items-center cursor-pointer gap-2 text-lg font-semibold mb-3"
                >
                    FILTERS
                    <IoIosArrowDropdown 
                        className={`h-6 w-6 transition-transform ${showFilter ? 'rotate-180' : ''}`} 
                    />
                </div>

                {/* Category Filter */}
                <div className={`border border-gray-300 p-4 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-2 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col space-y-2 text-sm text-gray-700">
                        {['Alize', 'Kartopu', 'Nako', 'Vogue'].map((cat) => (
                            <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-black">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 accent-black" 
                                    value={cat} 
                                    onChange={toggleCategory} 
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Subcategory Filter */}
                <div className={`border border-gray-300 p-4 mt-4 rounded-lg ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-2 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col space-y-2 text-sm text-gray-700">
                        {['Angora Gold', 'Cotton Baby', 'Cotton Gold'].map((subcat) => (
                            <label key={subcat} className="flex items-center gap-2 cursor-pointer hover:text-black">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 accent-black" 
                                    value={subcat} 
                                    onChange={toggleSubCategory} 
                                />
                                {subcat}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
                {/* Title & Sorting */}
                <div className="flex justify-between items-center mb-6">
                    <Title text1="ALL " text2="COLLECTIONS" />
                    <select 
                        className="border border-gray-300 px-3 py-1 text-sm rounded-md focus:outline-none"
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filterProduct.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
