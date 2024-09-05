import CompanyName from "../../shared/companyname/CompanyName";
import SideImage from "../../assets/sideImage.png";
import icon from '../../assets/icon.png';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => console.log(data);

    // handle show password 
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="grid grid-cols-2">
            <div className=" h-[110vh] flex flex-row items-center justify-center">
                <div>
                    <div className="flex flex-col items-center ">
                        <p className="text-center font-bold text-lg mb-2">Welcome To</p>
                        <CompanyName />
                        <p className="mt-1">Signup for purchase your desire products</p>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 mt-8">



                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg">
                                    <label className="text-[13px] text-gray-500">First Name (Optional)</label>
                                    <input
                                        {...register("firstName")}
                                        type="text"
                                        placeholder="Enter first name"
                                        className="focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg">
                                    <label className="text-[13px] text-gray-500">Last Name (Optional)</label>
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        placeholder="Enter last name"
                                        className="focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg">
                                <label className="text-[13px] text-gray-500">Email address</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="focus:outline-none"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">Email field is required</span>}
                            </div>
                            <div className="relative flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg">
                                <label className="text-[13px] text-gray-500">Password</label>
                                <input
                                    {...register("password", { required: true })}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className="focus:outline-none"
                                />
                                {errors.password && <span className="text-red-500 text-xs mt-1">Password field is required</span>}
                                <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? (
                                        <FaEye size={25} className="-translate-x-4" />
                                    ) : (
                                        <FaEyeSlash size={25} className="-translate-x-4" />
                                    )}
                                </div>
                            </div>




                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div
                    style={{
                        backgroundImage: `url(${SideImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="flex flex-col items-center justify-center h-[110vh] space-y-2 "
                >
                    <img src={icon} alt="icon" />
                    <CompanyName textColor={"text-white"} />
                    <p className="text-lg text-white w-[445px] text-center">
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
