import avatar_login from "../assets/images/avatar_login.png"


export default function Login() {
    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#575757]  w-screen h-screen">
            <div className="relative flex flex-col items-center w-[30rem] h-[35rem] bg-white dark:bg-[#a5a5a5] rounded-[4rem] shadow py-10">
                <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                <h2 className="text-4xl font-medium text-black/80 mt-10">Welcome back</h2>
            </div>
        </div>
    );
}