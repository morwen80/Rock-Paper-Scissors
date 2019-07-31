const randomize = () => {
  const random = [
    '<i class="far fa-hand-rock"></i>',
    '<i class="far fa-hand-scissors"></i>',
    '<i class="far fa-hand-paper"></i>'
  ];

  let randomIcon = random[Math.floor(Math.random() * random.length)];
  document.querySelector('#computerPlay').innerHTML = randomIcon;
};

document.querySelectorAll('button').forEach( btn => btn.addEventListener('click', (e) => {
  e.preventDefault();
  randomize();
  computerPlays(e);
  }
))

const spinning = (e) => {
  let spinner;
  spinner = document.querySelector("#computerPlay");
  spinner.innerHTML = "";
  setTimeout( () => {
    spinner.innerHTML = '<i class="far fa-hand-rock"></i>';
  }, 100);
  setTimeout( () => {
    spinner.innerHTML = '<i class="far fa-hand-scissors"></i>';
  }, 200);
  setTimeout(() => {
    spinner.innerHTML = '<i class="far fa-hand-paper"></i>';
  })

  randomize();
  computerPlays(e);
}

const computerPlays = (e) => {
  let chosenIcon = e.target.className;
  let chosenByPc = document.querySelector('#computerPlay').innerHTML
  let resultBanner = document.querySelector('#result')

  if(
    (chosenIcon.includes("scissors") && chosenByPc.includes("paper")) ||
    (chosenIcon.includes("rock") && chosenByPc.includes("scissors")) ||
    (chosenIcon.includes("paper") && chosenByPc.includes("rock"))
      ) {
      resultBanner.innerHTML = "You Won!"
    }
  else if (
    (chosenIcon.includes("scissors") && chosenByPc.includes("rock")) ||
    (chosenIcon.includes("rock") && chosenByPc.includes("paper")) ||
    (chosenIcon.includes("paper") && chosenByPc.includes("scissors"))
  ) {
    resultBanner.innerHTML = "Ouch. You Lost!"
  } else {
    resultBanner.innerHTML = "It's a draw!"
  }
}
