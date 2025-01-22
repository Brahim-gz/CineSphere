<a href="https://github.com/Brahim-gz/CineSphere/blob/main/LICENSE">
  <img align=right src="https://img.shields.io/github/license/Brahim-gz/CineSphere?style=flat" alt="License" />
</a>

<br/>
<br/>

# CineSphere

**CineSphere** is a web application designed to showcase movies and actors, providing users with information about popular films, actors, and their combined credits. It fetches data from the TMDB (The Movie Database) API and displays it in an elegant and user-friendly interface. 🎥✨🎬

## Features

- **Home Page**: Displays a list of popular movies fetched dynamically from the TMDB API.
- **Film Details**: Provides detailed information about a selected film.
- **Actor Details**: Displays information about actors and their combined filmography.
- **Responsive Design**: Optimized for various screen sizes.

## Demo

![Demo GIF](https://github.com/Brahim-gz/CineSphere/blob/main/assets/Demo.gif)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Brahim-gz/CineSphere.git
   cd CineSphere
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   VITE_APP_API_TOKEN=<Your TMDB API Token>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173/`.

## Usage

💡 **Browse the Home Page** to see a list of popular movies.

💡 **Click on a movie** to view detailed information.

💡 **Click on an actor** to see their biography and combined credits.

### Note

⚠️ Make sure to set up your TMDB API token in the `.env` file to enable API calls.

---

<br/>
<p align=center><b>🎉Enjoy exploring movies with CineSphere🎉</b></p>
