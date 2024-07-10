const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
	constructor() {
		super({ table: "program", truncate: true, dependency: [CategorySeeder] });
	}

	run() {
		const programs = [
	      {
	        title: "The Good Place",
	        synopsis:
	          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
	        poster:
	          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
	        country: "USA",
	        year: 2016,
	        category_id: this.getRef("category_Comédie").insertId
	      },
	      {
	        title: "Dark",
	        synopsis:
	          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
	        poster:
	          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
	        country: "Allemagne",
	        year: 2017,
	        category_id: this.getRef("category_Science-Fiction").insertId
	      },
	      {
	      	title: "Heroes",
	      	synopsis:
	      		"Partout dans le monde, un certain nombre d'individus en apparence ordinaires se révèlent dotés de capacités hors du commun : la régénération cellulaire, la téléportation, la télépathie... Ils ne savent pas ce qui leur arrive, ni les répercussions que tout cela pourrait avoir. Ils ignorent encore qu'ils font partie d'une évolution qui va changer le monde à jamais !",
			poster:
				"https://img.betaseries.com/UQxVpx3bXCVrbgwmQUq0duwAzsY=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F7b08aaf4cb6afb977026606b5e3f90bb.jpg",
			country: "USA",
			year: 2006,
			category_id: this.getRef("category_Drame").insertId
	      },
	      {
	      	title: "Phineas and Ferb",
	      	synopsis:
	      		"La série suit les aventures de deux demi-fères, Phinéas Flynn et Ferb Fletcher, qui tentent de s'occuper pendant leurs vacances d'été avec d'incroyables inventions au grand regret de leur grande sœur, Candice, qui va constamment essayé de les piégés, sans succès. Sans oublier, le professeur Doofenschmirtz qui essaye de prendre le contrôle du secteur des Trois Etats avec ses plans complétement loufoques mais toujours déjouer par Perry, l'ornithorynque des garcons, qui s'avère être un agent secret.",
	      	poster:
	      		"https://img.betaseries.com/vV46GQTg2g-qtMgFY-3e0ezG5e4=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fdd8b1351cfe69d047f8c3b232dacf294.jpg",
	      	country: "USA",
	      	year: 2007,
	      	category_id: this.getRef("category_Jeunesse").insertId
	      }
	    ];

		programs.forEach((program) => {
			this.insert(program);
		});
	}
}

module.exports = ProgramSeeder;
