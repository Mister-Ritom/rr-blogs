<script lang="ts">
    import Blog from '$lib/Blog.svelte';
  
      import { db } from '$lib/firebase';
      import { collectionStore } from 'sveltefire';
      import { collection, doc, limit, orderBy, query, setDoc } from 'firebase/firestore';
  //TODO add following users
  
    let id: string = "";

      const blogQuery = query(collection(db,"userBlogs","xM2Boa2A2Vd5BBDx1d063cxvcC93","blogs"),orderBy("createdOn"),limit(15))
      const posts = collectionStore(db, blogQuery);
  
    function search() {
        const blogQuery = query(collection(db,"userBlogs",id,"blogs"),orderBy("createdOn"),limit(15))
        const posts = collectionStore(db, blogQuery);
    }

  </script>
  
  <form on:submit={search}>
    <label for="query"></label>
    <input placeholder="Blog makers id" bind:value={id} type="text" id="query">
    <button type="submit">Find blogs</button>
</form>

  <ul id="blogs">
      {#each $posts as post}
          <Blog post={post}></Blog>
      {/each}
  </ul>
  
  <style>
      #blogs{
          display: grid;
          grid-template-columns: auto auto auto;
          list-style-type: none;
          margin-left: auto;
          margin-right: auto;
      }
  
      @media(max-width:720px) {
          #blogs {
              display: flex;
              flex-direction: column;
          }
      }
  
  </style>