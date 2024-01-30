const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector("#fortuneButton");
const luckyNumberBtn = document.querySelector("#luckyNumberButton");
const currentDateBtn = document.querySelector("#currentDateButton");
const babyNameBtn = document.querySelector("#babyNameButton");



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getRandomLuckyNumber = () => {
    axios.get("http://localhost:4000/api/luckynumber/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getCurrentDate = () => {
    axios.get("http://localhost:4000/api/currentdate/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getRandomBabyName = () => {
    axios.get("http://localhost:4000/api/babyname/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
luckyNumberBtn.addEventListener('click', getRandomLuckyNumber);
currentDateBtn.addEventListener('click', getCurrentDate);
babyNameBtn.addEventListener('click', getRandomBabyName);


