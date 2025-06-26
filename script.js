// script.js

// ===== Journal Prompt Feature =====
const prompts = [
  "What is something you need to let go of today?",
  "What would you say to your younger self?",
  "What does healing look like for you right now?",
  "Write down 3 things you’re proud of yourself for.",
  "What is something you’ve survived that you never thought you would?",
  "If you could speak to someone you miss, what would you tell them?",
  "What does being at peace mean to you?",
  "How have you grown in the past year — emotionally or spiritually?",
  "Who are you when no one else is around?",
  "What’s one kind thing you can do for yourself this week?"
];

function showJournalPrompt() {
  const box = document.getElementById('prompt-display');
  const randomIndex = Math.floor(Math.random() * prompts.length);
  box.textContent = prompts[randomIndex];
  box.style.display = 'block';
}

// ===== Reflection Box Feature =====
function submitReflection() {
  const input = document.getElementById('hope-input');
  const list = document.getElementById('reflections-list');
  const text = input.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  }
}

// ===== Light a Candle Feature =====
function lightCandle() {
  const input = document.getElementById('candle-input');
  const wall = document.getElementById('candle-wall');
  const message = input.value.trim();

  if (message) {
    const div = document.createElement('div');
    div.classList.add('candle-message');
    div.innerHTML = `🕯 ${message}`;
    wall.prepend(div);
    input.value = '';
  }
}

// ===== Positivity Quotes Feature =====
const quotes = [
  { text: "You are not behind — you are becoming.", category: "Growth" },
  { text: "Just because it's hard doesn't mean you're weak. It means you're trying.", category: "Encouragement" },
  { text: "Healing isn't pretty, but you're still doing it.", category: "Healing" },
  { text: "You’ve already survived 100% of your worst days.", category: "Strength" },
  { text: "The cracks are where the light gets in.", category: "Healing" },
  { text: "You’re allowed to be both a masterpiece and a work in progress.", category: "Growth" },
  { text: "You’re stronger than the storm you’re walking through.", category: "Strength" },
  { text: "Small steps are still steps. Keep going.", category: "Encouragement" }
];

function showQuotes(category = "all") {
  const list = document.getElementById("quote-list");
  list.innerHTML = "";

  const filtered = category === "all"
    ? quotes
    : quotes.filter(q => q.category.toLowerCase() === category.toLowerCase());

  filtered.forEach(q => {
    const li = document.createElement("li");
    li.classList.add("quote-card");
    li.textContent = q.text;
    list.appendChild(li);
  });
}

// ===== Random Quote Button Feature =====
function showRandomQuote() {
  const box = document.getElementById("random-quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  box.textContent = quotes[randomIndex].text;
  box.style.display = 'block';
  box.classList.remove("fade-in");
  void box.offsetWidth; // trigger reflow for restart
  box.classList.add("fade-in");
}

// ===== Submit Community Quote =====
function submitCommunityQuote() {
  const input = document.getElementById("user-quote");
  const text = input.value.trim();
  const list = document.getElementById("submitted-quotes");

  if (text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("quote-card");
    list.appendChild(li);
    input.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Quote filter buttons
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      showQuotes(category);

      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Add event listener for community quote submission
  const submitQuoteButton = document.getElementById("submit-quote");
  if (submitQuoteButton) {
    submitQuoteButton.addEventListener("click", submitCommunityQuote);
  }

  showQuotes(); // Default all quotes

  // ===== Quote of the Day =====
  const quoteOfDay = quotes[Math.floor(Math.random() * quotes.length)];
  const dailyQuoteElement = document.getElementById("daily-quote");
  if (dailyQuoteElement) {
    dailyQuoteElement.textContent = quoteOfDay.text;
  }
});
