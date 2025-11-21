export default function Footer(){
    return(
        <>
                      <div className="details-section border-t-80 border-t-white w-1/1 bg-[#F0F0F0] pt-20 relative flex justify-center items-center flex-col max-sm:pt-[150px]">

                    <div className="absolute top-[-75px] bg-black text-white rounded-[15px] p-[30px] w-[86%] flex justify-center items-center max-md:w-[97%]">
                        <div className="wrap flex w-[90%] justify-between items-center max-sm:flex-col max-sm:gap-5">
                            <div className="offer-section-heading text-[28px] w-[400px] max-md:text-[25px] max-sm:w-[91%]">
                                <h1 className="font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                            </div>
                            <div className="w-[40%] flex flex-col gap-2.5 max-sm:w-[98%]">
                                <div className="w-max rounded-[30px] bg-[#FFFFFF] text-gray-500 p-2.5 pr-12 text-[13px] flex justify-start items-center max-sm:w-1/1">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input className="outline-none w-1/1" type="text" placeholder="Enter your email address" />
                                </div>
                                <div className="w-max rounded-[30px] bg-[#FFFFFF] text-black p-2.5 pl-[50px] pr-[50px] text-[13px] flex justify-center items-center max-sm:w-1/1">Subscribe to Newsletter</div>
                            </div>
                        </div>
                    </div>

                    <div className="container flex justify-between w-[89%] pt-[30px] pb-[30px] border-b-[#0000001A] border-b max-sm:flex-col gap-4">

                        <div className="description flex flex-col gap-[15px] w-[25%] max-sm:w-1/1 max-sm:justify-between">
                            <div className="text-[25px] font-bold">SHOP.CO</div>
                            <div className="para text-[13px] text-[#00000099]">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
                            <div className="flex gap-[5px] w-[60%] h-[30px] max-md:w-[80%]">
                                <a className="text-black rounded-[50%] border border-[#00000033] bg-white w-[30px] text-[14px] flex justify-center items-center" href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a className="text-black rounded-[50%] border border-[#00000033] bg-white w-[30px] text-[14px] flex justify-center items-center" href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a className="text-black rounded-[50%] border border-[#00000033] bg-white w-[30px] text-[14px] flex justify-center items-center" href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a className="text-black rounded-[50%] border border-[#00000033] bg-white w-[30px] text-[14px] flex justify-center items-center" href="#"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                        <div className="flex w-[35%] justify-around max-md:gap-5 max-sm:w-1/1 max-sm:justify-between">

                            <div className="reference-name flex flex-col justify-between text-[#00000099] text-[13px] w-max">
                                <div className="text-black text-[15px]">COMPANY</div>
                                <div>About</div>
                                <div>Features</div>
                                <div>Works</div>
                                <div>Career</div>
                            </div>

                            <div className="reference-name flex flex-col justify-between text-[#00000099] text-[13px] w-max">
                                <div className="text-black text-[15px]">HELP</div>
                                <div>Customer Support</div>
                                <div>Delivery Details</div>
                                <div>Terms & Conditions</div>
                                <div>Privacy Policy</div>
                            </div>

                        </div>

                        <div className="description flex w-[35%] justify-around  max-sm:w-1/1 max-sm:justify-between">
                            <div className="reference-name flex flex-col justify-between text-[#00000099] text-[13px] w-max">
                                <div className="text-black text-[15px]">FAQ</div>
                                <div>Account</div>
                                <div>Manage Deliveries</div>
                                <div>Orders</div>
                                <div>Payments</div>
                            </div>

                            <div className="reference-name flex flex-col justify-between text-[#00000099] text-[13px] w-max">
                                <div className="text-black text-[15px]">RESOURCES</div>
                                <div>Free eBooks</div>
                                <div>Development Tutorial</div>
                                <div>How to- Blog</div>
                                <div>Youtube Playlist</div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between w-[90%] p-5 items-center text-[#00000099] max-md:w-1/1 max-sm:flex-col ">
                        <div className="max-md:text-[15px] w-max">Shop.co © 2000-2023, All Rights Reserved</div>
                        <div className="flex">
                            <img className="w-[18%]" src="/images/visa.png" />
                            <img className="w-[18%]" src="/images/mastercard.png" />
                            <img className="w-[18%]" src="/images/paypal.png" />
                            <img className="w-[18%]" src="/images/pay.png" />
                            <img className="w-[18%]" src="/images/gpay.png" />
                        </div>
                    </div>

                </div>
        </>
    )
}