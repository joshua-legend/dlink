import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";


const CardList = () => {

    const imageList = [
        {
            imageSrc:"/photo/card1.jpg",
            text:"눈썹 연장",
        },
        {
            imageSrc:"/photo/card1.jpg",
            text:"눈썹 화장",
        },
        {
            imageSrc:"/photo/card3.jpg",
            text:"눈썹 문신",
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper"
            >
             {imageList.map((list,i)=>{
                 return (
                     <SwiperSlide key={i} style={{display:"flex",flexDirection:"column"}}>
                         <img style={{objectFit:"cover",width:"100%",height:"100%",borderRadius:"8px"}} src={list.imageSrc} />
                         <div className="overlay">
                             <div className="text">{list.text}</div>
                         </div>
                     </SwiperSlide>
                 )
             })}
            </Swiper>
        </>
    );
};
export default CardList;