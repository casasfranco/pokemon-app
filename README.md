# Pokémon App - Frontend Technical Test

## Project Description

This project is a web application developed in Next.js that allows users to view and filter a list of Pokémon using the public Pokémon API (PokeAPI). The application implements pagination, type-based filtering, and is built with TypeScript to ensure clean and secure code.

## Technologies Used

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Axios**

## Features

- Display a list of **1000 Pokémon** with images and types.
- Implement **dynamic pagination**.
- **Filter Pokémon by type** with multi-selection support.
- **Responsive design and optimized UX** with Tailwind CSS.
- Clean, modular, and scalable code.

## Project Structure

```plaintext
/src
 ├── app/
 │    ├── layout.tsx  # Custom layout
 │    ├── page.tsx  # Main page
 ├── components/
 │    ├── PokemonCard.tsx  # Pokémon card display
 │    ├── Pagination.tsx   # Pagination component
 │    ├── Filter.tsx       # Type filter component
 ├── services/
 │    ├── api.ts          # API calls
 ├── styles/
 │    ├── globals.css      # General Tailwind styles
 ├── README.md # Documentation
```

## Installation and Execution 1. Clone the repository:

1. Clone the repository:

```
git clone https://github.com/casasfranco/pokemon-app.git
```

```
cd pokemon-app
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

4.  Open in your browser:

```
http://localhost:3000
```

## Development Time

- Project initialization and testing: 15 minutes
- Basic structure, API calls, component creation, and displaying results: 40 minutes
- Minor corrections: 5 minutes
- Implementing pagination after applying filters: 5-8 minutes
- Applying styles for visual improvements: 5 minutes

Total time: Approximately 1 hour and 13 minutes.
