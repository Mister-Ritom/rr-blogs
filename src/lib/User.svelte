<script lang="ts">
	import { docStore } from "sveltefire";
	import { db } from "./firebase";

export let userId: string;

console.log("Searching for user ",userId)

const user = docStore(db,`users/${userId}`)

</script>

{#if $user}
    <div class="user">
        <p>Written by {$user.name}</p>
        <img  width="24px" height="24px" src={$user.profilePic} alt={`Profile pic of blog writer ${user.name}`}>
    </div>
{/if}

<style>
    .user {
        display: flex;
    }
    p {
        color: lightgray;
    }
    img {
        margin-left: 4px;
        border-radius: 50%;
    }
</style>