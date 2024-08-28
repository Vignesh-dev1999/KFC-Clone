import { useState } from "react";

function DropRight(props) {
    const {list, index} = props
    console.log(list);
    return (
        <ul className="absolute left-[100%] bg-slate-400 w-48" style={{top:`${20+(index*24)}px`}}>
            {list.map((data, index) => (

                <li key={index}>{data}</li>
            ))}
        </ul>
    )
}


export function Dropdown(props) {
    const { menuList, onClick } = props
    console.log(menuList);



    const [menuDrop, setMenuDrop] = useState(false);

    const [subtopics, setSubtopics] = useState([])
    const [subTop, setTop] = useState(1)

    const handleDropRight = (index) => {
        setMenuDrop(!menuDrop)
        setSubtopics(menuList[index].subtopics)
        setTop(index)
    }

    return (
        <ul style={{
            position: "absolute",
            backgroundColor: "lightgray",
            bottom: "-90%",
            left: "250px",
            padding: "20px",
            borderRadius:"10px"
            // display: `${!onClick ? "none" : "block"}`
        }}
            className="cursor-pointer"
            popover id="menu"
        >
            {menuList.map((data, index) => (
                <li key={index} className="relative" onClick={()=>handleDropRight(index)}>{data.topic} </li>
            ))}
            <DropRight list={subtopics} index={subTop} />
        </ul>
    )
}

