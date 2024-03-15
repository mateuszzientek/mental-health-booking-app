import { NavLink } from "react-router-dom";

interface HeroLinkFooterProps {
    text: string,
    link: string
}

export default function HeroLinkFooter(props: HeroLinkFooterProps) {
    return (
        <NavLink
            to={props.link}
            style={({ isActive }) => {
                return isActive ? { fontWeight: "bold", pointerEvents: "none", color: "#449c6f" } : {}
            }}
        >
            {props.text}
        </NavLink>
    );
}