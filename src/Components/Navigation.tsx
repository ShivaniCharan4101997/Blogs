import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navigation() {
    return (
        <nav className="bg-pink-300 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center bg-white text-pink-500 px-3 py-2 rounded-lg shadow-md">
                    <FaSearch className="mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none bg-transparent placeholder-pink-300 text-pink-500"
                    />
                </div>
                <section>
                    <FaUserCircle className="text-3xl" />
                </section>
            </div>
        </nav>
    );
}

export default Navigation;
