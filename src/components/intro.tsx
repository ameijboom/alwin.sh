import Image from 'next/image';

export default function Intro() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <Image 
                    src="https://avatars.githubusercontent.com/u/26851843?v=4"
                    className="max-w-sm rounded-full"
                    height={512}
                    width={512}
                    alt="Me lol"
                />

                <div className="">
                    <h1 className="text-5xl font-bold">Alwin Meijboom</h1>
                    <p className="py-6">DevOps Engineer & Cloud-Native Developer from Zwolle;</p>
                </div>
            </div>
        </div>
    )
}