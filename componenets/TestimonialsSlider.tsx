"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Testimonials() {

    return (
        <>
            <div className=" w-1/1 pb-[50px] pt-[25px] items-center flex flex-col justify-center">
                <div className="flex justify-between items-center w-[90%] pb-5">
                    <h1 className="font-bold text-3xl">OUR HAPPY CUSTOMERS</h1>
                    <div className=" flex items-center gap-[5px]">
                        <i className="fa-solid fa-arrow-left prev-btn"></i>
                        <i className="fa-solid fa-arrow-right next-btn"></i>
                    </div>
                </div>

                <Swiper className='w-[90%]'
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    spaceBetween={15}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        500: {
                            slidesPerView: 2
                        },
                        700: {
                            slidesPerView: 3
                        }
                    }}
                    autoplay={{
                        delay: 2000,
                    }}
                >
                    <SwiperSlide className="w-[97%] border border-[#0000001A] rounded-[25px] flex flex-col gap-[5px] h-max p-[18px]">
                        <div className="text-[#FFC633]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="flex items-center font-bold">
                            <h4>Sarah M.</h4>
                            <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                        </div>
                        <div className="w-[90%] text-[12px] text-[#00000099]">
                            <p className="w-1/1">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear
                                to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-[97%] border border-[#0000001A] rounded-[25px] flex flex-col gap-[5px] h-max p-[18px]">
                        <div className="text-[#FFC633]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="flex items-center font-bold">
                            <h4>Alex K.</h4>
                            <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                        </div>
                        <div className="w-1/1 text-[12px] text-[#00000099]">
                            <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes  and occasions.”</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="customer-feedback w-[97%] border border-[#0000001A] rounded-[25px] flex flex-col gap-[5px] h-max p-[18px]">
                        <div className="stars text-[#FFC633]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="flex items-center font-bold">
                            <h4>James L.</h4>
                            <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                        </div>
                        <div className="w-[90%] text-[12px] text-[#00000099]">
                            <p className="w-1/1">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-[97%] border border-[#0000001A] rounded-[25px] flex flex-col gap-[5px] h-max p-[18px]">
                        <div className="text-[#FFC633]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="flex items-center font-bold">
                            <h4>Moon M.</h4>
                            <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                        </div>
                        <div className="w-[90%] text-[12px] text-[#00000099]">
                            <p className="width-1/1">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-[97%] border border-[#0000001A] rounded-[25px] flex flex-col gap-[5px] h-max p-[18px]">
                        <div className="text-[#FFC633]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="flex items-center font-bold">
                            <h4>Mooen M.</h4>
                            <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                        </div>
                        <div className="w-[90%] text-[12px] text-[#00000099]">
                            <p className="w-1/1">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}