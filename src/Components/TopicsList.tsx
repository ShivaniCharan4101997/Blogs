import { topics } from "../db/Topics.ts";

function TopicsList() {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-md font-bold mb-2">Topics for You</h3>
            <div className="flex flex-wrap gap-2">
                {topics.map((topic: { name: string }, i: number) => (
                    <p key={i} className="bg-pink-50 px-3 py-1 rounded-full shadow-sm text-pink-700 font-medium text-xs">
                        {topic.name}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default TopicsList;
