import { useEffect, useState } from "react";
import classNames from "classnames";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../state/store";
import { setTheme } from "../../state/theme/themeSlice";

export default function SwitchDarkMode() {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const [isSelected, setIsSelected] = useState(theme === "light" ? false : true)

    useEffect(() => {

        if (isSelected) {
            dispatch(setTheme("dark"));
            document.body.className = "dark";
        } else {
            dispatch(setTheme("light"));
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