const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
	constructor() {
		super({ table: "category", truncate: true });
	}

	run() {
		const categories = [
			{ name: "Comédie" },
			{ name: "Science-Fiction" },
			{ name: "Drame" },
			{ name: "Jeunesse" }
		];

		categories.forEach((category) => {
			const categoryWithRefName = {
				...category,
				refName: `${this.table}_${category.name}`
			};

			this.insert(categoryWithRefName);
		});
	}
}

module.exports = CategorySeeder;
