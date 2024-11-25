document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de los campos
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const messageDiv = document.getElementById("message");

    // Validaciones básicas
    if (password !== confirmPassword) {
        messageDiv.textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Simular registro
    messageDiv.style.color = "green";
    messageDiv.textContent = "¡Registro exitoso!";

    // Opcional: aquí podrías enviar los datos a un servidor usando fetch o AJAX
    console.log({ username, email, password });
});
