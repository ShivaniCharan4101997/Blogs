import Navigation from "./Components/Navigation.tsx";
import Hero from "./Components/Hero.tsx";
import BlogcontextProvider from "./Contexts/BlogContext.tsx";
import AddBlog from "./Components/AddBlog.tsx";

function App() {
    return (
        <BlogcontextProvider>
            <div className="w-full h-screen bg-gray-100 flex flex-col">
                <Navigation />

                {/* Main Content Layout */}
                <main className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-4">
                    <div className="sm:col-span-3 bg-white p-4 rounded-md shadow-md">
                        <AddBlog />
                    </div>
                    <div className="sm:col-span-2 bg-white p-4 rounded-md shadow-md">
                        <Hero />
                    </div>
                </main>
            </div>
        </BlogcontextProvider>
    );
}

export default App;
