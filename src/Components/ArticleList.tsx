import { useBlogs } from "../Contexts/BlogContext.tsx";
import ArticleCard from "./ArticleCard.tsx"
import {Blog} from "../ts/Blogs.ts"

function ArticleList({ openModalForEditing }: { openModalForEditing: (blog: Blog) => void }) {
    const { blogs } = useBlogs();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 p-4">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <ArticleCard key={blog.id} {...blog} openModalForEditing={openModalForEditing} />
                ))
            ) : (
                <p className="text-center text-gray-500 col-span-full">No blogs available.</p>
            )}
        </div>
    );
}

export default ArticleList;
