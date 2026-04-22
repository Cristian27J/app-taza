const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>App TAZA</title>

        <style>
            body {
                margin: 0;
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(135deg, #141e30, #243b55);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                color: white;
            }

            .container {
                text-align: center;
                background: rgba(255,255,255,0.08);
                padding: 50px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                width: 90%;
                max-width: 500px;
            }

            h1 {
                margin-bottom: 5px;
            }

            .brand {
                font-size: 14px;
                opacity: 0.8;
                margin-bottom: 20px;
            }

            .status {
                margin-top: 15px;
                padding: 10px;
                background: #00c853;
                border-radius: 10px;
                font-weight: bold;
            }

            .info {
                margin-top: 20px;
                font-size: 14px;
            }

            button {
                margin-top: 20px;
                padding: 10px 20px;
                border: none;
                border-radius: 10px;
                background: #ff9800;
                color: white;
                font-weight: bold;
                cursor: pointer;
            }

            button:hover {
                background: #ffb74d;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>🚀 Servidor Activo</h1>
            <div class="brand">Desarrollado por: <strong>TAZA</strong></div>

            <div class="status">✔ ONLINE</div>

            <div class="info">
                <p id="date"></p>
                <p id="time"></p>
                <p id="tz"></p>
            </div>

            <button onclick="saludo()">Mostrar mensaje</button>
        </div>

        <script>
            function actualizar() {
                const now = new Date();

                document.getElementById('date').textContent =
                    "📅 " + now.toLocaleDateString();

                document.getElementById('time').textContent =
                    "⏰ " + now.toLocaleTimeString();

                document.getElementById('tz').textContent =
                    "🌍 " + Intl.DateTimeFormat().resolvedOptions().timeZone;
            }

            function saludo() {
                alert("🔥 Proyecto creado por TAZA");
            }

            actualizar();
            setInterval(actualizar, 1000);
        </script>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor TAZA en http://localhost:${PORT}`);
});