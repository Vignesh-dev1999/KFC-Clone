import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import offer1 from "../../photos/offer1.png"
import offer2 from "../../photos/offer2.png"
import offer3 from "../../photos/offer3.png"
import offer4 from "../../photos/offer4.png"
import offer5 from "../../photos/offer5.png"
import offer6 from "../../photos/offer6.png"
import offer7 from "../../photos/offer7.png"
import offer8 from "../../photos/offer1.png"
import offer9 from "../../photos/offer9.png"

const data = [
    {
        img: offer1,
        heading: "Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users.",
        hLen:2,
        desc: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."
    },
    {
        img: offer2,
        heading: "Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
        hLen:4,
        desc: "Add 2 Pc  Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user."
    },
    {
        img: offer3,
        heading: "Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.",
        hLen:4,
        desc: "Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user."
    },
    {
        img: offer4,
        heading: "Get flat Rs.75 off on a cart value of Rs.599 or above",
        hLen:4,
        desc: "Get flat Rs.75 off on a cart value of Rs.599 or above"
    },
    {
        img: offer5,
        heading: "Free Popcorn (Med) on a cart value of 499 or more. Friday only.",
        hLen:2,
        desc: "Free Popcorn (Med) on a cart value of 499 or more. Friday only.."
    },
    {
        img: offer6,
        heading: "Free 1pc Chicken on a cart value of 499 or more. Friday only.",
        hLen:3,
        desc: "Free 1pc Chicken on a cart value of 499 or more. Friday only."
    },
    {
        img: offer7,
        heading: "Free 3pc Strips on a cart value of 499 or more. Friday only.",
        hLen:3,
        desc: "Free 3pc Strips on a cart value of 499 or more. Friday only."
    },
    {
        img: offer8,
        heading: "Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users.",
        hLen:2,
        desc: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."
    },
    {
        img: offer9,
        heading: "Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users.",
        hLen:2,
        desc: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."
    },
]

const handleString=(str,num)=>{
    return str.split(" ").slice(0,num).join(" ").concat("...");
}
function Offers() {
    return (
        <section className="bg-black p-5">
            <div className=" flex justify-center flex-col items-center   text-white">
                <div >
                    <h2 className='font-bold text-xl '>EXCLUSIVE OFFERS FOR YOU</h2>
                </div>
                <div className="flex ">
                    <p className='items-center mb-5 '>view All Deals</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>
            <div className='h-96 w-full'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="h-full"
                    navigation
                    breakpoints={{
                        320:{
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    style={{
                        width: '100%', // This ensures the Swiper takes the full width of its container
                    }}
                >
                    {
                        data.map((data, index) => (
                            <SwiperSlide key={index} className='bg-white w-56 h-52'>
                                <img src={data.img} alt="" />
                                <h3 className='text-red-700 font-bold text-3xl flex justify-center'>{handleString(data.heading,data.hLen)}</h3>
                                <p className=' flex justify-center px-5'>{data.desc}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Offers;