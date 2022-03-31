import styles from "./Footer.module.scss";

export default Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Killed by tech is the complete tech graveyard. A free and open
				source list of discontinued services, products, devices, and
				apps from companies like Google, Apple and Microsoft.
			</p>
			<p>
				The inspiration for this site and a lot of the information comes from other
				projects like{" "}
				<a
					href="https://killedbygoogle.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Killed by Google
				</a>
				, a project by{" "}
				<a
					href="https://codyogden.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Cody Ogden
				</a>
				. 
			</p>
			<p>
				Contributors from around the world help compile, research, and
				maintain the information about dying and dead products. Do you
				miss a product? Feel free to contribute to this project or
				Cody's on{" "}
				<a
					href="https://github.com/edvinlinden/killedby.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</p>
			<p>
				<a
					href="https://edvinlinden.se?ref=killedby.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
					&copy; {new Date().getFullYear()} Edvin Linden
				</a>
                <a
					href="/privacy"
				>
					Privacy
				</a>
			</p>
		</footer>
	);
};
