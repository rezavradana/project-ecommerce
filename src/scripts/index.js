import "regenerator-runtime";
import "../styles/main.scss";
import App from "./views/app";

document.addEventListener("DOMContentLoaded", () => {
	const app = new App({
		wishlist: document.querySelector(".wishlist"),
		cart: document.querySelector(".cart"),
		loginlogout: document.querySelector(".login-logout"),
	});

	window.addEventListener("hashchange", async () => {
		await app.renderPage();
	});

	window.addEventListener("load", async () => {
		await app.renderPage();
	});

	// Navbar Drawer
	const drawer = document.querySelector("#drawer");
	const menuNavBar = document.querySelector(".menu-navbar");
	if (drawer && menuNavBar) {
		drawer.addEventListener("click", () => {
			menuNavBar.classList.toggle("open");
			const isOpen = menuNavBar.classList.contains("open");
			drawer.setAttribute("aria-expanded", isOpen);
		});

		window.addEventListener("resize", () => {
			if (window.innerWidth > 768) {
				menuNavBar.classList.remove("open");
				drawer.setAttribute("aria-expanded", "false");
			}
		});
	}
});

// FAQ
const faqButton = document.getElementById("faq-button");
const faqModal = document.getElementById("faq-modal");
const faqClose = document.getElementById("faq-close");
const mainContent = document.getElementById("maincontent");

// Tampilkan Pop-up FAQ
faqButton.addEventListener("click", () => {
	faqModal.style.display = "flex";
	mainContent.classList.add("blur");
});

// Tutup Pop-up FAQ
faqClose.addEventListener("click", () => {
	faqModal.style.display = "none";
	mainContent.classList.remove("blur");
});

window.addEventListener("click", (event) => {
	if (event.target === faqModal) {
		faqModal.style.display = "none";
		mainContent.classList.remove("blur");
	}
});

// FAQ Collapsible Behavior
const toggleButtons = document.querySelectorAll(".toggle-answer");
toggleButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const answer = e.target
			.closest(".faq-item")
			.querySelector(".faq-answer");
		const isVisible = answer.style.display === "block";

		// Toggle Answer Visibility
		answer.style.display = isVisible ? "none" : "block";

		// Rotate Arrow
		e.target.innerHTML = isVisible ? "&#9660;" : "&#9650;";
	});
});

/// About
document.addEventListener("DOMContentLoaded", () => {
	const floatingPage = document.getElementById("about-us-floating");
	const aboutNavButton = document.getElementById("about-nav");
	const closeButton = document.getElementById("close-floating");
	const closeFloatingButton = document.getElementById(
		"close-floating-button"
	);

	// Event listener untuk membuka floating page saat tombol About di navbar diklik
	aboutNavButton.addEventListener("click", (e) => {
		e.preventDefault(); // Mencegah link reload
		floatingPage.classList.add("active");
	});

	// Event listener untuk menutup floating page saat tombol close (X) diklik
	closeButton.addEventListener("click", () => {
		floatingPage.classList.remove("active");
	});

	// Event listener untuk menutup floating page saat tombol "Belanja Sekarang" diklik
	closeFloatingButton.addEventListener("click", () => {
		floatingPage.classList.remove("active");
	});
});
