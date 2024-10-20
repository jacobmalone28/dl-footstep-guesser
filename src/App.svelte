<script>
  import "./app.css";
  import Game from "./Game.svelte";
</script>

<main>
  <div class="flex flex-col justify-center items-center h-dvh bg-zinc-100">
    <div class="grow"></div>
    <img src="/assets/images/Deadlock.png" alt="logo" class="w-80 mb-4"/>
    <Game/>
    <div class="grow"></div>
    <div class="flex justify-center items-center w-full">
    <span class="text-xs text-gray-500 py-2">Made with ❤️ by <a href="https://www.jacobmalone.dev" class="hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block hover:text-transparent hover:bg-clip-text text-blue-600 underline">Jacob Malone</a>
    </div>
  </div>
  
</main>


<style>
  
</style>
