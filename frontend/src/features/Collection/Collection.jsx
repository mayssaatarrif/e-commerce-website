import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Title from '../../components/molecule/Title';
import ProductItem from '../../components/molecule/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
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

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()));
        }

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
    }, [category, subcategory, search, showSearch]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-32">
            <div className="flex flex-col lg:flex-row gap-8 pt-6">
                {/* Filters Sidebar */}
                <div className="w-full lg:w-64 xl:w-72">
                    <button 
                        onClick={() => setShowFilter(!showFilter)}
                        className="flex items-center justify-between w-full lg:justify-start lg:w-auto gap-2 text-lg font-medium py-2 lg:py-0 border-b lg:border-0"
                    >
                        <span>FILTERS</span>
                        <IoIosArrowDropdown 
                            className={`h-5 w-5 transition-transform duration-200 ${showFilter ? 'rotate-180' : ''}`} 
                        />
                    </button>

                    <div className={`space-y-4 mt-4 ${showFilter ? 'block' : 'hidden'} lg:block`}>
                        {/* Category Filter */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <p className="mb-3 text-sm font-semibold tracking-wide">CATEGORIES</p>
                            <div className="flex flex-col space-y-3">
                                {['Alize', 'Kartopu', 'Nako', 'Vogue'].map((cat) => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-black transition-colors">
                                        <input 
                                            type="checkbox" 
                                            className="w-4 h-4 accent-black rounded" 
                                            value={cat} 
                                            onChange={toggleCategory} 
                                        />
                                        <span className="text-sm">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Subcategory Filter */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <p className="mb-3 text-sm font-semibold tracking-wide">TYPE</p>
                            <div className="flex flex-col space-y-3">
                                {['Angora Gold', 'Cotton Baby', 'Cotton Gold'].map((subcat) => (
                                    <label key={subcat} className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-black transition-colors">
                                        <input 
                                            type="checkbox" 
                                            className="w-4 h-4 accent-black rounded" 
                                            value={subcat} 
                                            onChange={toggleSubCategory} 
                                        />
                                        <span className="text-sm">{subcat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <Title text1="ALL " text2="COLLECTIONS" />
                        <select 
                            className="w-full sm:w-auto border border-gray-300 px-4 py-2 text-sm rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {filterProduct.map((item, index) => (
                            <ProductItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                price={item.price} 
                                image={item.image} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;