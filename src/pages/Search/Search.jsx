import { useState, useEffect } from "react";

import { useSearchParams } from 'react-router-dom';
import Item from "../../components/Item.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";


import "../../hideScrollbar.css";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get('query');


  const products = [
    {
      _id: 1,
      name: "Nike Air Force 1",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
      price: 100,
      categories: ["Life Style", "Chạy bộ"],
      brand: "Nike",
    },
    {
      _id: 2,
      name: "Nike Air Max 97",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/WMNS+AIR+FORCE+1+%2707.png",
      price: 170,
      categories: ["Life Style", "Golf"],
      brand: "Adidas",
    },
    {
      _id: 3,
      name: "Nike Dunk Low",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/AIR+FORCE+1+%2707+FLYEASE.png",
      price: 120,
      categories: ["Life Style", "Đá banh"],
      brand: "NewBalance",
    },
    {
      _id: 4,
      name: "Nike ZoomX Vaporfly",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c8566eb-3260-4890-8944-1c65eb22de46/AIR+FORCE+1+%28GS%29.png",
      price: 250,
      categories: ["Chạy bộ", "Golf"],
      brand: "Nike",
    },
    {
      _id: 5,
      name: "Nike Blazer Mid '77",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/685dd173-195c-4b28-aaf9-c91fd61dfd4c/WMNS+AIR+FORCE+1+%2707+ESS.png",
      price: 110,
      categories: ["Life Style", "Chạy bộ"],
      brand: "Bitis",
    },
    {
      _id: 6,
      name: "Nike Pegasus 40",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png",
      price: 130,
      categories: ["Chạy bộ", "Golf"],
      brand: "Adidas",
    },
    {
      _id: 7,
      name: "Nike React Infinity Run",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/AIR+FORCE+1+%2707.png",
      price: 160,
      categories: ["Đá banh", "Life Style"],
      brand: "Nike",
    },
    {
      _id: 8,
      name: "Nike Air Zoom SuperRep",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6766f1e6-c5e7-4434-af10-562de3473b1b/AIR+FORCE+1+LE+%28GS%29.png",
      price: 120,
      categories: ["Life Style", "Chạy bộ"],
      brand: "NewBalance",
    },
    {
      _id: 9,
      name: "Nike Free RN 5.0",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pfuxaajxqlm4plydjcaa/W+AF1+SAGE+LOW.png",
      price: 100,
      categories: ["Golf", "Đá banh"],
      brand: "Bitis",
    },
    {
      _id: 10,
      name: "Nike Metcon 8",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e794bcae-1c12-4f44-aeca-76efce96aa04/AIR+FORCE+1+%2707+LV8.png",
      price: 130,
      categories: ["Chạy bộ", "Golf"],
      brand: "Nike",
    },
    {
      _id: 11,
      name: "Nike Lebron 20",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc540e66-3b4e-4e64-a537-cf089a7ca84e/AIR+FORCE+1+%2707.png",
      price: 200,
      categories: ["Đá banh", "Life Style"],
      brand: "Adidas",
    },
    {
      _id: 12,
      name: "Nike Kyrie 8",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b121db2-0913-4dbe-a555-2886d8916904/W+AF1+SHADOW.png",
      price: 140,
      categories: ["Life Style", "Golf"],
      brand: "NewBalance",
    },
    {
      _id: 13,
      name: "Nike SB Dunk High",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c34d30c-3420-4115-81ab-837d37b18e17/NIKE+AIR+FORCE+1+GS.png",
      price: 125,
      categories: ["Life Style", "Đá banh"],
      brand: "Bitis",
    },
    {
      _id: 14,
      name: "Nike Air Max Plus",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/804e41b0-fddb-4f59-a5dc-d60dd0a90858/FORCE+1+LOW+EASYON+%28PS%29.png",
      price: 175,
      categories: ["Golf", "Chạy bộ"],
      brand: "Nike",
    },
    {
      _id: 15,
      name: "Nike Court Legacy",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/692a6ec6-b37a-4745-95ba-f7451ad51aaf/W+AIR+FORCE+1+%2707+PRM.png",
      price: 90,
      categories: ["Life Style", "Golf"],
      brand: "Adidas",
    },
    {
      _id: 1,
      name: "Nike Air Force 1",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
      price: 100,
      categories: ["Life Style", "Chạy bộ"],
      brand: "Nike",
    },
    {
      _id: 2,
      name: "Nike Air Max 97",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/WMNS+AIR+FORCE+1+%2707.png",
      price: 170,
      categories: ["Life Style", "Golf"],
      brand: "Adidas",
    },
    {
      _id: 3,
      name: "Nike Dunk Low",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/AIR+FORCE+1+%2707+FLYEASE.png",
      price: 120,
      categories: ["Life Style", "Đá banh"],
      brand: "NewBalance",
    },
    {
      _id: 4,
      name: "Nike ZoomX Vaporfly",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c8566eb-3260-4890-8944-1c65eb22de46/AIR+FORCE+1+%28GS%29.png",
      price: 250,
      categories: ["Chạy bộ", "Golf"],
      brand: "Nike",
    },
    {
      _id: 5,
      name: "Nike Blazer Mid '77",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/685dd173-195c-4b28-aaf9-c91fd61dfd4c/WMNS+AIR+FORCE+1+%2707+ESS.png",
      price: 110,
      categories: ["Life Style", "Chạy bộ"],
      brand: "Bitis",
    },
    {
      _id: 6,
      name: "Nike Pegasus 40",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png",
      price: 130,
      categories: ["Chạy bộ", "Golf"],
      brand: "Adidas",
    },
    {
      _id: 7,
      name: "Nike React Infinity Run",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/AIR+FORCE+1+%2707.png",
      price: 160,
      categories: ["Đá banh", "Life Style"],
      brand: "Nike",
    },
    {
      _id: 8,
      name: "Nike Air Zoom SuperRep",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6766f1e6-c5e7-4434-af10-562de3473b1b/AIR+FORCE+1+LE+%28GS%29.png",
      price: 120,
      categories: ["Life Style", "Chạy bộ"],
      brand: "NewBalance",
    },
    {
      _id: 9,
      name: "Nike Free RN 5.0",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pfuxaajxqlm4plydjcaa/W+AF1+SAGE+LOW.png",
      price: 100,
      categories: ["Golf", "Đá banh"],
      brand: "Bitis",
    },
    {
      _id: 10,
      name: "Nike Metcon 8",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e794bcae-1c12-4f44-aeca-76efce96aa04/AIR+FORCE+1+%2707+LV8.png",
      price: 130,
      categories: ["Chạy bộ", "Golf"],
      brand: "Nike",
    },
    {
      _id: 11,
      name: "Nike Lebron 20",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc540e66-3b4e-4e64-a537-cf089a7ca84e/AIR+FORCE+1+%2707.png",
      price: 200,
      categories: ["Đá banh", "Life Style"],
      brand: "Adidas",
    },
    {
      _id: 12,
      name: "Nike Kyrie 8",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b121db2-0913-4dbe-a555-2886d8916904/W+AF1+SHADOW.png",
      price: 140,
      categories: ["Life Style", "Golf"],
      brand: "NewBalance",
    },
    {
      _id: 13,
      name: "Nike SB Dunk High",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c34d30c-3420-4115-81ab-837d37b18e17/NIKE+AIR+FORCE+1+GS.png",
      price: 125,
      categories: ["Life Style", "Đá banh"],
      brand: "Bitis",
    },
    {
      _id: 14,
      name: "Nike Air Max Plus",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/804e41b0-fddb-4f59-a5dc-d60dd0a90858/FORCE+1+LOW+EASYON+%28PS%29.png",
      price: 175,
      categories: ["Golf", "Chạy bộ"],
      brand: "Nike",
    },
    {
      _id: 15,
      name: "Nike Court Legacy",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/692a6ec6-b37a-4745-95ba-f7451ad51aaf/W+AIR+FORCE+1+%2707+PRM.png",
      price: 90,
      categories: ["Life Style", "Golf"],
      brand: "Adidas",
    },
  ];


  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchProduct, setSearchProduct] = useState([]);




  useEffect(() => {
    let temp = [];
    for (let i = 0; i < products.length; i++) {
      const searchQuery = query.trim().toLowerCase();
      const productName = products[i].name.toLowerCase();
      const isMatch = productName.includes(searchQuery);
      if (isMatch) temp.push(products[i]);
    }
    setSearchProduct(temp);

  }, [products, query]);


  const paginatedProducts = searchProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       setQuery(event.target.value);
//     }
//   };

  const totalPages = Math.ceil(searchProduct.length / itemsPerPage);
  return (
    <div className=" w-full h-auto flex justify-center place-self-center pb-[10vh] pt-7 ">
      <div className="w-11/12">
        <div className="flex flex-col h-full ">
         
            <div className="md:w-4/5 w-full  flex flex-col justify-center place-self-center">
            <h2 className="mb-5 text-2xl">
            Có {searchProduct.length} sản phẩm theo kết quả tìm kiếm {`"${query}"`}
            </h2>
              {paginatedProducts.length > 0 ? (
                <div className="col-span-3 grid grid-cols-5 gap-5">
                  {paginatedProducts.map((value, index) => (
                    <Item key={index} value={value} />
                  ))}
                </div>
              ) : (
                <div>
                  <img src="https://cei.org/wp-content/uploads/2020/09/GettyImages-1207750534.jpg" />
                </div>
              )}
              {searchProduct.length > 0 && totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          
        </div>
      </div>
    </div> 
  );
};
export default Search;
