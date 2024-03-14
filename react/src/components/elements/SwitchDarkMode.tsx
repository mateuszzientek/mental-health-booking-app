import { useEffect, useState } from "react";
import classNames from "classnames";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

export default function SwitchDarkMode() {

    const theme = localStorage.getItem("theme")

    const [isSelected, setIsSelected] = useState(theme === "light" ? false : true)

    useEffect(() => {

        if (isSelected) {
            localStorage.setItem("theme", "dark")
            document.body.className = "dark";
        } else {
            localStorage.setItem("theme", "light")
            document.body.className = "light";
        }

    }, [isSelected])


    const handleClick = () => {
        setIsSelected(!isSelected)
    }

    return (
        <div onClick={() => handleClick()} className={classNames("cursor-pointer flex w-20 h-10 bg-[#ebebeb] rounded-full transition-all duration-500 shadow-lg", { "bg-primary": isSelected })}>
            <span className={` flex justify-center items-center h-10 w-10 bg-white rounded-full transition-all duration-500 ${isSelected && "ml-[2.6rem]"}`}>
                {isSelected ? <IoMoonOutline size={22} /> : <LuSun size={22} />}

            </span>
        </div>
    )
}