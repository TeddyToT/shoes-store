import { useState } from "react";
import QuantitySelection from "../../components/QuantitySelection";


import RecommentItem from "../../components/RecommentItem/RecommentItem";
const images = [
    {
        link : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    },
    {
        link: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
        link: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d1924c98-854b-461b-960c-e05e67f6308f/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
        link: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5f054da9-907a-4153-a025-48bb64bf8520/custom-nike-dunk-high-by-you-shoes.png"
    },

]

const ItemDetails = () => {
    const [activeImg, setActiveImage] = useState(images[0])
  const [quantity, setQuantity] = useState(1);
  
  const [expandText, setExpandText] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non eros at dolor blandit consequat. Fusce urna diam, fermentum at metus congue, placerat pharetra enim. Morbi vehicula suscipit lacinia. In mauris nulla, pharetra in libero vel, auctor elementum eros. Nullam eget dui turpis. Aenean et erat mattis metus fringilla viverra. Vivamus vel auctor nibh, vitae scelerisque odio. Quisque tempor risus ultrices pretium facilisis. Suspendisse tincidunt lectus quis rhoncus consequat. Sed consectetur, nibh eu efficitur mollis, orci lorem dignissim mi, ac ullamcorper ligula nisi vel orci. Donec gravida sit amet elit in finibus.";

  function handleExpandButton() {
    setExpandText(!expandText);
    
  }
  return (
    <>
      <div className="w-11/12 h-auto flex flex-col py-5 mb-20  items-center place-self-center">
        <div className="w-11/12 px-24 flex ">
          <div className="w-11/12  flex flex-row">
            <div className="basis-3/4 flex flex-col items-center rounded-xl mt-2">
              <img
                src={activeImg.link}
                alt="mainImage"
                className="w-3/4 max-h-[500px] border-b-2"
              />
              <div className='flex flex-row justify-between h-24 w-3/4'>
                    <img src={images[0].link} alt="" className=' hover:scale-105 hover:brightness-105 w-1/4 max-h-fit rounded-bl-md cursor-pointer' onMouseOver={() => setActiveImage(images[0])}/>
                    <img src={images[1].link} alt="" className='hover:scale-105 hover:brightness-105 w-1/4 max-h-fit cursor-pointer' onMouseOver={() => setActiveImage(images[1])}/>
                    <img src={images[2].link} alt="" className='hover:scale-105 hover:brightness-105 w-1/4 max-h-fit  cursor-pointer' onMouseOver={() => setActiveImage(images[2])}/>
                    <img src={images[3].link} alt="" className='hover:scale-105 hover:brightness-105 w-1/4 max-h-fit rounded-br-md cursor-pointer' onMouseOver={() => setActiveImage(images[3])}/>
                </div>
            </div>
            <div className="basis-1/4 ">
              <div className="w-full pb-5 mb-5 border-b-2 border-gray-500">
                <p className="text-4xl font-bold mt-2 mb-1">
                  Nike Dunk High By You
                </p>
                <p className="pt-5 text-lg font-bold flex flex-row items-center">
                  Hãng giày:
                  <div className="group ml-1 hover:bg-slate-700  px-2 py-1 rounded-lg">
                    <p className="font-bold text-sky-600 group-hover:text-white">
                      Nike
                    </p>
                  </div>
                </p>
                <p className="text-lg font-bold flex flex-row items-center">
                  Thể loại giày:
                  <div className=" flex flex-row group ml-1 hover:bg-slate-700  px-2 py-1 rounded-lg">
                    <p className="font-bold text-sky-600 group-hover:text-white">
                      Đá banh
                    </p>
                  </div>
                  {" | "}
                  <div className=" flex flex-row group ml-1 hover:bg-slate-700  px-2 py-1 rounded-lg">
                    <p className="font-bold text-sky-600 group-hover:text-white">
                      Đấm nhau
                    </p>
                  </div>
                </p>
              </div>
              <div className="w-full border-b-2 border-gray-500 mb-5 pb-5">
                <div className="w-full flex flex-row items-end gap-3">
                  <p className="font-bold text-4xl">2.990.990đ</p>

                  <p className="text-4xl font-medium text-gray-500 line-through">
                    1.990.990đđ
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-lg font-bold text-left my-2">Mô tả sản phẩm: </p>
                <p className=" text-left whitespace-pre-wrap break-words"> 
                    {expandText?description:description.slice(0,150)+"..."} 
                </p>
                <p className="italic text-gray-600 hover:text-cyan-800 hover:font-bold hover:cursor-pointer"
                onClick={handleExpandButton}
                >{expandText?"Thu gọn":"Xem thêm"} </p>
              </div>
              <div className="w-full mt-3">
                <QuantitySelection
                  quantity={quantity}
                  updateQuantity={setQuantity}
                  limit={10}
                />
              </div>
              <div className="flex flex-row mt-5 gap-3">
                <button 
                  className="group overflow-hidden w-1/3 h-[60px] flex items-center justify-start border hover:bg-slate-700 border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none ">           
                  <p
                    onClick=""
                    className="text-lg w-full text-black group-hover:text-white font-bold "
                  >
                    Mua ngay
                  </p>
                </button>
                <button
                  onClick=""
                  className="group overflow-hidden w-1/3 h-[60px] flex items-center justify-start  border hover:bg-slate-700 border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none "
                >
                  
                  <p className="text-lg w-full text-black group-hover:text-white font-bold">
                    Thêm vào giỏ
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-20">
          <RecommentItem className="flex justify-center items-center"/>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
