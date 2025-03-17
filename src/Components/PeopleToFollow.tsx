import UserCard from "./UserCard.tsx";

const peopleToFollow = [
    { name: "Ivan", isFollowing: true },
    { name: "Sophia", isFollowing: false },
    { name: "Liam", isFollowing: true },
    { name: "Emma", isFollowing: false }
];

function PeopleToFollow() {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-md font-bold mb-2">People to Follow</h3>
            <div className="space-y-2">
                {peopleToFollow.map((person, index) => (
                    <UserCard key={index} {...person} />
                ))}
            </div>
        </div>
    );
}

export default PeopleToFollow;
