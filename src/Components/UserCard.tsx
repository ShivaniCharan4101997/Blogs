interface UserCardProps {
    name: string;
    isFollowing: boolean;
}

function UserCard({ name, isFollowing }: UserCardProps) {
    return (
        <div className="bg-white p-2 rounded-md shadow-sm flex justify-between items-center">
            <span className="text-pink-600 font-medium">{name}</span>
            <button
                className={`px-3 py-1 text-xs font-medium rounded-md transition ${
                    isFollowing
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
                {isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    );
}

export default UserCard;
