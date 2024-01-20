# Test React 1746928263174688769

<img src="https://i.ibb.co/y6HfPfF/Screenshot-2024-01-19-170640.png">

## Explanation

Technical test in which the design of the provided screen had to be replicated.

-   A React application has been developed to complete the task.
-   Vite has been used as the build tool to speed up development.
-   TailwindCSS has been used to streamline the implementation of styles. However, certain aspects have been done in CSS.

All resources such as icons and images have been extracted from the design (Figma), although some were misconfigured or simply static and required color changes.

Some components, such as the form or the chart, use external libraries to streamline and facilitate implementation.

-   Charts: Recharts
-   Form component: TailwindCSS UI

For the use of APIs, I have used https://mockapi.io/ to create a small and custom API for adding orders. The code is focused and fragmented in a way that would accept dynamic data fetching.

I have delegated the management of the app's state to the main component, so that functions and state from the orders hook can be passed down as props to child components. In a more complex app, another state manager, such as Redux or Context, would make more sense.

The interface has been replicated perfectly, although there are certain details such as positioning, margins, etc., that I have taken the liberty to adjust for a more consistent final product.

Certain details, such as loading screens, animations, and other UX-enhancing effects, can be implemented in a larger project with their corresponding designs. However, as this is only a test case, I have not considered it globally.

# Result

<img src="https://i.ibb.co/xqMQYf3/Screenshot-2024-01-19-172026.png">
