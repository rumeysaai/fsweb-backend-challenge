import { useForm } from "react-hook-form";
import React from 'react';
const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
        defaultValues: {
            Username: "",
            Password: ""
        }
    });

    const loginHandle = () => {

    }

    return (
        <div className="h-full max-w-screen-xl">
            <div className="header-text pb-4 pt-3">
                <h3 className="text-5xl font-semibold mt-6 mb-12 text-indigo-800 dark:text-indigo-100">Do you have already an instagram account?</h3>
                <h4 className="text-3xl font-semibold text-indigo-900 my-4 dark:text-violet-300">Please sign in!</h4>
            </div>
            <form className="w-full max-w-xl mx-auto pt-8 h-full pb-40" onSubmit={handleSubmit(loginHandle)}>
                <div className="md:items-center flex flex-col">
                    <div className="md:w-1/3 my-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left  mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="Username">
                            Username
                        </label>
                    </div>
                    <div className="md:w-2/3 mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="Username" type="Username" placeholder="Jane Doe"
                            name="Username"
                            {...register("Username", { required: "Username is required" })}
                        />
                        {errors.Username && <p>{errors.Username.message}</p>}<br />
                    </div>
                </div>
                <div className=" md:items-center  flex flex-col">
                    <div className="md:w-1/3 justify-center mr-44 mb-4">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200 " htmlFor="Password">
                        Password
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="Password" type="Password" placeholder="*********"
                            name="Password"
                            {...register("Password", { required: "Password is required" })}
                        />
                        {errors.Password && <p>{errors.Password.message}</p>}<br />
                    </div>
                </div>
                <div className="md:items-center">
                    <div className="md:w-2/3 flex justify-center mt-4 mx-auto">
                        <button className="shadow bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded dark:bg-neutral-200 dark:text-indigo-600  dark:hover:bg-neutral-100"
                            type="submit"
                            disabled={!isValid}
                            value="Send"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default Login;