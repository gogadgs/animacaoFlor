const container  = document.querySelector(".container");
for(let i = 0;i<36;i++){
    const element = document.createElement("i");
    const delay = Math.random() * -10;
    const duration = 5 + Math.random() + 0.5;
    const color = `hsl(${i * 10} 100%, 50%, 25%)`;
    element.style.setProperty('--color', color);
    element.style.setProperty('--delay',`${delay}s`);
    element.style.setProperty('--duration',`${duration}s`);

    container.appendChild(element);

};
