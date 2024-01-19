# Prueba React 1746928263174688769

<img src="https://i.ibb.co/y6HfPfF/Screenshot-2024-01-19-170640.png">

## Explicación

Prueba técnica en la que se debía replicar el diseño de la pantalla que se ofrecía.

-   Se ha desarrollado una aplicación en React para completar la tarea.
-   Se ha usado Vite como build tool para hacer el desarrollo mas rápido.
-   Se ha usado TailwindCSS para agilizar la implementación de los estilos. Aún asi, ciertos aspectos se han hecho en CSS.

Todos los recursos como iconos e imagenes han sido extraidos del diseño (Figma) aunque algunos estaban mal configurados o simplemente eran estaticos y requerían cambios de color.

Algunos componentes, como el formulario o la gráfica, usan librerías externas para agilizar y facilitar la implementatión.

-   Gráficas: Recharts
-   Formulario pedido: TailwindCSS UI

Para el uso de APIs he usado https://mockapi.io/ para crear una api pequeña y custom en la que añadir pedidos. El código está enfocado y fraccionado de manera que aceptaría fetching de datos dinámico.

El manejo del estado de la app lo he derivado al componente principal, para poder pasar por props a los componentes hijos las funciones y estado del hook de pedidos. En una app mas compleja, otro gestor de estado, como Redux o Context tendría mas sentido

La interfaz ha sido replicada a la perfección, aunque hay ciertos detalles como posicionamiento, margenes, etc que me he tomado la libertad de ajustar para que el producto final fuera mas consistente.

# Resultado

<img src="https://i.ibb.co/xqMQYf3/Screenshot-2024-01-19-172026.png">
