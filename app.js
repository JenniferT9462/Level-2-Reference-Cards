// Adds a Copy button to every code block.
document.querySelectorAll(".code").forEach((wrap) => {
  const pre = wrap.querySelector("pre");
  if (!pre) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "copy";
  btn.textContent = "Copy";
  btn.addEventListener("click", () => {
    const text = pre.innerText;
    const done = (label) => {
      btn.textContent = label;
      setTimeout(() => { btn.textContent = "Copy"; }, 1400);
    };
    const selectIt = () => {
      const range = document.createRange();
      range.selectNodeContents(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      done("Selected");
    };
    try {
      navigator.clipboard.writeText(text).then(() => done("Copied"), selectIt);
    } catch (e) {
      selectIt();
    }
  });
  wrap.appendChild(btn);
});
