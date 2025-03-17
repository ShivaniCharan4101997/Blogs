import { useContext, createContext, ReactNode, useState } from "react";
import { Blog } from "../ts/Blogs.ts";

interface BlogContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

function BlogContextProvider({ children }: { children: ReactNode }) {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    function addBlog(blog: Blog) {
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
    }

    function updateBlog(updatedBlog: Blog) {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === updatedBlog.id ? { ...blog, ...updatedBlog } : blog
            )
        );
    }

    function deleteBlog(id: string) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    }

    return (
        <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContextProvider;

export const useBlogs = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlogs must be used within a BlogContextProvider");
    }
    return context;
};
