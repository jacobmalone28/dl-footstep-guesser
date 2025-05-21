# dl-footstep-guesser

A simple web application designed to help users practice recognizing footsteps in the game Deadlock. This tool is hosted at [https://dl-footstep-guesser.pages.dev](https://dl-footstep-guesser.pages.dev) using Cloudflare Pages.

![Screenshot 2025-05-20 at 9 15 42 PM](https://github.com/user-attachments/assets/9d3ddfcb-f15d-45f8-b2f9-0c14991fcf26)

## About

In Deadlock, recognizing the distinctive sounds of enemy footsteps can be crucial for gaining a tactical advantage. This web app provides a straightforward way to hone that skill. It presents audio clips of different footsteps, allowing you to test your ability to identify the source.

## Features

*   **Footstep Audio Clips:** Play authentic audio clips of different character footsteps from Deadlock.
*   **Interactive Guessing:** Listen to the clip and select the character you believe is making the sound.
*   **Instant Feedback:** Get immediate feedback on whether your guess was correct.
*   **Simple Interface:** Easy to use and navigate for quick practice sessions.

## How to Use

1.  Visit the web app at [https://dl-footstep-guesser.pages.dev](https://dl-footstep-guesser.pages.dev).
2.  Click the "Play Footstep" button to listen to a random footstep audio clip.
3.  Based on the sound, select the character you think is making the footsteps from the options provided.
4.  The app will tell you if your guess was correct or incorrect.
5.  Repeat to practice and improve your footstep recognition skills!

## Technologies Used

*   **Sveltekit:**
*   **Tailwind:** For styling and layout.
*   **TypeScript:** For handling audio playback, user interaction, and game logic.
*   **Cloudflare Pages:** For hosting the web application.

## Feedback and Support

If you encounter any issues or have suggestions for the app, please reach out by opening an issue on the GitHub repository.

* Note - This is out of date, a few new heroes have been added at this point. Don't plan on adding them, but contributions are welcome. The system was designed to be super extendable, only requiring a new hero to be added to src/lib/heroes.ts file, with their image and footstep sounds added to public/assets/images and public/assets/sounds, respectively.
