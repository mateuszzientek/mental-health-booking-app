import RingLoader from "react-spinners/RingLoader";

export default function LoadingAnimationPage() {
    return (
        <div className="flex justify-center w-screen h-screen items-center bg-background ">
            <RingLoader
                color={"#449c6f"}
                size={150}
            />
        </div>
    );
}