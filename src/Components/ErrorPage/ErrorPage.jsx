import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-40">
            <h1 className="text-2xl lg:text-4xl font-bold">Opsss!!!!!!!</h1>
            <h1 className="text-2xl lg:text-4xl mt-3 font-bold">Unexpected Application Error!</h1>
            <p className="text-base mt-3 font-medium mb-3">404 Not Found</p>
            <Link to="/"><button className="btn btn-accent text-white">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;