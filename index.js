document.addEventListener("DOMContentLoaded", () => {
  //DOM elememts
  const button = document.querySelector("button");
  const quote = document.querySelector("blockquote h1");
  const cite = document.querySelector("blockquote cite");

  async function generateRandomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "uhmmmm......writting new quotes for u ";
    }
  }
  button.addEventListener("click", generateRandomQuote);
  generateRandomQuote();
});
