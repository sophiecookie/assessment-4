module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "You will have a great day!",
            "A surprise is waiting for you!",
            "You will have a wonderful day!",
            "Embrace new opportunities!"
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    getRandomLuckyNumber: (req, res) => {
        const luckyNumbers = [7, 27, 1, 9, 30];
        let randomIndex = Math.floor(Math.random() * luckyNumbers.length);
        let randomLuckyNumber = luckyNumbers[randomIndex];
        res.status(200).send(`Your lucky number is: ${randomLuckyNumber}`);
    },

    getCurrentDate: (req, res) => {
        const currentDate = new Date().toLocaleDateString();
        res.status(200).send(`Today's date is: ${currentDate}`);
    },

    getRandomBabyName: (req, res) => {
        const babyNames = ["Joe", "Jason", "Emma", "Vivian", "Mary"];
        let randomIndex = Math.floor(Math.random() * babyNames.length);
        let randomBabyName = babyNames[randomIndex];
        res.status(200).send(`Here's a random baby name for you: ${randomBabyName}`);
    }




}