//This BlogForm.tsx component allows users to create or update a blog post with a title, description, and image URL. The form pre-fills data when editing an existing blog and updates the preview dynamically.


import { useEffect, useState } from "react";
import { Blog } from "../ts/Blogs.ts";
import { useBlogs } from "../Contexts/BlogContext.tsx";
import React from "react";

// useEffect & useState – Used for state management and side effects.
// Blog type – Defines the structure of a blog post.
// useBlogs – Custom React Hook for accessing the BlogContext.




interface BlogFormProps {
    existingBlog?: Blog | null;
    onClose: () => void;
}
// existingBlog (optional) – If editing, it contains the blog’s current details.
// onClose – Function to close the form after submission.

function BlogForm({ existingBlog, onClose }: BlogFormProps) {
    // Accepts existingBlog (if editing) and onClose (to close the modal).
    const { addBlog, updateBlog } = useBlogs();
    const [title, setTitle] = useState(existingBlog?.title || "");
    const [description, setDescription] = useState(existingBlog?.description || "");
    const [imageUrl, setImageUrl] = useState(existingBlog?.image || "");
    const [previewImage, setPreviewImage] = useState(existingBlog?.image || "");


    //title – Stores the blog's title.
    // description – Stores the blog’s content.
    // imageUrl – Stores the image URL.
    // previewImage – Stores the preview version of the image.
    // If an existingBlog is provided (editing mode), it pre-fills the fields with the blog’s current values.




    useEffect(() => {
        if (existingBlog) {
            setTitle(existingBlog.title);
            setDescription(existingBlog.description);
            setImageUrl(existingBlog.image || "");
            setPreviewImage(existingBlog.image || "");
        }

        // Runs only when existingBlog changes.
        // Updates the input fields when switching between different blogs to edit.
    }, [existingBlog]);

    // Handle Image URL Input
    const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.target.value);
        setPreviewImage(e.target.value)

    //     setImageUrl(e.target.value) – Updates the image URL state.
        // setPreviewImage(e.target.value) – Updates the preview image dynamically.
    };

    // Handle Form Submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const blogData: Blog = {
            id: existingBlog?.id || crypto.randomUUID(),
            title,
            description,
            time: existingBlog?.time || new Date().toISOString(),
            image: imageUrl,
        };

        if (existingBlog) {
            updateBlog(blogData);
        } else {
            addBlog(blogData);
        }

        onClose();
    //     Prepares blogData – Uses existing blog ID (if editing) or creates a new one.
        // Adds or updates the blog – Calls addBlog or updateBlog accordingly.
        // Closes the modal after submission.
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Title Input */}
            <div>
                <label className="block text-pink-600 font-semibold">Title</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border-2 border-pink-300 rounded-md"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            {/* Content Input */}
            <div>
                <label className="block text-pink-600 font-semibold">Content</label>
                <textarea
                    rows={4}
                    className="w-full px-3 py-2 border-2 border-pink-300 rounded-md"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            {/* Image URL Input */}
            <div>
                <label className="block text-pink-600 font-semibold">Enter Image URL</label>
                <input
                    type="text"
                    placeholder="Enter image valid url..."
                    value={imageUrl}
                    onChange={handleImageUrlChange}
                    className="w-full px-3 py-2 border-2 border-pink-300 rounded-md"
                    required
                />
            </div>

            {/* Preview Image */}
            {previewImage && (
                <img src={previewImage} alt="Preview" className="mt-2 w-full h-40 object-cover rounded-md" />
            //     Displays a live preview of the image entered by the user.
                // Only shows when a valid previewImage exists.
            )}

            {/* Submit Button */}
            <button type="submit" className="px-4 py-2 bg-pink-400 text-white rounded-md">
                {existingBlog ? "Update Blog" : "Create Blog"}
            </button>
        </form>
    );
}

export default BlogForm;
