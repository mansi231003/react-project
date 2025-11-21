export default function Header(){
    return(
        <>
            <div className="flex justify-center items-center w-1/1 h-[70px] max-md:justify-between">
                    <div className="flex max-md:pl-5">
                        <button className="hidden max-md:block text-[24px] "><i className="fa-solid fa-bars"></i></button>
                        <div className="text-[25px] font-bold">SHOP.CO</div>
                    </div>

                    <div className="w-max">
                        <ul className="flex justify-center items-center text-[14px] pr-[25px] gap-[22px] pl-6 max-md:hidden">
                            <li><a className="nav-link flex justify-center items-center w-max" href="#">Shop <i
                                className="fa fa-angle-down "></i></a>
                                <ul className="hidden">
                                    <li className="sub-menu-item"><a className="sub-menu-link" href="#">Category1</a></li>
                                    <li className="sub-menu-item"><a className="sub-menu-link" href="#">Category2</a></li>
                                    <li className="sub-menu-item"><a className="sub-menu-link" href="#">Category3</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link w-max flex" href="#">On Sale</a></li>
                            <li><a className="nav-link w-max flex" href="#">New Arrivals</a></li>
                            <li><a className="nav-link w-max flex" href="#">Brands</a></li>
                        </ul>
                    </div>

                    <div className="w-[40%] gap-[18px] flex justify-center items-center">
                        <div className="flex items-center text-gray-500 h-[30px] bg-gray-200 rounded-[30px] w-[65%] p-[5px] pl-[15px] max-md:bg-transparent max-md:text-[black] max-md:w-[10%] max-md:text-[18px]">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className="flex outline-none max-md:hidden" type="text" placeholder=" Search for products" />
                        </div>

                        <div className="flex justify-between gap-3">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span className="material-symbols-outlined">
                                account_circle
                            </span>
                        </div>

                    </div>

                </div>
        </>
    )
}