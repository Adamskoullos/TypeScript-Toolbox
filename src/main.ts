console.log("Firing !!!!!!!!!!!!!!");

const el = document.querySelector(".app");

function handleClick(this: HTMLDivElement, event: Event) {
  event.preventDefault();

  console.log(this);
}

el?.addEventListener("click", handleClick);
