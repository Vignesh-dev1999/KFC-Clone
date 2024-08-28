import cate1 from "../../photos/cate1.png"
import cate2 from "../../photos/cate2.png"
import cate3 from "../../photos/cate3.png"
import cate4 from "../../photos/cate4.png"
import cate5 from "../../photos/cate5.png"
import cate6 from "../../photos/cate6.png"
import cate7 from "../../photos/cate7.png"
import cate8 from "../../photos/cate8.png"

const data = [
    {
        img: cate1,
        text: "INTERNATIONAL BURGER FEST"
    },
    {
        img: cate2,
        text: "MATCH DAY COMBOS"
    },
    {
        img: cate3,
        text: "VALUE LUNCH SPECIALS"
    },
    {
        img: cate4,
        text: "BOX MEALS"
    },
    {
        img: cate5,
        text: "BURGERS"
    },
    {
        img: cate6,
        text: "CHICKEN BUCKETS"
    },
    {
        img: cate7,
        text: "RICE BOWLZ"
    },
    {
        img: cate8,
        text: "View All Menu"
    },

]

function Categories() {
    return (
        <section className="mx-10 lg:mx-32  ">
            <div className="my-10 text-md font-bold flex items-center gap-3 justify-between md:text-2xl lg:my-24"><h2 className="flex-2">BROWSE CATEGORIES</h2> <hr className="flex-1 bg-black"/></div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 ">
                {data.map((data, index) => (
                    <div className="h-42  rounded-t-lg overflow-hidden w-full text-center   " key={index}>
                        <img  src={data.img} alt="" srcset="" className="h-2/3 w-[90%] "/>
                        <p className="text-gray-900 text-xs mt-3 font-bold md:text-xl lg:text-sm  ">{data.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Categories;