import CompanyName from "../../shared/companyname/CompanyName";
import SideImage from "../../assets/sideImage.png";
import icon from '../../assets/icon.png';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextApi from "../../hooks/useContextApi";
import toast from "react-hot-toast";

const SignUp = () => {

    const { GoogleSignUp, createUser, UpdateUser } = useContextApi();  // Context API hooks for Google sign-up, user creation, and user profile update

    const location = useLocation();  // Retrieve the current location to navigate after signup
    const navigate = useNavigate();  // For navigation after form submission

    // Initialize react-hook-form with error handling methods
    const { register, handleSubmit, formState: { errors }, clearErrors, setError } = useForm();

    // Checkbox handler to clear or set error for terms agreement
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            clearErrors("terms"); // Clear the error when the checkbox is checked
        } else {
            setError("terms", { type: "manual" }); // Set error if unchecked
        }
    };

    // Form submit handler
    const onSubmit = data => {
        console.log(data.email, data.password, data.firstName, data.lastName);  // Log form data for testing
        const Name = `${data.firstName} ${data.lastName}`;  // Concatenate first and last name
        createUser(data.email, data.password)  // Create user with email and password
            .then(result => {
                UpdateUser(Name)  // Update user profile with name
                    .then(() => {
                        try {
                            toast.success(`Authenticating as ${result.user.email}`);  // Success message
                        }
                        catch (error) {
                            const errorMessage = error.message;
                            console.log(errorMessage);
                            toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });  // Error message
                        }
                        location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/');  // Navigate to appropriate route
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });  // Error in user profile update
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);  // Error in user creation
            });
    }

    // Handle Google sign-in
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                toast.success(`Authenticating as ${result.user.email}`);  // Success message for Google sign-in
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);  // Error in Google sign-in
                toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });
            });
    }

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);  // Toggle password field visibility
    };
    return (
        <div className="grid lg:grid-cols-2">
            {/* Left form section */}
            <div className="flex flex-row items-center justify-center">
                <div className="p-padding_base rounded-rounded_primary bg-secondary">
                    <div className="flex flex-col items-center">
                        <p className="text-center font-bold text-lg mb-m_base">Welcome To</p>
                        {/* CompanyName component displays the brand/company name */}
                        <CompanyName />
                        <p className="mt-m_small">Sign Up for purchase your desire products</p>
                    </div>
                    <div className="">
                        {/* Form starts here */}
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-gap_base mt-m_lg">

                            {/* First and last name fields (optional) */}
                            <div className="grid grid-cols-2 gap-gap_base">
                                <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                    <label className="text-text_small text-gray-500">First Name (Optional)</label>
                                    <input
                                        {...register("firstName")}
                                        type="text"
                                        placeholder="Enter first name"
                                        className="focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                    <label className="text-text_small text-gray-500">Last Name (Optional)</label>
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        placeholder="Enter last name"
                                        className="focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email field with validation */}
                            <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Email address</label>
                                <input
                                    {...register("email", { required: true })} // Email is required
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="focus:outline-none"
                                />
                                {errors.email && <span className="text-error text-xs mt-m_small">Email field is required</span>}
                            </div>

                            {/* Password field with visibility toggle and custom validations */}
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
                                    type={showPassword ? 'text' : 'password'} // Toggles between 'text' and 'password'
                                    placeholder="Password"
                                    className="focus:outline-none"
                                />
                                {errors.password && (
                                    <div className="text-error text-xs mt-m_small">
                                        {errors.password.message}
                                        {errors.password.hasUpperCase && (
                                            <div>{errors.password.hasUpperCase}</div>
                                        )}
                                        {errors.password.hasSpecialChar && (
                                            <div>{errors.password.hasSpecialChar}</div>
                                        )}
                                    </div>
                                )}
                                {/* Eye icon for toggling password visibility */}
                                <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? (
                                        <FaEye size={25} className="-translate-x-4" />
                                    ) : (
                                        <FaEyeSlash size={25} className="-translate-x-4" />
                                    )}
                                </div>
                            </div>

                            {/* Terms & Policy checkbox */}
                            <div>
                                <div className="flex items-center">
                                    <input onChange={handleCheckboxChange}
                                        {...register("terms", { required: true })} // Checkbox is required
                                        id="terms&policy" name="terms" type="checkbox" className="h-4 w-4 bg-black  shrink-0 text-black focus:ring-black border-gray-300 rounded" />
                                    <label className="text-gray-800 ml-3 block text-sm font-semibold">
                                        I agree to the <a href="" className="text-black underline  hover:underline ml-1">Terms and Policy</a>
                                    </label>
                                </div>
                                {errors.terms && <span className="text-error text-xs mt-m_small">Please accept Terms and Policy </span>}
                            </div>

                            {/* Submit button */}
                            <input className="border p-button_padding rounded-rounded_primary bg-black text-white active:scale-95 transition-all ease-linear" type="submit" value={"Sign Up"} />
                        </form>
                    </div>

                    {/* Divider between form and social login options */}
                    <div className="my-m_primary flex items-center gap-gap_base">
                        <hr className="w-full border-gray-300" />
                        <p className="text-sm text-gray-800 text-center">or</p>
                        <hr className="w-full border-gray-300" />
                    </div>

                    {/* Social authentication buttons */}
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

                    {/* Link to sign-in page */}
                    <p className="text-gray-800 text-sm mt-m_secondary text-center font-semibold">
                        Have an account? <Link to="/SignIn" className="text-primary font-semibold hover:underline ml-1">Sign In</Link>
                    </p>
                </div>
            </div>

            {/* Right side background image section */}
            <div className="w-full hidden lg:block">
                <div
                    style={{
                        backgroundImage: `url(${SideImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="flex flex-col items-center justify-center h-h_110vh space-y-2"
                >
                    {/* Icon and Company name */}
                    <img src={icon} alt="icon" />
                    <CompanyName textColor={"text-white"} />
                    <p className="text-lg text-white w-w_445px text-center">
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
