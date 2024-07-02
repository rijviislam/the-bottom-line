
# The Bottom Line 

The blog website The Bottom Line publishes thoughtful and in-depth pieces on a variety of subjects. Our goal is to give readers insightful information, useful guidance, and thought-provoking viewpoints on a range of topics, from business and technology to lifestyle and wellness. Get inspired and educated with content that addresses the essential issues The Bottom Line.


## Features
This project have those following Features:

- Fullscreen mode
- Mobile Responsive 
- Tablet Responsive
- Login and Log out Authentication
- when you log in  you can add a blog update a blog and also you can add a blog on your wishlist 
- when you log in you can see the details of the blog information 
- And if you don't have an account then you can create your account and then Login
- To create a account you can go our register page 
- Also you can Login with your social accounts



## Packages and Component Librarys

These packages and component librarys are used in this project

- Fermer Motion
- Tanstack Table
- React Hook Form
- Chakra UI
- DaisyUI
- Tailwind CSS
- Sweet Aleart


## Live Site Link
- https://blog-site-7a0ec.web.app



## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- Ensure you have your Firebase and MongoDB configurations ready.

### Installation

1. **Clone the repository** or **download the ZIP file**:
   - **Clone**:
     ```bash
     https://github.com/Porgramming-Hero-web-course/b9a11-client-side-rijviislam.git
     ```
   - **Download ZIP**:
     - Click on the green "Code" button at the top right of this repository.
     - Select "Download ZIP".
     - Extract the downloaded ZIP file.

2. **Navigate to the project directory**:
   ```bash
   cd your-repository
3. **Install the necessary dependencies:**
     ```bash
     npm install
4. **Set up Firebase and MongoDB configurations:**
- Create a firebaseConfig.js file in the src/config directory (if not already present)
- Add your Firebase configuration
  ```bash // src/config/firebaseConfig.js
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export default firebaseConfig;


5. **MongoDB**
- Create a .env file in the root directory of your project
- Add your MongoDB configuration
  ```bash
  MONGODB_URI=your_mongodb_connection_string
