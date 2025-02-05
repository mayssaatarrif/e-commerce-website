import { createContext } from "react";
import yarn1 from "../images/yarn1.jpg";
import yarn2 from "../images/yarn2.jpg"
import yarn3 from "../images/yarn 3.jpg";

export const ShopContext = createContext();

const products = [
    {
        _id: "aaaaa",
        name: "Alize Cotton Gold Hand Knitting Yarn (Light Cream No. 62)",
        description: `
            Material:	Cotton, Acrylic
            Brand:	Alize
            Colour:	Light Cream
            Item weight: 100 Grams
            Item length: 330 Meters
            Product care instructions:	Hand Wash Only
            Material composition: Cotton, Acrylic
            Manufacturer: ALIZE`,
        price: 2,
        image: yarn1,
        category: "Alize",
        subcategory: "Cotton Gold",
        sizes: [0, 1, 2, 3, 4, 5, 6, 7],
        date: 1012025,
        bestseller: true    
    },
    {
        _id: "aaaab",
        name: "Alize Cotton Baby Soft Hand Knitting Yarn 1PC (Color Powder - No. 161)",
        description: `
            Material:	Cotton, Acrylic
            Brand:	Alize
            Colour:	Powder
            Item weight: 100 Grams
            Item length: 270 Meters
            Product care instructions: Machine Wash
            Material composition:Cotton, Acrylic
            Manufacturer: ALIZE`,
        price: 2,
        image: yarn2, 
        category: "Alize",
        subcategory: "Cotton Baby",
        sizes: [0, 1, 2, 3, 4, 5, 6, 7],
        date: 17062022,
        bestseller: true    
    },
    {
        _id: "aaaac",
        name: "Soft Yarn Angora Gold Batik Thread Crochet Lace Hand Knitting(1895)",
        description: `
            Material: Wool
            Brand:	Alize
            Colour:	1895
            Item weight: 400 Grams
            Item length: 550 Meters
            Product care instructions: Machine Wash
            Material composition: Acrylic
            Manufacturer: ALIZE`,
        price: 3,
        image: yarn3, 
        category: "Alize",
        subcategory: "Angora Gold",
        sizes: [0, 1, 2, 3, 4, 5, 6, 7],
        date: 1012025,
        bestseller: false    
    }
];

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 2;

    const value = {
        products,
        currency,
        delivery_fee,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
