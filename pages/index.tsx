import type {NextPage} from 'next'
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import First from "../components/_section/_main/first";
import Second from "../components/_section/_main/second";
import Third from "../components/_section/_main/third";

const Home: NextPage = () => {


    const img = `/photo/main3.jpg`
    return (
        <>
            <Swiper
                direction={"vertical"}
                speed={1000}
            >
                <SwiperSlide  style={{justifyContent:"flex-start",backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",opacity:"0.9"}}>
                    <First />
                </SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#fafafa"}}>
                    <Second />
                </SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#fafafa"}}>
                    <Third />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home
