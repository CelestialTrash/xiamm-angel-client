# Artist Profile Template App

## Deployed App

[Deployed version](#) *([Insert link to your deployed app here](https://dito-artist.netlify.app))*

## Table of Contents
- About
- Functionality
- Technologies Used
- Setup/Installation
- Routes
- Approach and Coding Conventions Used
- Status
- Next Steps
- Credits
- Code Walkthrough

## About
The Artist Profile Template App is designed to help artists create and manage their personal profiles, showcasing their work, managing their content dynamically, and customizing their profile. The app allows users to edit, upload, and delete their bio, music releases, and merchandise items, with an easy-to-use interface.

## Functionality

- **HomePage**: Automatically displays the latest release and provides quick access to bio, releases, and merchandise sections.
- **Signup/Login**: Users can sign up or log in to manage their profile and content.
- **Bio Section**: Artists can create and update their bio to share more about themselves with their audience.
- **Releases**: Users can upload, edit, and delete their music releases. This section includes details like the title, release date, producer, and cover image.
- **Merchandise**: Users can manage their merchandise by adding, editing, or deleting products.
- **Dynamic Image Upload**: Integrated with Cloudinary for seamless image uploads during the creation or editing of releases and products.

### Key Pages and Routes:
- **HomePage**: `/`
    - Displays the most recent release, social media links, and the artist's name.
- **Bio**: `/bio`
    - Section where users can edit their personal bio.
- **Releases Page**: `/releases`
    - List of all releases with options to add, edit, or delete entries.
- **Products Page**: `/products`
    - List of all merchandise items with options to add, edit, or delete products.
- **Product Details Page**: `/products/:productId`
    - Displays detailed information about a specific product.
- **Signup Page**: `/signup`
    - Allows users to create a new account.
- **Login Page**: `/login`
    - Allows users to log in to their account.
- **Not Found Page**: `/*`
    - Displays a 404 error message if the user navigates to an undefined route.

## Technologies Used
- **React**: For building the user interface.
- **JavaScript (ES6+)**: For handling logic and interactivity.
- **CSS**: For styling the components.
- **Axios**: For making HTTP requests to the backend API.
- **React Router Dom**: For client-side routing.
- **Cloudinary**: For image upload and management.
- **Node.js & Express.js**: Backend API (to be provided later).

## Setup / Installation: 
1. **Fork the repository** and clone it to your local machine.
2. **Install dependencies** using `npm install`.
3. **Create a Cloudinary account** and set up your environment variables for `VITE_CLOUD_NAME` and `VITE_CLOUD_PRESET`.
4. **Run the app locally** using `npm run dev`.
5. **Ensure backend API** is running (details for backend setup will be provided separately).

## Approach and Coding Conventions Used
- **Modular Component Structure**: The app is divided into reusable React components for easier management and scalability.
- **CSS Modules**: Used to scope styles locally to components, avoiding conflicts.
- **API Integration with Axios**: All HTTP requests are handled with Axios, with token-based authentication for secured endpoints.
- **Cloudinary for Media Management**: Images are uploaded directly to Cloudinary via a custom upload widget integrated into the forms.
- **Routing and Navigation**: Managed with React Router to ensure smooth transitions between pages.

## Status
- **In Progress**: The app is still under development. Additional CRUD features and customizations are being planned to enhance the user experience.

## Next Steps
- **Customization Features**: Implement more customizable options for artists to personalize their profiles further.
- **Enhanced Merchandise Management**: Add features like inventory tracking and purchase history for merchandise.
- **Improved User Interface**: Refine the UI to make it more intuitive and visually appealing.
- **Testing & Debugging**: Continue testing the app across different devices and browsers to ensure compatibility and performance.


## Credits
- Developed by **[Aquiles Hinestrosa , Kim Delgado and Esteban Escalante]** *