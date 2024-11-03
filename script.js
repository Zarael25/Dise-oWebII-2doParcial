document.getElementById("askButton").addEventListener("click", async () => {
    const question = document.getElementById("question").value;
    const errorElement = document.getElementById("error");
    const answerElement = document.getElementById("answer");
    const gifElement = document.getElementById("gif");

    // Limpiar mensaje de error y respuesta previa
    errorElement.style.display = "none";
    answerElement.textContent = "";
    gifElement.src = "";

    // Validar si la pregunta tiene el signo de interrogación
    if (!question.includes("?")) {
        answerElement.textContent = "No";
        gifElement.src = "https://media.giphy.com/media/3oEjHV0z8GJnyyxzLW/giphy.gif"; // GIF alternativo
        return;
    }

    try {
        const response = await fetch("https://yesno.wtf/api");
        if (!response.ok) throw new Error("Error al conectar con la API");

        const data = await response.json();
        answerElement.textContent = data.answer === "yes" ? "Sí" : "No";
        gifElement.src = data.image;
    } catch (error) {
        errorElement.textContent = "Ocurrió un error al obtener la respuesta. Por favor, inténtalo de nuevo.";
        errorElement.style.display = "block";
    }
});
