<template>
    <button class="g-button">button</button>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .g-button {
        font-style: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--bordercolor);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--border-active-bg);
        }

        &.focus {
            outline: none;
        }
    }
</style>