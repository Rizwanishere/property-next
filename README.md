# PropertyNext: Find Your Perfect Rental

PropertyNext is a full-stack web application built with Next.js that allows users to browse, list, and rent properties. Users can create accounts, list their properties with detailed information and images, search for available rentals, bookmark their favorite properties, and contact property owners.

## Target Audience

This application is designed for:

*   **Renters:** Individuals looking for properties to rent.
*   **Property Owners/Landlords:** Individuals looking to list their properties for rent.

## Features

*   **User Authentication:** Secure sign-up and login using NextAuth.js.
*   **Property Listings:**
    *   Create, Read, Update, and Delete (CRUD) property listings.
    *   Upload multiple images for each property (hosted on Cloudinary).
    *   Detailed property information: type, description, location (street, city, state, zipcode), number of beds and baths, square footage, amenities, and rental rates (nightly, weekly, monthly).
    *   Mark properties as "featured."
*   **Property Search & Discovery:**
    *   Browse all available properties.
    *   Search for properties based on keywords or location.
    *   View property details, including an image gallery and seller contact information.
    *   Interactive map view of property locations (using Mapbox).
*   **User Profile:**
    *   View and manage listed properties.
    *   View saved/bookmarked properties.
*   **Bookmarking:** Save favorite properties for later viewing.
*   **Messaging:** Users can send messages to property owners/listers.
*   **Responsive Design:** User interface built with Tailwind CSS, ensuring a good experience on various devices.
*   **Notifications:** User feedback and alerts using `react-toastify`.

## Tech Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (React Framework)
    *   [React](https://reactjs.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) & [React Map GL](https://visgl.github.io/react-map-gl/) for maps
    *   [React Icons](https://react-icons.github.io/react-icons/)
    *   [React Share](https://github.com/nygardk/react-share) for social sharing
    *   [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
*   **Backend:**
    *   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
    *   [Node.js](https://nodejs.org/)
*   **Database:**
    *   [MongoDB](https://www.mongodb.com/)
    *   [Mongoose](https://mongoosejs.com/) (ODM)
*   **Authentication:**
    *   [NextAuth.js](https://next-auth.js.org/)
*   **Image Hosting:**
    *   [Cloudinary](https://cloudinary.com/)

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm
*   MongoDB instance (local or cloud-hosted like MongoDB Atlas)
*   Cloudinary account (for image uploads)

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. Obtain the necessary credentials from your MongoDB, NextAuth, and Cloudinary setups.

```env
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=your_google_geocoding_api_key

```

**Note:**
*   `NEXTAUTH_SECRET` can be generated using `openssl rand -base64 32` in your terminal.
*   For Google OAuth, you'll need to set up a project in the Google Cloud Console.
*   For Cloudinary, get your credentials from your Cloudinary dashboard.
*   For Mapbox, sign up at [Mapbox](https://www.mapbox.com/) to get an access token.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd property-next
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file as described above.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a production server (after building).
*   `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.

## Project Structure

The project follows the Next.js `app` directory structure:

```
property-next/
├── app/                          # Main application code
│   ├── (api)/                    # API routes
│   ├── (auth)/                   # Authentication related pages/components
│   ├── layout.jsx                # Main application layout
│   ├── page.jsx                  # Homepage
│   ├── properties/               # Property related pages (listing, details, add, edit)
│   ├── profile/                  # User profile page
│   ├── messages/                 # User messaging page
│   └── ...
├── components/                   # Reusable React components
├── assets/                       # Static assets (images, styles)
├── config/                       # Configuration files (database, cloudinary)
├── models/                       # Mongoose data models (User, Property, Message)
├── public/                       # Publicly accessible static files
├── utils/                        # Utility functions
├── .env.local.example            # Example environment variables (rename to .env.local)
├── next.config.mjs               # Next.js configuration
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute, please:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the project's linting standards (`npm run lint`).