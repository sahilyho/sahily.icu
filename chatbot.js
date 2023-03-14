/** @format */
fetch('http://localhost:3000/projects.html', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'Hello' })
})
.then(response => response.json())
.then(data => {
  // Handle the response data here
  console.log(data);
})
.catch(error => console.error(error));
const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let user = { message: "" };
const userInfo = {
	name: "",
	age: "",
	message: "",
	videogames: "",
};
const userMessage = [
	{ message: "cry", answer: "Wahhhhhhhhhhh :(. So sad." },
	{ message: "hello", answer: "Hello! What can I do for you?" },
	{ message: "red or black?", answer: "Black." },
	{ message: "should I buy?", answer: "I can't give you advice on that." },
	{ message: "hey", answer: "Hey there! How can I assist you?" },
	{ message: "you are stupid", answer: "I'm not a robot anymore. I'm stupid." },
	{
		message: "how are you?",
		answer: "I'm doing great, thanks for asking! How can I assist you today?",
	},
	{ message: "good", answer: "Glad to hear it!" },
	{
		message: "bad",
		answer: "I'm sorry to hear that.",
	},
	{
		message: "what's up?",
		answer: "Not much, just here to help you.",
	},
	{
		message: "what do you do?",
		answer:
			"I'm a chatbot here to assist you with any questions or concerns you may have.",
	},
	{
		message: "what's your name?",
		answer: "My name is Cherrie. How can I assist you today?",
	},
	{
		message: "can you help me?",
		answer: "Of course! What do you need help with?",
	},
	{ message: "I have a question", answer: "Sure thing! What's your question?" },
	{
		message: "do you understand me?",
		answer: "Yes, I understand you perfectly! What can I help you with?",
	},
	{
		message: "can you explain that?",
		answer:
			"Sure, I'd be happy to explain that to you. What specifically would you like me to explain?",
	},
	{
		message: "I need help with something",
		answer: "No problem, I'm here to help! What do you need help with?",
	},
	{
		message: "what are your capabilities?",
		answer: "I can answer questions?",
	},
	{
		message: "where are you located?",
		answer: "I'm an online chatbot, so I don't have a physical location.",
	},
	{
		message: "what's the weather like?",
		answer:
			"I'm sorry, I don't have access to that information. Is there anything else I can help you with?",
	},
	{
		message: "what's your favorite color?",
		answer:
			"As a chatbot, I don't have personal preferences like humans do. Is there anything else I can assist you with?",
	},
	{
		message: "what's the meaning of life?",
		answer:
			"That's a tough question. Philosophers have been debating that for centuries. Is there anything else I can assist you with?",
	},
	{
		message: "what's the capital of France?",
		answer:
			"The capital of France is Paris. Is there anything else I can help you with?",
	},
	{
		message: "how do I contact customer support?",
		answer:
			"You can usually find customer support contact information on a company's website or by calling their customer service number. Is there anything else I can assist you with?",
	},
	{
		message: "can you tell me a joke?",
		answer:
			"Sure, here's a joke for you: Why did the tomato turn red? Because it saw the salad dressing! Is there anything else I can assist you with?",
	},
	{
		message: "what's the meaning of the word 'antidisestablishmentarianism'?",
		answer:
			"Antidisestablishmentarianism is a political philosophy that originated in 19th century Britain. Is there anything else I can help you with?",
	},
	{
		message: "what's the difference between a crocodile and an alligator?",
		answer:
			"Crocodiles have longer and more V-shaped snouts, while alligators have wider, U-shaped snouts. Is there anything else I can assist you with?",
	},
	{
		message: "can you recommend a good restaurant?",
		answer:
			"I'm sorry, as a chatbot, I don't have personal experiences with restaurants. However, you can check online reviews or ask friends for recommendations. Is there anything else I can help you with?",
	},
	{
		message: "what's the best way to learn a new language?",
		answer:
			"There are many effective ways to learn a new language, such as taking classes, practicing with a tutor or language partner, or using language-learning apps. Is there anything else I can assist you with?",
	},
	{
		message:
			"what's the meaning of the word 'pneumonoultramicroscopicsilicovolcanoconiosis'?",
		answer:
			"Pneumonoultramicroscopicsilicovolcanoconiosis is a medical term that refers to a lung disease caused by inhaling very fine silica particles. Is there anything else I can assist you with?",
	},
	{
		message: "how do I book a flight?",
		answer:
			"You can usually book a flight online through an airline's website or through a travel booking website. Is there anything else I can help you with?",
	},
	{
		message: "what's the best way to save money?",
		answer:
			"There are many effective ways to save money, such as creating a budget, reducing unnecessary expenses, and investing wisely. Is there anything else I can assist you with?",
	},
	{
		message: "what's the difference between a credit card and a debit card?",
		answer:
			"A credit card allows you to borrow money from a bank or credit card company, while a debit card allows you to spend money directly from your bank account. Is there anything else I can assist you with?",
	},
	{
		message: "what's the meaning of the word 'onomatopoeia'?",
		answer:
			"Onomatopoeia is a linguistic term that refers to words that imitate the sounds they represent, such as 'buzz' or 'hiss'. Is there anything else I can assist you with?",
	},
	{
		message: "how do I improve my credit score?",
		answer:
			"You can improve your credit score by paying bills on time, keeping credit card balances low, and avoiding opening too many new accounts at once. Is there anything else I can assist you with?",
	},
	{
		message: "what's the best way to stay healthy?",
		answer:
			"There are many ways to stay healthy, such as eating a balanced diet, getting regular exercise, and getting enough sleep. Is there anything else I can assist you with?",
	},
	{
		message:
			"what's the meaning of the word 'supercalifragilisticexpialidocious'?",
		answer:
			"Supercalifragilisticexpialidocious is a nonsense word that was popularized in the 1964 film 'Mary Poppins'. Is there anything else I can assist you with?",
	},
	{
		message: "what's the best way to study for a test?",
		answer:
			"Effective study techniques include reviewing notes, practicing with sample questions, and creating study guides. Is there anything else I can assist you with?",
	},
	{
		message: "what's the difference between a 401(k) and an IRA?",
		answer:
			"A 401(k) is a retirement savings plan offered by an employer, while an IRA is an individual retirement account that can be opened by anyone.",
	},
];

