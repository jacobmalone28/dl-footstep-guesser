<script lang="ts">

    import {Play, RotateCcw} from "lucide-svelte"
    import WaveSurfer from "wavesurfer.js";
    
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
    import Button from "$lib/components/ui/button/button.svelte";
    import {heroes } from "$lib/heroes";
    import type { hero } from "$lib/heroes";
    import * as Tooltip from "$lib/components/ui/tooltip";

    type round = {
        currentHero: hero | null;
        audioRenderer: WaveSurfer | null;
    }


    var isPlaying = false;
    var score = 0;
    var audioPlaying = false;

    var playerGuess : hero | null = null;

    var currentRound: round = {
        currentHero: null,
        audioRenderer: null
    }
    

    function startGame() {
        console.log("starting game");
        isPlaying = true;
    }

    // Remove the on:load and use onMount to watch for isPlaying changes
    $: if (isPlaying) {
        // We use setTimeout to ensure the DOM is ready
        setTimeout(() => {
            beginRound();
        }, 0);
    }

    function beginRound(){
        console.log("beginning round");
        currentRound?.audioRenderer?.destroy();
        playerGuess = null;
        currentRound.currentHero = getRandomHero();
        console.log(currentRound.currentHero);

        const canvas = document.createElement('canvas');
        // Set explicit dimensions
        canvas.width = 1024;  // Make this wider
        canvas.height = 64;   
        const ctx = canvas.getContext('2d');
    
        if (ctx) {
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#52a884');
            gradient.addColorStop(0.5, '#52a884');
            gradient.addColorStop(1, '#52a884');

            currentRound.audioRenderer = WaveSurfer.create({
                container: "#waveform",
                height: 64,
                waveColor: "lightgrey",
                progressColor: gradient,
                cursorColor: 'black',
                cursorWidth: 2,
                barWidth: 2,
                barGap: 3,
                barRadius: 3,
                normalize: true
            });

            console.log(currentRound.currentHero.audioURL);
            currentRound.audioRenderer.load("/assets/sounds/" + currentRound.currentHero.audioURL);
        }
        currentRound.audioRenderer?.on('play', () => {
            audioPlaying = true;
        });

        currentRound.audioRenderer?.on('finish', () => {
            audioPlaying = false;
        });
        currentRound.audioRenderer?.on('pause', () => {
            audioPlaying = false;
        });
        currentRound.audioRenderer?.play();
    }

    function restartGame() {
        console.log("restarting game");
        isPlaying = false;
        score = 0;
    }



    function submitAnswer() {
        if (playerGuess?.id === currentRound?.currentHero?.id) {
            score++;
        }
    }

    function getRandomHero() {
        return heroes[Math.floor(Math.random() * heroes.length)];
    }

    function playAudio() {
        console.log("playing audio");
        currentRound?.audioRenderer?.play();
    }





</script>

<main class="flex flex-col justify-center items-center">
    {#if isPlaying}
    <div class="flex flex-row items-center">
        <p class="text-lg font-bold">Score: {score}</p>
        <Tooltip.Root>
            <Tooltip.Trigger asChild let:builder>
                <Button builders={[builder]} class="hover:text-red-600" variant="ghost" on:click={restartGame}>
                    <RotateCcw size="16" class="mr-2"/>
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                Restart the game
            </Tooltip.Content>
        </Tooltip.Root>
    </div> 
    <div class="flex flex-col justify-between items-center grow">
        <Card class="w-96">
            <CardHeader>
                <CardTitle>Footstep Guesser</CardTitle>
                <CardDescription>Guess the hero based on their footsteps</CardDescription>
            </CardHeader>
            <CardContent> 
                <div id="waveform" class="h-16"></div>
                
            </CardContent>
            <CardFooter class="flex flex-row-reverse justify-between">
                {#if playerGuess}
                    <Button class="hover:bg-green-600" on:click={beginRound}>
                        Next Round
                        <Play fill="white" size="16" class="ml-2"/>
                    </Button>
                    {#if playerGuess.id === currentRound?.currentHero?.id}
                        <p class="text-green-600 font-bold">Correct! {currentRound?.currentHero?.name}</p>
                    {:else}
                        <p class="text-red-600 font-bold">Incorrect {currentRound?.currentHero?.name}</p>
                    {/if}
                    
                {:else}
                    <Button class="hover:bg-green-600" on:click={playAudio} disabled={audioPlaying}>
                        Play Audio
                        <Play fill="white" size="16" class="ml-2"/>
                    </Button>
                {/if}
                
            </CardFooter>
        </Card>
        <!-- Grid of heroes to choose from -->
        <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 m-4 py-2 px-4 overflow-scroll h-96 bg-zinc-200 rounded-md shadow-inner">
            {#each heroes as hero}
                <Card class={`w-24 h-32 p-0 cursor-pointer hover:shadow-lg overflow-hidden 
                    ${playerGuess ? (
                        currentRound?.currentHero?.id === hero.id
                            ? "bg-green-600" 
                            : playerGuess.id === hero.id
                                ? "bg-red-600"
                                : "bg-gray-500"
                    ) : "bg-purple-500 hover:shadow-yellow-600 hover:bg-yellow-400"}`}
                
                     on:click={() => {
                        playerGuess = hero;
                        submitAnswer();
                    }}
                >
                    <div class="relative">
                        <img src={"/assets/images/heroes/" + hero.image} alt={hero.name} class="w-full mx-auto"/>
                        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-md"></div>
                        <div class="absolute inset-x-0 bottom-0 flex justify-center items-center p-2">
                            <p class="text-white text-center font-bold text-sm">
                                {hero.name}
                            </p>
                        </div>  
                    </div>
                </Card>
            {/each}
        </div>
    </div>
    {:else}
        <Card class="w-96">
            <CardHeader>
                <CardTitle>Footstep Guesser</CardTitle>
                <CardDescription>Guess the hero based on their footsteps</CardDescription>
            </CardHeader>
            <CardContent>
                <div id="waveform"></div>
                <p>Always know which hero's around the corner through honing your ability to pick out who's who!</p>
            </CardContent>
            <CardFooter>
                <Button class="hover:bg-green-600" on:click={startGame}>
                    Start
                    <Play fill="white" size="16" class="ml-2"/>
                </Button>
            </CardFooter>
        </Card>
    {/if}
    
</main>