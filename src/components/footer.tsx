import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Footer() {
	return(
		<footer className="footer bg-base-100 text-center items-center p-4 grid-flow-col md:grid-cols-3">
			<aside className="grid-flow-col items-center md:justify-self-start sm:justify-self-center">
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>

			</aside>

			<label className="grid-flow-col swap swap-rotate place-self-end justify-self-end sm:grid md:hidden">
				<input type="checkbox" className="theme-controller" value="nord"/>
				<Moon className="swap-off h-5 w-5"></Moon>
				<Sun className="swap-on h-5 w-5"></Sun>
			</label>

			<div className="grid-flow-col items-center md:justify-self-center hidden md:grid">
				<label className="swap swap-rotate">

					<input type="checkbox" className="theme-controller" value="nord"/>

					<Moon className="swap-off h-5 w-5"></Moon>
					<Sun className="swap-on h-5 w-5"></Sun>
				</label>
			</div>

			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end hidden md:grid">
				<Link href="mailto:contact@alwin.one">contact@alwin.one</Link> 
			</nav>
		</footer>
	);
}
