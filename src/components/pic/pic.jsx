import full from "../../photos/full.png"
import small from "../../photos/small.png"


function Pic(){
    return(
        <section>
                    <div className="lg:hidden flex">
                        <img src={small}></img>
                    </div>
                    <div className="hidden lg:flex ">
                        <img className="w-full" src={full}></img>
                    </div>
        </section>
    )
}

export default Pic;