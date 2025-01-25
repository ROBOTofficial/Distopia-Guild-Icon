<script lang="ts">
    let height = 512;
    let width = 512;

    const box = "/1.webp";
    const icon = "/favicon.ico";
</script>

<svelte:head>
    <title>フロントエンド画像合成 v2</title>
</svelte:head>

<svg class="main" width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <use xlink:href="#_Image1" x="0" y="0" width={width} height={height}/>
    <g transform="matrix(1,0,0,1,5.19543,0.659201)">
        <circle cx="250.805" cy="255.341" r="128.468" style="fill:rgb(235,235,235);"/>
        <clipPath id="_clip2">
            <circle cx="250.805" cy="255.341" r="128.468"/>
        </clipPath>
        <g clip-path="url(#_clip2)">
            <g transform="matrix(0.629565,0,0,0.629565,98.8075,91.7886)">
                <use xlink:href="#_Image3" x="0" y="0" width={width} height={height}/>
            </g>
        </g>
    </g>
    <defs>
        <image id="_Image1" width={width} height={height} xlink:href={box} />
        <image id="_Image3" width={width} height={height} xlink:href={icon} />
    </defs>
</svg>

<style>
    .main {
        width: 200px;
    }
</style>
