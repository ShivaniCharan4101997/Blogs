import Modal from "./Modal.tsx";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { Blog } from "../ts/Blogs.ts";
import BlogForm from "./BlogForm.tsx";
import ArticleList from "./ArticleList.tsx";

function AddBlog() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

    // isModalOpen: A boolean state that controls whether the modal is visible.
    // editingBlog: Holds the blog object that is being edited. If null, the form is for a new blog


    const openModalForNewBlog = () => {
        setIsModalOpen(true);
        setEditingBlog(null); // Ensure it's empty for a new blog
    };

    const openModalForEditing = (blog: Blog) => {
        setIsModalOpen(true);
        setEditingBlog(blog);
    //     Opens the modal.
        // Pre-fills the form with the selected blog's data.
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingBlog(null);
    };

    return (
        <section className="p-4 flex flex-col items-center gap-4">
            {/* Add Blog Button */}
            <button
                onClick={openModalForNewBlog}
                className="flex items-center gap-2 px-4 py-2 bg-pink-400 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition-all"
            >
                Add new Blog
                <IoMdAddCircle className="text-lg" />
            </button>

            {/* Blog List with Edit/Delete functionality */}
            <ArticleList openModalForEditing={openModalForEditing} />

            {/* Modal for Blog Form */}
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={editingBlog ? "Edit Blog" : "Create a New Blog"}
                >
                    <BlogForm existingBlog={editingBlog} onClose={closeModal} />
                </Modal>
            )}
        </section>
    );
}

export default AddBlog;
