import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";

export default function Header() {
	return (
		<div className="navbar bg-base-200">
			<div className="flex-1">
				<a href="https://github.com/ameijboom/alwin.sh" target="_blank" className="btn btn-ghost"><Github /></a>
			</div>
			<div className="flex-none">
				<a href="" className="btn btn-ghost"><Twitter /></a>
				<a href="https://nl.linkedin.com/in/alwin-meijboom-94908b154" target="_blank" className="btn btn-ghost"><Linkedin /></a>
				<a href="https://matrix.to/#/@alwin:chat.alwin.sh" target="_blank" className="btn btn-ghost"><MessageCircle /></a>
			</div>
		</div>
	);
}
