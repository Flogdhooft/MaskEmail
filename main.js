const email = "test2026@gmail.com";
// les emails de 2 caractères ne se masqueront pas, exemple : "xy@gmail.com"

const user = email.slice(0, email.indexOf("@"));
const domain = email.slice(email.indexOf("@"));

const maskEmail = () => user[0] + "*".repeat(user.length - 2) + user.slice(-1) + domain;

console.log(`Voici votre email masquée : ${maskEmail()} !`);