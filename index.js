const characterArray = [
    {
        number: 0,
        firstName: "Kimmie",
        lastName: "Kouture",
        imageURL: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEzYWJya2dmaDNxMHp3bGZha3RtMDBxMXRvZzU5NXEyYzlua3R2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YESRhUJfZtOZG/giphy.gif" ,
        points: 10,
        timePopUp: 5,
    },
    {
        number: 1,
        firstName: "Regina",
        lastName: "Gorge",
        imageURL: "resources/images/regina_gorge.png",
        points: 10,
        timePopUp: 5,
    },
    {
        number: 2,
        firstName: "J.Lo",
        lastName: "Glow",
        imageURL: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEzYWJya2dmaDNxMHp3bGZha3RtMDBxMXRvZzU5NXEyYzlua3R2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YESRhUJfZtOZG/giphy.gif" ,
        points: 10,
        timePopUp: 5,
    },
    {
        number: 3,
        firstName: "Mariah",
        lastName: "Magnifique",
        imageURL: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEzYWJya2dmaDNxMHp3bGZha3RtMDBxMXRvZzU5NXEyYzlua3R2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YESRhUJfZtOZG/giphy.gif" ,
        points: 10,
        timePopUp: 5,
    },
    {
        number: 4,
        firstName: "Chloe",
        lastName: "Kardivva",
        imageURL: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEzYWJya2dmaDNxMHp3bGZha3RtMDBxMXRvZzU5NXEyYzlua3R2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YESRhUJfZtOZG/giphy.gif" ,
        points: 10,
        timePopUp: 5,
    },
    {
        number: 5,
        firstName: "Kenye",
        lastName: "Next",
        imageURL: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamEzYWJya2dmaDNxMHp3bGZha3RtMDBxMXRvZzU5NXEyYzlua3R2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YESRhUJfZtOZG/giphy.gif" ,
        points: 10,
        timePopUp: 5,
    },
];


const letterArray = ["A", "B", "C" , "D", "E", "F", "G", "H", "I"];

function randomCharacterGenerator() {
    let randomCharactor = Math.floor(Math.random()*characterArray.length);
    console.log(randomCharactor);
    return randomCharactor;
};


randomCharacterGenerator();

function randomLocationGenerator() {
    let randomLocation = Math.floor(Math.random()*letterArray.length);
    console.log(letterArray [randomLocation]);
    return letterArray [randomLocation];
};
randomLocationGenerator();

