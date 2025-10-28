import Link from "next/link";

export default function Footer() {
	return(
		<footer className="footer sm:footer-horizontal bg-base-100 text-neutral-content items-center p-4">
			<aside className="grid-flow-col items-center">
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</aside>

			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<Link href="mailto:contact@alwin.one">contact@alwin.one</Link> 
			</nav>
		</footer>
	);
}
