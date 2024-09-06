import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <main className="flex justify-center items-center min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <img className="w-w_drawer" src="https://i.ibb.co.com/tB5rzLG/4667072-removebg-preview.png" alt="" />
                <p className=" font-semibold text-primary text-4xl">{error.status}</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{error.statusText}</h1>
                <p className="mt-6 text-base leading-7 text-gray-600"> Message: {error.error.message}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 transition-all"
                    >
                        Go back home
                    </Link>
                    <Link to="/" className="text-sm font-semibold text-gray-900">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ErrorPage;
