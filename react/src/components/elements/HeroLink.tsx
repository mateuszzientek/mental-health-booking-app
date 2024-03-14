import { NavLink } from "react-router-dom";

interface HeroLinkProps {
    text: string,
    link: string
}

export default function HeroLink(props: HeroLinkProps) {
    return (
        <NavLink
            to={props.link}
            style={({ isActive }) => {
                return isActive ? { fontWeight: "bold", pointerEvents: "none", color: "#449c6f" } : {}
            }}
            className={"text-xl text-text_90  duration-100 hover:scale-105"}
        >
            {props.text}
        </NavLink>
    );
}