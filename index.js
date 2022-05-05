// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.

// Hit parade, classé du premier au dernier.
const hitParade = [
  `Jain - Come`,
  `Matt Simons - Catch & Realease`,
  `Twety One Pilots - Stressed Out`,
  `Justin Bieber - Love Yourself`,
  `Kids United - On écrit sur les murs`,
  `Rihanna - Work`,
  `Julian Perretta - Miracle`,
  `Yall - Hundred Miles`,
  `Kendji Girac - No Me Mirès Màs`,
  `Feder - Blind (feat. Emmi)`,
];

// Votre code va ici
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  return console.log(
    "Que souhaitez vous ?\n- chante\n- classement\n- quitter\n"
  );
}
(() => {
  question();
  rl.on("line", (input) => {
    switch (input) {
      case "chante":
        console.log(
          "Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock"
        );
        question();
        break;
      case "classement":
        for (const [index, element] of hitParade.entries()) {
          console.log(`${index + 1} - ${element}`);
        }
        question();
        break;
      case "quitter":
        console.log("Au Revoir !");
        rl.close();
        break;
      default:
        console.log("Je n'ai pas compris votre demande !");
    }
  });
})();
