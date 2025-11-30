# Scanner AR Universal con Gemini

Este proyecto es una aplicación web de Realidad Aumentada (AR) simple que utiliza la cámara de tu dispositivo y la IA de Google Gemini para identificar objetos en tiempo real.

## Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en tu computadora.
- Una API Key de [Google AI Studio](https://aistudio.google.com/).

## Instalación

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/miguelotech/escaner-ar-inteligente.git
    cd escaner-ar-inteligente
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1.  Crea un archivo llamado `.env` en la raíz del proyecto.
2.  Agrega tu API Key de Gemini en el archivo `.env` de la siguiente manera:

    ```env
    VITE_API_KEY=Tu_API_Key_Aqui
    ```

    > **Nota:** Nunca subas tu archivo `.env` a GitHub. Ya está configurado en `.gitignore` para ser ignorado.

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Uso en Móvil (Opcional)

Para probar la aplicación en tu celular (necesario para usar la cámara trasera cómodamente), necesitas exponer tu servidor local a internet mediante HTTPS.

Puedes usar `localtunnel`:

```bash
npx localtunnel --port 5173
```

Esto te dará una URL pública (ej. `https://algo-random.loca.lt`) que puedes abrir en tu iPhone o Android.
