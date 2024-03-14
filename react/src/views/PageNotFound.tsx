import { useNavigate } from "react-router-dom";
import notFound from "../assets/images/notFound.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PageNotFound() {

    const navigate = useNavigate();
    return (
        <div className="bg-background">
            <div className="flex justify-between items-center w-[75rem] h-screen mx-auto ">
                <div>
                    <h2 className="text-5xl font-medium text-text_80 mb-2">Ooops...</h2>
                    <h2 className="text-4xl  text-text_80">Page not found</h2>
                    <p className="text-xl  text-text_60 w-[26rem] mt-4">The page you are looking for doesn't exit or an other error occurred, go back to home page.</p>

                    <button onClick={() => navigate("/")} className="h-[3rem] rounded-md bg-primary px-4 mt-6">
                        <p className="text-white ">Home page</p>
                    </button>
                </div>
                <LazyLoadImage
                    src={notFound}
                    alt="Not found"
                    effect="blur"
                    className="w-[40rem] "
                />
            </div>
        </div>
    );
}