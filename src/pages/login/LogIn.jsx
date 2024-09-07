/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import CompanyName from "../../shared/companyname/CompanyName";
import SideImage from "../../assets/sideImage.png";
import icon from '../../assets/icon.png';
import { useForm } from "react-hook-form"; // Importing react-hook-form for form validation
import { useState } from "react"; // Importing useState for handling password visibility
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for Apple, Eye (show/hide password)
import { FcGoogle } from "react-icons/fc"; // Google icon
import { Link, useLocation, useNavigate } from "react-router-dom"; // Navigation hooks
import useContextApi from "../../hooks/useContextApi"; // Custom hook for context API (sign-in logic)
import toast, { Toaster } from "react-hot-toast"; // Toast for notifications

const LogIn = () => {

    // Navigation and location hooks
    const location = useLocation();
    const navigate = useNavigate();
    
    // Extracting sign-in methods from context
    const { SignInUser, GoogleSignUp } = useContextApi();
    
    // Form handling with react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Form submit handler
    const onSubmit = data => {
        // Sign-in user with email and password
        SignInUser(data.email, data.password)
            .then(result => {
                // Success toast notification
                toast.success(`Authenticating as ${result.user.email}`);
                // Redirect based on location or to home
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/');
            })
            .catch((error) => {
                // Error handling and toast notification
                const errorMessage = error.message;
                toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });
            });
    };

    // Google sign-in handler
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                // Success toast notification for Google sign-in
                toast.success(`Authenticating as ${result.user.email}`);
                // Redirect based on location or to home
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/');
            })
            .catch((error) => {
                // Error handling for Google sign-in
                const errorMessage = error.message;
                toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });
            });
    };

    // Password visibility toggle
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div className="grid lg:grid-cols-2">
            {/* Left section with form */}
            <div className=" h-h_110vh flex flex-row items-center justify-center">
                <div className=" p-padding_base rounded-rounded_primary bg-secondary">
                    <div className="flex flex-col">
                        <p className="font-semibold text-text_primary">Welcome Back!</p>
                        <p className="mt-m_small">Enter your Credentials to access your account</p>
                    </div>
                    
                    {/* Form section */}
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-gap_base mt-m_lg">
                            {/* Email input */}
                            <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Email address</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="focus:outline-none"
                                />
                                {/* Error message for email */}
                                {errors.email && <span className="text-error text-xs mt-m_small">Email field is required</span>}
                            </div>

                            {/* Password input with show/hide functionality */}
                            <div className="relative flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Password</label>
                                <input
                                    {...register("password", {
                                        required: "Password is required!",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long!"
                                        },
                                        validate: {
                                            hasUpperCase: (value) =>
                                                /[A-Z]/.test(value) || "Password must contain at least one uppercase letter!",
                                            hasSpecialChar: (value) =>
                                                /[!@#$%^&*]/.test(value) || "Password must contain at least one special character!"
                                        }
                                    })}
                                    type={showPassword ? 'text' : 'password'} // Toggling between text and password type
                                    placeholder="Password"
                                    className="focus:outline-none"
                                />
                                {/* Display password errors */}
                                {errors.password && (
                                    <div className="text-error text-xs mt-m_small">
                                        {errors.password.message}
                                    </div>
                                )}
                                {/* Show/hide password icon */}
                                <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? (
                                        <FaEye size={25} className="-translate-x-4" /> // Eye icon to show password
                                    ) : (
                                        <FaEyeSlash size={25} className="-translate-x-4" /> // EyeSlash icon to hide password
                                    )}
                                </div>
                            </div>

                            {/* Forgot password link */}
                            <p className="text-end text-primary hover:underline">Forget Password</p>

                            {/* Submit button */}
                            <input className="border p-button_padding rounded-rounded_primary bg-black text-white active:scale-95 transition-all ease-linear" type="submit" value={"Sign In"} />
                        </form>
                    </div>

                    {/* Divider between form and social login */}
                    <div className="my-m_primary flex items-center gap-gap_base">
                        <hr className="w-full border-gray-300" />
                        <p className="text-sm text-gray-800 text-center">or</p>
                        <hr className="w-full border-gray-300" />
                    </div>

                    {/* Social login options */}
                    <div className="grid grid-cols-2 items-center gap-gap_base">
                        {/* Google sign-in button */}
                        <button onClick={handleGoogle} className="flex items-center justify-center gap-2 border p-button_padding rounded-rounded_primary hover:shadow-md">
                            <FcGoogle size={25} />
                            <span className="md:text-base text-text_small">Sign in with Google</span>
                        </button>
                        {/* Apple sign-in button */}
                        <div className="flex items-center justify-center gap-2 border p-button_padding rounded-rounded_primary hover:shadow-md">
                            <FaApple size={25} />
                            <span className="md:text-base text-text_small">Sign in with Apple</span>
                        </div>
                    </div>

                    {/* Link to sign-up page */}
                    <p className="text-gray-800 text-sm mt-m_secondary text-center font-semibold">Don't Have an account? <Link to="/SignUp" className="text-primary font-semibold hover:underline ml-1">Sign Up</Link></p>
                </div>
            </div>

            {/* Right section with background image and company info */}
            <div className="w-full hidden lg:block">
                <div
                    style={{
                        backgroundImage: `url(${SideImage})`, // Background image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="flex flex-col items-center justify-center h-h_110vh space-y-2 "
                >
                    <img src={icon} alt="icon" /> {/* Company logo */}
                    <CompanyName textColor={"text-white"} /> {/* Company name component */}
                    <p className="text-lg text-white w-w_445px text-center">
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
