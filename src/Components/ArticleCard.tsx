import { useBlogs } from "../Contexts/BlogContext.tsx";
import {Blog} from "../ts/Blogs.ts"

interface ArticleCardProps {
    id: string;
    title: string;
    description: string;
    time: string;
    image?: string;
    openModalForEditing: (blog: Blog) => void;
}

function ArticleCard({ id, title, description, time, image, openModalForEditing }: ArticleCardProps) {
    const { deleteBlog } = useBlogs();

    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md bg-white">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                />
            )}
            <h2 className="text-lg font-bold text-pink-700">{title}</h2>
            <p className="text-sm text-gray-600">{new Date(time).toLocaleString()}</p>
            <p className="text-gray-700">{description}</p>

            {/* Buttons */}
            <div className="mt-3 flex gap-2">
                <button
                    onClick={() => openModalForEditing({ id, title, description, time, image })}
                    aria-label="Edit blog"
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
                >
                    Edit
                </button>
                <button
                    onClick={() => deleteBlog(id)}
                    aria-label="Delete blog"
                    className="px-3 py-1 bg-pink-400 text-white rounded-md hover:bg-pink-600 focus:ring-2 focus:ring-pink-300"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ArticleCard;
