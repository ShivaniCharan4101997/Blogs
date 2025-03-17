import { trends } from "../db/Trends.ts";

interface Trend {
    title: string;
    author: string;
}

const TrendsList = () => {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-md font-bold mb-2">Today's Top Trends</h3>
            <ul className="space-y-2">
                {trends.map((trend: Trend, i: number) => (
                    <li key={i} className="bg-white p-2 rounded-md shadow-sm flex flex-col gap-1">
                        <p className="text-pink-700 font-semibold">{trend.title}</p>
                        <p className="text-gray-600 text-xs">By {trend.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendsList;
