import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ children, title, isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-300 bg-opacity-50 z-20">
            <div className="bg-pink-50 w-full max-w-md rounded-lg shadow-xl p-6 border-2 border-pink-400">
                <h2 className="text-xl font-bold text-pink-700">{title}</h2>
                <div className="py-4 text-pink-700">{children}</div>
                <div className="flex justify-end pt-3 border-t-2 border-pink-300">
                    <button onClick={onClose} className="btn-pink">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
