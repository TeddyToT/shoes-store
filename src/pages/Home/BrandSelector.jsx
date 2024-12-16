import React, { useState, useContext, useEffect } from "react";
import ItemSwiper from "../../components/RecommentItem/ItemSwiper";
import { DataContexts } from "../../AppContexts/Contexts";
import { Link } from "react-router-dom";
const BrandSelector = () => {
  const { products, manufacturers } = useContext(DataContexts); 
  const [selectedBrand, setSelectedBrand] = useState(null); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  
  useEffect(() => {
    if (selectedBrand) {
      const filtered = products.filter(
        (product) => product.manufacturerId.manufacturerId === selectedBrand.manufacturerId
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); 
    }
  }, [selectedBrand, products]);


  useEffect(() => {
    if (manufacturers.length > 0) {
      setSelectedBrand(manufacturers[0]);
    }
  }, [manufacturers]);

  return (
    <div className="p-5">
      
      <div className="flex gap-2 mb-5 md:w-3/4 w-full  place-self-center justify-around text-center">
        {manufacturers.map((brand) => (
          <button
            key={brand.manufacturerId}
            onClick={() => setSelectedBrand(brand)}
            className={` text-center sm:py-3 rounded-lg capitalize w-1/5 text-base sm:text-xl font-semibold   ${
              selectedBrand?.manufacturerId === brand.manufacturerId
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {brand.name}
          </button>
          
        ))}

      </div>

      {filteredProducts.length > 0 ? (
        <ItemSwiper items={filteredProducts} />
        
      ) : (
        <p className="text-gray-600">Không có sản phẩm nào cho hãng này.</p>
      )}
      <div className="w-full text-right mt-4">
      <Link className="text-white hover:text-blue-500 hover:bg-slate-500 text-lg italic bg-[#3e3e3e] py-3 px-3 rounded-xl">Xem thêm</Link>
      </div>
       
    </div>
  );
};

export default BrandSelector;
