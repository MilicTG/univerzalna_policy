import {NavLink} from "react-router-dom";

function LinkButton({title, to}: {
    title: string,
    to: string
}) {
    return (
        <NavLink to={to} className="w-full md:w-72 bg-sky-700 hover:bg-sky-900 my-3 rounded-md transition duration-300 ease-in-out">
            <p className="text-white py-3 text-center">{title}</p>
        </NavLink>
    )
}

export default LinkButton