const entries = {
	"ROOT": {
		"year": "2023",
		"title": "Linux Cloud Engineer",
		"description": "I landed my first role as a Cloud Engineer at ROOT in Enschede. I'd been tinkering with Kubernetes as a hobby, and that hands-on experience helped me hit the ground running. I got my hands dirty with Infrastructure as Code and dove deep into Linux server management—exactly what I was looking for. However, the role turned out to include much more than what was discussed during hiring—I ended up handling IT Support tasks, including third-party Windows support for external users. While I learned a lot, I eventually realized I was craving more innovation and technical challenges, which led me to look for my next adventure."
	},
	"brainhive": {
		"year": "2024",
		"title": "Developer",
		"description": "I joined brainhive, a startup that really clicked with me—passionate people with serious cloud-native chops. This is where I really leveled up: getting deep into Google Cloud Platform, managing Kubernetes clusters, and eventually earning my CKA certification. As the company pivoted, my role evolved too. I transitioned more into DevOps work and started being outsourced to WellSync, a U.S.-based startup, working as their DevOps Engineer several days a week. It was an incredible experience working across teams and organizations, but when the opportunity came to join a small, focused team at Zonneplan and help them migrate to Kubernetes, I couldn't pass it up."
	},
	"Zonneplan": {
		"year": "2025",
		"title": "Cloud Engineer",
		"description": "Joining Zonneplan meant getting to work on something truly exciting—a complete ground-up cloud transformation. Great mission, awesome people, and cutting-edge tech, all in Zwolle. I jumped in headfirst and built their entire Google Cloud Platform from scratch using Terragrunt, deployed multi-tenant Kubernetes clusters managed with FluxCD, and led an organization-wide migration to Google Cloud Identity. What started as helping them adopt Kubernetes turned into architecting their entire cloud-native foundation. Now I'm working with an amazing team to scale this platform and power a greener future."
	}
}

export default function Timeline() {
	return(
		<div className="hero bg-base-100 min-h-screen">
			<div className="hero-content">
				<ul className="timeline max-md:timeline-snap timeline-vertical">
					<li>
					</li>
				</ul>
			</div>	
		</div>
	);
}
