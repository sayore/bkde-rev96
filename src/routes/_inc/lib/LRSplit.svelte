<script lang="ts">
  export let leftPercent: number;
  export let rightPercent: number;
  export let reverse: boolean;
</script>

<div class="lrblock" style="flex-direction: {reverse ? 'row-reverse' : 'row'};">
  <!-- Tabs on mobile -->
  <div class="button-group"><button value="left">Left</button><button value="right" >Right</button></div>
  <div class="left card-any" style="min-width:{leftPercent}%">
    <slot name="left">EmptyLeft</slot>
  </div>
  <div class="right card-any" style="min-width:{rightPercent}%">
    <slot name="right">EmptyRight</slot>
  </div>
</div>

<!--
  hide-on-mobile 
 -->
<style lang="scss">
  .lrblock {
    display: flex;

    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0rem;
  }

  // left side of lrblock
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  // right side of lrblock
  .right {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0;
    height: 100%;
    padding: 0px;
    //hide on mobile
    @media (max-width: 600px) {
      display: none;
    }
  }

  .right,
  .left {
    margin: 0px;
    padding: 0px;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: relative;
  }

  // right block on top on mobile
  @media (max-width: 600px) {
    .lrblock {
      flex-direction: column;
      flex-wrap: wrap;
    }
    .right {
      margin-top: 0;
    }
  }

  .button-group {
    //flex row 100% width of lrblock
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 1;
    
    >button {
      flex:1;
      margin: 0;
      height:33px;
      padding: 0;
      border: none;
      //button slight grey, no border, text white
      background-color: #333;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
</style>
