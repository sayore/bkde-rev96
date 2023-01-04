<script lang="ts">
    import { onMount } from "svelte";

    let words=0;

    onMount(async () => {
        //select all paragraphs and count their words
        let paragraphs = document.querySelectorAll("p");
        let wordCount = 0;
        paragraphs.forEach((p) => {
            wordCount += p.innerText.split(" ").length;
        });

        //Count all words in lists too
        let lists = document.querySelectorAll("li");
        lists.forEach((li) => {
            wordCount += li.innerText.split(" ").length;
        });
        words=wordCount;
    });
</script>

<mainCW>
    {#if words>0}
        {words} words
    {/if}
</mainCW>