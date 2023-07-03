<script lang="ts">
  import type { MarkerData, Coordinate } from "./types.js";
	import { createEventDispatcher } from "svelte";


  export let markersData: MarkerData[];
  export let apiKey: string;
  export let mapId:string = "DEFAULT_MAP_ID";

</script>


<div class="w-full h-full">
  Test NPM sveltekit gmap package

  MarkersData: {markersData}
  ApiKey: {apiKey}
  MapId: {mapId}
</div>