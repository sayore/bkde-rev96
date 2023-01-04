<script lang="ts">
    //export let title: string;
    export let description: string | undefined;
    export let image: string | undefined;
    export let link: string | undefined;
    export let effect: "OnClickSpin" | undefined;

    // Spin on click and stop spinning after 1 second
    function onClickSpin() {
        let card = document.getElementById("card");
        card.classList.add("spin");
        setTimeout(function () {
            card.classList.remove("spin");
        }, 1000);
    }

    //Check if effect is set to "OnClickSpin"
    function checkEffect() {
        if (effect == "OnClickSpin") {
            return onClickSpin;
        }
    }
</script>

<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card" on:click={checkEffect}>
        <img class="logo" src={image} alt="logo" />
        <p>{description}</p>
    </div>
</div>

<style lang="scss">
    /* Card with image and description in scss*/
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 200px;
        height: 200px;
        background-color: #333;
        transition: 0.5s;
        margin: 3px;
        margin-bottom:20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        * {
        text-decoration: none;}
    }

    .card:hover {
        transform: scale(1.05);
        transition: 0.5s;
    }

    .logo {
        width: 100px;
        height: auto;
        object-fit: contain;
        flex: 1;
        margin: 0;
        padding: 0;
    }

    p {
        /* make the paragraph inline with the bottom border */
        display: inline-block;
        width: 100%;
        margin: 0;
        padding: 0;
        color:white;
        /* center text */
        text-align: center;
        text-decoration: none;

        position: relative;
        top:-8%;
    }

    a {
        margin: 5px;
        text-decoration: none;
        color: white;
    }
    a:hover {
        color: #1e90ff;
    }
</style>
