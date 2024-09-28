import AnnouncementCard from "./AnnoucementCard";

const Announcements = () => {
    return <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-lg">Announcements</h1>
            <div className="text-xs">View All</div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <AnnouncementCard/>
            <AnnouncementCard/>
            <AnnouncementCard/>
            <AnnouncementCard/>
        </div>
    </div>
}

export default Announcements;