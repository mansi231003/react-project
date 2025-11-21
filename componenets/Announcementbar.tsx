export default function AnnouncementBar(){
    return(
        <>
          <div className="flex justify-center items-center bg-black text-white w-1/1 pt-1 pb-1">
                    <div className="announcement-text-wrap flex justify-center items-center w-[90%]">Sign up and get 20% off to your first order.
                        <div className="font-bold"><u>Sign Up Now</u></div>
                    </div>
                    <div className="hidden md:block"><i className="fa-solid fa-xmark md: text-white"></i></div>
                </div>
        </>
    )
}