interface entry {
    position: string;
    company: string;
    title: string;
    year: string;
    description: string;
}

interface props {
    entry: entry
}

export default function TimelineEntry({ entry }: props) {
    return(
        <li>
            <hr className="bg-base-200" />
                <div className={`timeline-${entry.position} mb-10 md:text-start px-5`}>
                    <time className="italic">{entry.year}</time>
                    <div className="text-lg font-black">{entry.company}: {entry.title}</div>
                    <p className={`md:text-start`} dangerouslySetInnerHTML={{ __html: entry.description }} />
                </div>
            <hr className="bg-base-200" />
        </li>
    );
}
