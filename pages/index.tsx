import type {NextPage} from 'next'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Guide from "../components/_section/_main/guide";

const Home: NextPage = () => {
    const img = `/photo/main.jpg`

    return (
        <>
            <Swiper
                direction={"vertical"}
                speed={1000}
            >
                <SwiperSlide style={{backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",opacity:"0.9"}}>
                    <Guide />
                </SwiperSlide>
                <SwiperSlide><div>123</div></SwiperSlide>
                <SwiperSlide><div>123</div></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home
