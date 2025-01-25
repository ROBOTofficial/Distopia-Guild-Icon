<script lang="ts">
    import { onMount } from "svelte";

    const size = 512;
    const iconCanvasSize = 350;

    let canvas: HTMLCanvasElement;
    let iconCanvas: HTMLCanvasElement;

    let imgPath = $state("/discord.webp");

    function drawEdge(fPath: string) {
        const ctx = $state(canvas.getContext("2d"));
        if (ctx) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, size, size);
                imgPath = canvas.toDataURL("image/webp");
            }
            image.src = fPath
        }
    }

    function drawIcon(fPath: string, edge: string) {
        const iconSize = size - 250;
        const ctx = $state(canvas.getContext("2d"));
        if (ctx) {
            const image = new Image();
            image.src = fPath;
            image.onload = () => {
                ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 125, 125, iconSize, iconSize);
                drawEdge(edge);
            }
        }
    }

    function generateIcon(fPath: string, rankingPath: string) {
        const ctx = $state(iconCanvas.getContext("2d"));
        if (ctx) {
            const image = new Image();
            image.src = fPath;
            image.onload = async () => {
                ctx.beginPath();
                ctx.arc(175, 175, (iconCanvasSize / 2) - 4, 0, 2 * Math.PI);
                ctx.fill();
                ctx.clip();
                ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, iconCanvasSize, iconCanvasSize);
                ctx.restore();
                drawIcon(iconCanvas.toDataURL("image/webp"), rankingPath);
            }
        }
    }

    async function fetchData(url: string) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return arrayBufferToBase64(arrayBuffer);
    }

    function arrayBufferToBase64(buffer: ArrayBuffer) {
        let binary = "";
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base = window.btoa(binary);
        return `data:image/jpeg;base64,${base}`;
    }

    onMount(async () => {
        // /icon.webpをDiscordのcdnのURLに変えても合成されるよ!!!
        const iconData = await fetchData("/icon.webp");
        generateIcon(iconData, "/1.webp");
    });
</script>

<svelte:head>
    <title>フロントエンド画像合成 v1</title>
</svelte:head>

<img src={imgPath} alt="">
<canvas width={size} height={size} bind:this={canvas} class="hidden"></canvas>
<canvas width={iconCanvasSize} height={iconCanvasSize} bind:this={iconCanvas} class="hidden"></canvas>

<style>
    .hidden {
        display: none;
    }
</style>
