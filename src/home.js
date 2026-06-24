const homePageGenerator = {
	generateHeroSection() {
		const heroDiv = document.createElement("div");
		heroDiv.classList.add("heroDiv");

		const heroDescription = document.createElement("div");
		heroDescription.classList.add("heroDescription");
		heroDescription.innerHTML = `<span class="descriptionText">
                Serving authentic recipes inspired by generations of culinary heritage.
                Every dish is crafted with fresh ingredients and timeless traditions.</span>`;

		const heroImage = document.createElement("div");
		heroImage.classList.add("heroImage");

		heroDiv.appendChild(heroDescription);
		heroDiv.appendChild(heroImage);

		return heroDiv;
	},

	generateTestimonial() {
		const testimonial = document.createElement("div");
		testimonial.classList.add("testimonial");
		testimonial.innerHTML = `<span class="reviewText">\"The best traditional dining experience in town.\"</span>
                <span class="customer">one of our countless satisfied customers</span>`;

		return testimonial;
	},

	generateFooter() {
		const footer = document.createElement("div");
		footer.classList.add("footer");

		const openingHours = document.createElement("div");
		openingHours.classList.add("openingHours");
		openingHours.innerText = "6:00 A.M. - 2:00 A.M.";

		const imageGallery = document.createElement("a");
		imageGallery.classList.add("imageGallery");
		imageGallery.innerText = "Image Gallery";

		const review = document.createElement("a");
		review.classList.add("review");
		review.innerText = "Leave a review :)";

		footer.appendChild(openingHours);
		footer.appendChild(imageGallery);
		footer.appendChild(review);

		return footer;
	},

	generateHomePage() {
		const homePageContent = document.createElement("div");
		homePageContent.classList.add("homePageContent");

		homePageContent.appendChild(homePageGenerator.generateHeroSection());
		homePageContent.appendChild(homePageGenerator.generateTestimonial());
		homePageContent.appendChild(homePageGenerator.generateFooter());

		return homePageContent;
	},
};

export default homePageGenerator.generateHomePage