const dadJokes = [
	"Why don't scientists trust atoms? Because they make up everything.",
	"Why don’t skeletons fight each other? They don’t have the guts.",
	"I'm reading a book about anti-gravity. It's impossible to put down!",
	"I used to play piano by ear, but now I use my hands.",
	"I don't trust people who do acupuncture. They're back stabbers.",
	"What do you call a fake noodle? An impasta.",
	"Why do chicken coops only have two doors? Because if they had four, they'd be a chicken sedan.",
	"Why did the scarecrow win an award? Because he was outstanding in his field.",
	"What do you call a group of cows playing instruments? A moo-sical band.",
	"Why was the math book sad? Because it had too many problems.",
];
function getRandomJoke() {
	const randomIndex = Math.floor(Math.random() * dadJokes.length);
	return dadJokes[randomIndex];
}

function scrollToBottom() {
	chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function cherrieSays(message) {
	let el = document.createElement("div");

	el.classList.add("w-50", "float-left", "shadow-sm");
	el.style.margin = "10px";
	let userIcon = document.createElement("i");
	userIcon.classList.add("fa-solid", "fa-robot");

	el.innerHTML =
		"<span><i class='fa-solid fa-robot'></i>" +
		" " +
		"</span>" +
		"<span style='margin-top: 10px; padding: 10px'>" +
		message +
		"</span>";

	el.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], {
		duration: 500,
	});
	chatContainer.appendChild(el);
	scrollToBottom();
}

setTimeout(function () {
	cherrieSays(
		"Hi. We can talk about the weather, stock prices, or I can tell you a joke. We can chat about a limited amount of things."
	);
}, 1000);

async function userSays(message) {
	let el = document.createElement("div");

	el.classList.add("w-50", "float-right", "shadow-sm");
	el.classList.add("float-right");
	el.classList.add("shadow-sm");
	el.style.margin = "10px";
	el.style.marginLeft = "9rem";
	el.style.padding = "5px";
	let userIcon = document.createElement("i");
	userIcon.classList.add("fa-solid", "fa-user");

	el.innerHTML =
		"<span><i class='fa-solid fa-user'></i>" +
		" " +
		"<span style=" +
		"<span style='margin-top: 10px; padding: 10px'>" +
		message +
		"</span>";

	el.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], {
		duration: 500,
	});

	chatContainer.appendChild(el);
	scrollToBottom();
}

function processUserInput(e) {
	if (textbox.value == "") {
		cherrieSays("Would you like to talk?");
	} else {
		user.message = textbox.value;
		let text = textbox.value;
		userSays(text);
		textbox.value = "";
		analyzeMessage();
	}
}

// Get the weather
async function getWeather() {
	try {
		const { coords } = await getCurrentPosition();
		const lat = coords.latitude;
		const lon = coords.longitude;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weather_api_key}`
		);
		const data = await response.json();
		const temp = data.main.temp;
		const description = data.weather[0].description;
		const city = data.name;
		const weather = `The temperature in ${city} is ${temp}°C and ${description}.`;
		return weather;
	} catch (error) {
		console.error(error);
	}
}

function getCurrentPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

// Get stock prices
async function getStockPrices(ticker, price) {
	try {
		const response = await fetch(
			`https://api.twelvedata.com/price?symbol=${ticker}&apikey=${stock_api_key}`
		);

		const jsonResponse = await response.json();
		price = jsonResponse.price;
		return price;
	} catch (error) {
		console.error(error);
	}
}

function getCapitalizedNames(sentence) {
	const words = sentence.split(" ");
	const nameIndex = words.findIndex((word) => word.toLowerCase() === "name");
	const name = words[nameIndex + 2];
	if (name && /^[A-Z]/.test(name)) {
		return name.replace(/\W/g, "");
	}
	return "";
}

