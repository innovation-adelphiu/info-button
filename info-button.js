function appendInfoButton()
{

var STYLE = `
:root 
{
  --font-color: white;
  --outline-color: black;
  --font-glow-color: #6699ffff;
  --background-color: #00000022;
  --background-glow-color: #0000FF22; 
}

.info-button 
{
    position: fixed; top: 12px; right: 12px;
    width: 48px; height: 48px;
    border-radius: 50%;
    
    font-family:'Times New Roman', Times, serif;
    font-size: 36px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    cursor: pointer; z-index: 99997;

    color: var(--font-color);
    
    background: var(--background-color);

    text-shadow:
        1px  0   var(--outline-color),
        -1px  0   var(--outline-color),
        0   1px  var(--outline-color),
        0  -1px  var(--outline-color),
        1px  1px var(--outline-color),
        -1px -1px var(--outline-color),
        1px -1px var(--outline-color),
        -1px  1px var(--outline-color),
        0px 0px 3px var(--outline-color),
        0px 0px 4px var(--outline-color),
        0px 0px 5px var(--outline-color),
        0px 0px 6px var(--outline-color);

    box-shadow:
        0 0 0 1px var(--outline-color),
        0 0 0 3px var(--font-color),
        0 0 0 5px var(--outline-color),
        0 0 5px 2px var(--outline-color),
        0 0 5px 3px var(--outline-color),
        0 0 5px 4px var(--outline-color);

    transition: color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
}

.info-button:hover 
{ 
    color: var(--font-glow-color);

    box-shadow:
        0 0 0 1px var(--outline-color),
        0 0 0 3px var(--font-glow-color),
        0 0 0 5px var(--outline-color),
        0 0 5px 2px var(--font-glow-color),
        0 0 5px 3px var(--font-glow-color),
        0 0 5px 4px var(--font-glow-color);

    background: var(--background-glow-color);
}

.info-shaded-overlay 
{
  position: fixed; 
  inset: 0; 
  background: rgba(0,0,0,0.5);
  z-index: 99998;
}

.info-dialog-box 
{
  position: fixed; top: 50%; left: 50%;
  width: 400px; height: 200px; transform: translate(-50%, -50%);
  background: #ffffff; 
  border: 2px solid #000000; border-radius: 8px; 
  padding: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  z-index: 99999; 
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #000000;
  display: flex; align-items: center; justify-content: center; text-align: center;
}

.info-dialog-box a { color: #006699; text-decoration: underline; }
.info-dialog-box a:hover { color: #993333ff; text-decoration: underline; }

.info-close-button 
{
  position: absolute; top: 10px; right: 10px;
  width: 40px; height: 40px; border-radius: 4px;
  border: 2px solid #880000; 
  color: #880000;
  background: #88000011; cursor: pointer;
  display: flex; align-items: center; justify-content: center; text-align: center;
  font-size: 20px; line-height: 1; 
}
`;

var styleTag = document.createElement("style");
styleTag.textContent = STYLE;
document.head.appendChild(styleTag);

var infoButton = document.createElement("button");
infoButton.className = "info-button";
infoButton.title = "About this page";
infoButton.textContent = "i";
document.body.appendChild(infoButton);

infoButton.addEventListener("click", function (e) {
    e.stopPropagation();

    var overlay = document.createElement("div");
    overlay.className = "info-shaded-overlay";

    var dialogBox = document.createElement("div");
    dialogBox.className = "info-dialog-box";

    var closeButton = document.createElement("button");
    closeButton.className = "info-close-button";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.textContent = "✖";

    var dialogBoxText = document.createElement("p");
    dialogBoxText.innerHTML =
      `This application is provided as part of the <br>
      Adelphi University Innovation Center <br>
      free and open-source app collection. <br>
      <br>
      For more applications, visit: <br>
      <a href="http://innovation-adelphiu.github.io/" target="_blank">
      http://innovation-adelphiu.github.io/</a>.
      `;

    dialogBox.appendChild(closeButton);
    dialogBox.appendChild(dialogBoxText);
    document.body.appendChild(overlay);
    document.body.appendChild(dialogBox);

    // Lock scroll
    var previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeAll() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (dialogBox.parentNode) dialogBox.parentNode.removeChild(dialogBox);
      document.body.style.overflow = previousOverflow;
    }

    // Close works reliably now
    closeButton.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAll();
    });

    // Intercept clicks so nothing beneath is clickable
    overlay.addEventListener("click", function (e) { e.stopPropagation(); });
    dialogBox.addEventListener("click", function (e) { e.stopPropagation(); });
});

}

document.addEventListener("DOMContentLoaded", appendInfoButton);