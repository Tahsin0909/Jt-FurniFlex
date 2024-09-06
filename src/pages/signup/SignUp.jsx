import CompanyName from "../../shared/companyname/CompanyName";
import SideImage from "../../assets/sideImage.png";
import icon from '../../assets/icon.png';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, clearErrors, setError } = useForm();

    // handle checkbox 
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            clearErrors("terms"); // Clear the error when the checkbox is checked
        } else {
            setError("terms", { type: "manual" }); // Set error if unchecked
        }
    };

    // handle form submit 
    const onSubmit = data => console.log(data);




    // handle show password 
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-row items-center justify-center">
                <div className=" p-8 rounded-lg bg-[#FAFAFA]">
                    <div className="flex flex-col items-center ">
                        <p className="text-center font-bold text-lg mb-2">Welcome To</p>
                        <CompanyName />
                        <p className="mt-1">Sign Up for purchase your desire products</p>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 mt-8">



                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg bg-white">
                                    <label className="text-[13px] text-gray-500">First Name (Optional)</label>
                                    <input
                                        {...register("firstName")}
                                        type="text"
                                        placeholder="Enter first name"
                                        className="focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg bg-white">
                                    <label className="text-[13px] text-gray-500">Last Name (Optional)</label>
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        placeholder="Enter last name"
                                        className="focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg bg-white">
                                <label className="text-[13px] text-gray-500">Email address</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="focus:outline-none"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">Email field is required</span>}
                            </div>
                            <div className="relative flex flex-col space-y-1 border p-2 focus-within:border-blue-600 rounded-lg bg-white">
                                <label className="text-[13px] text-gray-500">Password</label>
                                <input
                                    {...register("password", {
                                        required: "Password is required!",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long!"
                                        },
                                        validate: {
                                            hasUpperCase: (value) =>
                                                /[A-Z]/.test(value) || "Password must contain at least one uppercase letter!",
                                            hasSpecialChar: (value) =>
                                                /[!@#$%^&*]/.test(value) || "Password must contain at least one special character!"
                                        }
                                    })}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className="focus:outline-none"
                                />
                                {errors.password && (
                                    <div className="text-red-500 text-xs mt-1">
                                        {errors.password.message}
                                        {errors.password.hasUpperCase && (
                                            <div>{errors.password.hasUpperCase}</div>
                                        )}
                                        {errors.password.hasSpecialChar && (
                                            <div>{errors.password.hasSpecialChar}</div>
                                        )}
                                    </div>
                                )}
                                <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? (
                                        <FaEye size={25} className="-translate-x-4" />
                                    ) : (
                                        <FaEyeSlash size={25} className="-translate-x-4" />
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <input onChange={handleCheckboxChange}
                                        {...register("terms", { required: true })}
                                        id="terms&policy" name="terms" type="checkbox" className="h-4 w-4 bg-black  shrink-0 text-black focus:ring-black border-gray-300 rounded" />
                                    <label className="text-gray-800 ml-3 block text-sm font-semibold">
                                        I agree to the <a href="" className="text-black underline  hover:underline ml-1">Terms and Policy</a>
                                    </label>
                                </div>
                                {errors.terms && <span className="text-red-500 text-xs mt-1">Please accept Terms and Policy </span>}
                            </div>




                            <input className="border p-3 rounded-lg bg-black text-white active:scale-95 transition-all ease-linear" type="submit" value={"Sign Up"} />
                        </form>
                    </div>
                    {/* divider  */}
                    <div className="my-4 flex items-center gap-4">
                        <hr className="w-full border-gray-300" />
                        <p className="text-sm text-gray-800 text-center">or</p>
                        <hr className="w-full border-gray-300" />
                    </div>
                    {/* social SignUp  */}
                    <div className="grid grid-cols-2 items-center gap-4">
                        {/* google authentication  */}
                        <div className="flex items-center justify-center gap-2 border p-3 rounded-lg hover:shadow-md">
                            <FcGoogle size={25} />
                            <span>Sign in with Google</span>
                        </div>
                        {/* apple authentication  */}
                        <div className="flex items-center justify-center gap-2 border p-3 rounded-lg hover:shadow-md">
                            <FaApple size={25} />
                            <span>Sign in with Google</span>
                        </div>
                    </div>
                    <p className="text-gray-800 text-sm mt-6 text-center font-semibold">Have an account? <Link to="/SignIn" className="text-blue-600 font-semibold hover:underline ml-1">Sign In</Link></p>
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

export default SignUp;
