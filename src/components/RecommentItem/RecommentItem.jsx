// import  { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Item from "../Item";
import SwiperNavControl from "./SwiperNavControl";



const RecommentItem = () => {
    const nikeShoes = [
        {
          name: "Nike Air Force 1",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
          price: 100
        },
        {
          name: "Nike Air Max 97",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/WMNS+AIR+FORCE+1+%2707.png",
          price: 170
        },
        {
          name: "Nike Dunk Low",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/AIR+FORCE+1+%2707+FLYEASE.png",
          price: 120
        },
        {
          name: "Nike ZoomX Vaporfly",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c8566eb-3260-4890-8944-1c65eb22de46/AIR+FORCE+1+%28GS%29.png",
          price: 250
        },
        {
          name: "Nike Blazer Mid '77",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/685dd173-195c-4b28-aaf9-c91fd61dfd4c/WMNS+AIR+FORCE+1+%2707+ESS.png",
          price: 110
        },
        {
          name: "Nike Pegasus 40",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png",
          price: 130
        },
        {
          name: "Nike React Infinity Run",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/AIR+FORCE+1+%2707.png",
          price: 160
        },
        {
          name: "Nike Air Zoom SuperRep",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6766f1e6-c5e7-4434-af10-562de3473b1b/AIR+FORCE+1+LE+%28GS%29.png",
          price: 120
        },
        {
          name: "Nike Free RN 5.0",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pfuxaajxqlm4plydjcaa/W+AF1+SAGE+LOW.png",
          price: 100
        },
        {
          name: "Nike Metcon 8",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e794bcae-1c12-4f44-aeca-76efce96aa04/AIR+FORCE+1+%2707+LV8.png",
          price: 130
        },
        {
          name: "Nike Lebron 20",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc540e66-3b4e-4e64-a537-cf089a7ca84e/AIR+FORCE+1+%2707.png",
          price: 200
        },
        {
          name: "Nike Kyrie 8",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b121db2-0913-4dbe-a555-2886d8916904/W+AF1+SHADOW.png",
          price: 140
        },
        {
          name: "Nike SB Dunk High",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c34d30c-3420-4115-81ab-837d37b18e17/NIKE+AIR+FORCE+1+GS.png",
          price: 125
        },
        {
          name: "Nike Air Max Plus",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/804e41b0-fddb-4f59-a5dc-d60dd0a90858/FORCE+1+LOW+EASYON+%28PS%29.png",
          price: 175
        },
        {
          name: "Nike Court Legacy",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/692a6ec6-b37a-4745-95ba-f7451ad51aaf/W+AIR+FORCE+1+%2707+PRM.png",
          price: 90
        }
      ];
      

    return (
        <>
            
                <div className="w-11/12">
                    <p className="font-bold text-3xl">SẢN PHẨM LIÊN QUAN</p>
                    <div className="mt-5">
                        <Swiper
                            slidesPerView={2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                            spaceBetween={10}
                            loop={true}
                            className="mySwiper"
                        >
                            {nikeShoes.map((ele, index) => {
                                return (
                                    <SwiperSlide key={index}> <Item value={ele}/> </SwiperSlide>
                                )
                            })}
                            <SwiperNavControl />
                        </Swiper>
                    </div>
                </div>
            
        </>
    );
}

export default RecommentItem;