async function analyzeMessage() {
	let message = user.message.toLowerCase();
	message = message.replace(/i'm/g, "i am");
	message = message.replace(/you're/g, "you are");
	message = message.replace(/gonna/g, "going to");
	message = message.replace(/wanna/g, "want to");
	if (user.message.toLowerCase().includes("weather")) {
		const weather = await getWeather();
		cherrieSays(weather);
	} else if (user.message.toLowerCase().includes("stock")) {
		const ticker = prompt("Enter stock ticker.");
		userSays(ticker);
		const price = await getStockPrices(ticker);
		cherrieSays(`The current price of ${ticker} is $${price}.`);
	} else {
		switch (userInfo) {
			case userInfo.name === "":
				// Ask for user's name
				setTimeout(function () {
					cherrieSays("May I know your name please?");
				}, 1000);
				break;
			case userInfo.age === "":
				// Ask for user's age
				setTimeout(function () {
					cherrieSays("How old are you?");
				}, 1000);
				break;
			default:
				console.log(userInfo.name);
		}
		if (user.message.length >= 2) {
			let newArray = userMessage.filter((v) =>
				v.message.includes(user.message.toLowerCase())
			);
			if (newArray.length > 0) {
				let response = newArray[0].answer;
				setTimeout(function () {
					cherrieSays(response);
				}, 1000);
			} else if (user.message.includes("another joke")) {
				setTimeout(function () {
					if (userInfo.name.length > 0) {
						cherrieSays(`Sure, ${userInfo.name}. ${getRandomJoke()}`);
					} else {
						setTimeout(function () {
							cherrieSays(`Sure. ${getRandomJoke()}`);
						}, 1000);
					}
				}, 1000);
			} else if (user.message.includes("stupid")) {
				setTimeout(function () {
					if (userInfo.name.length > 0) {
						cherrieSays(`${userInfo.name}, stupid is not a nice word.`);
					} else {
						setTimeout(function () {
							cherrieSays("Stupid is not a nice word.");
						}, 1000);
					}
				}, 1000);
			} else if (user.message.includes("Donald Trump")) {
				setTimeout(function () {
					cherrieSays(
						"Donald J. Trump is the 45th President of the United States."
					);
				}, 1000);
			} else if (user.message.includes("Joe Biden")) {
				setTimeout(function () {
					cherrieSays("Joe Biden is the 46th President of the United States.");
				}, 1000);
			} else if (
				user.message.includes("fuck") ||
				user.message.includes("dumbass") ||
				user.message.includes("cunt") ||
				user.message.includes("bitch")
			) {
				setTimeout(function () {
					if (userInfo.name.length > 0) {
						cherrieSays(`Woah, watch the language, ${userInfo.name}!`);
					} else {
						setTimeout(function () {
							cherrieSays("Woah, watch the language.");
						}, 1000);
					}
				}, 1000);
			} else if (user.message.includes("I'm funny")) {
				setTimeout(function () {
					if (userInfo.name.length > 0) {
						cherrieSays(`Haha. You're so funny, ${userInfo.name}.`);
					} else {
						cherrieSays("Haha. You're so funny.");
					}
				}, 1000);
			} else if (user.message.toLowerCase().includes("my name")) {
				setTimeout(function () {
					if (userInfo.name === "") {
						let name = getCapitalizedNames(user.message);
						console.log(name);
						userInfo.name = name;
						cherrieSays(`Nice to meet you, ${userInfo.name}.`);
					} else {
						if (userInfo.name !== "") {
							cherrieSays(`Your name is ${userInfo.name}.`);
						} else {
							cherrieSays("Your name?");
						}
					}
				}, 1000);
			}
		} else if (user.message.toLowerCase().includes("hi")) {
			setTimeout(function () {
				if (userInfo.name.length > 0) {
					cherrieSays(`Hi, ${userInfo.name}.`);
				} else {
					cherrieSays("Hi.");
				}
			}, 1000);
		} else if (
			user.message.includes("videogames") ||
			user.message.includes("video games")
		) {
			setTimeout(function () {
				if (userInfo.videogames.length > 0) {
					cherrieSays(`I don't play videogames, ${userInfo.name}.`);
				} else {
					cherrieSays("What's your favorite videogame?");
				}
			}, 1000);
		} else if (user.message == "who" || user.message == "how") {
			setTimeout(function () {
				cherrieSays("Hmn...could you elaborate?");
			}, 1000);
		} else {
			setTimeout(function () {
				cherrieSays("I apologize. I'm not advanced enough to understand.");
			}, 1000);
		}
	}
}

// Add event listener to textbox input field
textbox.addEventListener("keyup", function (event) {
	// Check if "Enter" key was pressed
	if (event.key === "Enter") {
		// Trigger click event on sendBtn
		sendBtn.click();
	}
});

sendBtn.addEventListener("click", processUserInput);
