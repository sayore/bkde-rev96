<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <img class="logo-top-right-in-block" src="https://svelte.dev/svelte-logo.svg" />
            <h1>Svelte</h1>
            <p>
                Svelte ist ein Framework, das die Entwicklung von Web- und
                mobilen Anwendungen vereinfacht und beschleunigt. Es hat sich
                als ein sehr leistungsfähiges und einfaches Tool erwiesen, das
                die Leistung und den Code verbessert. Durch die Verwendung von
                Komponenten können kleine, wiederverwendbare Codeblöcke erstellt
                werden, die eine schnellere Entwicklung ermöglichen. Svelte
                bietet auch eine einfache und intuitiv zu verstehende Syntax,
                die eine schnelle Einarbeitung ermöglicht.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von Svelte:</p>
            <ul>
                <li>Keine Virtual DOM</li>
                <li>Keine Abhängigkeiten</li>
                <li>Kleiner Code</li>
                <li>Komponentenbasiert</li>
                <li>Hohe Leistung</li>
                <li>Einfache Syntax</li>
                <li>Geringe Lernkurve</li>
            </ul>
        </div>
    </LrSplit>
</div>

<style lang="scss">
    // header formatting
    h1 {
        font-size: 3rem;
        text-align: left;
        margin: 0;
        margin-top: 2rem;
    }

    // paragraph formatting
    p {
        font-size: 1.5rem;
        text-align: left;
        margin: 0;
        margin-top: 2rem;
    }
    // Max height of logo is 128px, so it doesn't overflow the page on mobile, but is still visible, and doesn't look too small on desktop
    // This is a workaround for the fact that the image is not responsive
    // Move image to the right
    

</style>
