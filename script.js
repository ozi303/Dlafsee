document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});