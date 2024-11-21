import  { useState, useEffect } from "react";


import { FaMagnifyingGlass } from "react-icons/fa6";
import Item from "../../components/Item.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";

import RadioCheckBox from "../../components/Checkbox/RadioCheckbox.jsx";


import "../../hideScrollbar.css";


const Search = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

   


  const [query, setQuery] = useState("");
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [brandOption, setBrandOption] = useState();

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

  const brands = [
    {
      _id: 1,
      name: "Nike",
    },
    {
      _id: 2,
      name: "Adidas",
    },
    {
      _id: 3,
      name: "NewBalance",
    },
    {
      _id: 4,
      name: "Bitis",
    },
  ];
  const categories = [
    {
      _id: 1,
      name: "Life Style",
    },
    {
      _id: 2,
      name: "Đá banh",
    },
    {
      _id: 3,
      name: "Chạy bộ",
    },
    {
      _id: 4,
      name: "Golf",
    },
  ];

  const [searchProduct, setSearchProduct] = useState([]);
  const [searchProduct2, setSearchProduct2] = useState([]);

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when search or filters change
}, [query, categoriesOptions, brandOption]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < products.length; i++) {
      const searchQuery = query.trim().toLowerCase();
      const productName = products[i].name.toLowerCase();
      const isMatch = productName.includes(searchQuery);
      if (isMatch) temp.push(products[i]);
    }
    setSearchProduct(temp);
    setSearchProduct2(temp);
  }, [query]);

  useEffect(() => {
    let temp = [];
    setSearchProduct(searchProduct2); // Khởi tạo lại dữ liệu tìm kiếm

    for (let i = 0; i < searchProduct2.length; i++) {
      let count = 0;

      for (let j = 0; j < categoriesOptions.length; j++) {
        if (searchProduct2[i].categories.includes(categoriesOptions[j].name)) {
          count += 1;
        }
      }

      if (count === categoriesOptions.length) {
        temp.push(searchProduct2[i]);
      }
    }

    setSearchProduct(temp);
  }, [categoriesOptions, searchProduct2]);

  useEffect(() => {
    let temp = [...searchProduct2]; // Lấy dữ liệu từ kết quả tìm kiếm ban đầu

    // Lọc theo danh mục
    if (categoriesOptions.length > 0) {
      temp = temp.filter((product) =>
        categoriesOptions.every((category) =>
          product.categories.includes(category.name)
        )
      );
    }

    // Lọc theo thương hiệu
    if (brandOption) {
      temp = temp.filter((product) => product.brand === brandOption.name);
    }

    setSearchProduct(temp); // Cập nhật danh sách sản phẩm hiển thị
  }, [categoriesOptions, brandOption, searchProduct2]);

  const paginatedProducts = searchProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
);
  const handleClearFilters = () => {
    setQuery(""); // Xóa từ khóa tìm kiếm
    setCategoriesOptions([]); // Bỏ chọn danh mục
    setBrandOption(null); // Bỏ chọn thương hiệu
    setSearchProduct(products); // Đặt lại danh sách sản phẩm về mặc định
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQuery(event.target.value);
    }
  };
  
  const totalPages = Math.ceil(searchProduct.length / itemsPerPage);
  return (
    <div className="bg-slate-300 w-full h-auto flex justify-center pb-[10vh] ">
      <div className="w-11/12">
        <div className=" w-full lg:w-3/4 md:w-full md:mt-3 sm:w-4/6 sm:mt-3  flex flex-row border rounded-lg bg-zinc-200 p-2 mb-5">
          <form className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action="#"
            method="POST"
          >
            <div className="flex flex-row items-center w-full ">
              <FaMagnifyingGlass className="basis-1/12"/>
              <input
                type="text"
                placeholder="Type to search..."
                value = {query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="basis-5/6 bg-transparent font-medium focus:outline-none text-left "
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col h-full ">
          <div className="w-full flex flex-row gap-10">
            <div className="md:w-4/5 w-full  flex flex-col">
            {paginatedProducts.length > 0 ? (
                            <div className="col-span-3 grid grid-cols-4 gap-5">
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
            <div className=" md:flex flex-col items-center w-1/4 justify-stretch content-center">
              <div>
                <label className=" text-red-500 font-medium text-xl">
                  Bộ lọc
                </label>
              </div>
              <Checkbox
                dropdownName="Thể loại giày"
                options={categories}
                selectedOptions={categoriesOptions}
                setSelectedOptions={setCategoriesOptions}
              />
              {/* <DropdownRadio dropdownName="Loại" options={type} /> */}
              <RadioCheckBox
                dropdownName="Hãng giày"
                options={brands}
                selectedOption={brandOption}
                setSelectedOption={setBrandOption}
              />
              <div className="pl-3 pt-3 w-[50%]">
                <button
                  onClick={handleClearFilters}
                  className=" w-full rounded-md border border-gray-500  px-4 py-2 text-sm font-medium text-gray-700 bg-zinc-400 hover:bg-sky-600"
                >
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
