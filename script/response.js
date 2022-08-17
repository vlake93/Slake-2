(() => {
  const dataName = document.querySelector("[data-name]");
  const dataEmail = document.querySelector("[data-email]");
  const qStr = window.location.search;
  const urlParams = new URLSearchParams(qStr);
  const name = urlParams.get("name");
  const email = urlParams.get("email");

  dataName.textContent = `Thank you, ${name}!`;
  dataEmail.textContent = `We'll contact you thru your email ${email} `;
})();
