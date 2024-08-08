# NewsFlex

NewsFlex is a powerful and customizable news aggregator application built using Next.js. It fetches news articles from the Currents API and displays them in a sleek, modern interface. Users can filter news by category, search for specific topics, and load more articles dynamically.

## Features

- **Customizable News Categories**: Filter news by different categories such as Technology, Sports, Politics, Business, Entertainment, Health, Science, and World.
- **Search Functionality**: Search for specific topics and fetch relevant news articles from the API.
- **Responsive Design**: The application is fully responsive and works seamlessly on all devices.
- **Dynamic Loading**: Load more articles dynamically with a "Load More" button.
- **Modern UI**: A clean and modern user interface built with CSS and optimized for performance.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)
- A Currents API key

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/newsflex.git
    cd newsflex
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root directory and add your Currents API key:
    ```env
    NEXT_PUBLIC_CURRENTS_API_KEY=your_api_key_here
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/` - Contains the main application components.
  - `layout.tsx` - The main layout component.
  - `page.tsx` - The main page component.
  - `globals.css` - Global CSS styles.
- `lib/` - Contains utility functions and API calls.
  - `api.ts` - Functions for fetching news articles from the Currents API.
- `public/` - Public assets such as images and icons.
- `pages/` - Next.js pages.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js application is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

1. Create a Vercel account if you don't have one.
2. Connect your GitHub repository to Vercel.
3. Vercel will automatically deploy your application and provide you with a live URL.

## Learn More

To learn more about Next.js and related technologies, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.
- [Currents API Documentation](https://currentsapi.services/en/docs/) - Learn about the Currents API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Currents API](https://currentsapi.services/)
- [Vercel](https://vercel.com/)

---

Developed by [Your Name](https://github.com/yourusername).
