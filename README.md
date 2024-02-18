# Filesystem-based Routing

/*NextJS uses files & folders to define routes*/

Only files & folders inside the "app" folder are considered!

# NextJS Works With React Server Components

Components which require a special “environment”
NextJS provides such an environment

React Server Components ---> Rendered only on the server Never on the client

# Filenames Matter!

NextJS relies on reserved, special filenames

But the filenames only matter inside the "app" folder

page.js      --> Define page content
layout.js    --> Define wrapper around pages
not-found.js --> Define "Not Found" fallback page
error.js     --> Define "Error" fallback page
route.js     --> Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

# NextJS Renders Pages On The Server

Server (Backend-side ) --> Page/ HTML content is rendered on the server --> rendered on the client (ClientFrontend-side )

# Dynamic Route 

Syntax --> [placeholder]

