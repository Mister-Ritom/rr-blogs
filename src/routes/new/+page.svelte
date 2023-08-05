<script lang="ts">
	import { goto } from "$app/navigation";
	import { auth, db } from "$lib/firebase";
	import { doc, setDoc } from "firebase/firestore";
	import { userStore } from "sveltefire";
    import DOMPurify from "dompurify";
	import { onMount } from "svelte";

    let text: string;
    let titleText: string

    const user = userStore(auth)

    onMount(()=> {
        if(!$user) {
            goto("/")
        }
    })


    function uploadBlog(e: Event) {
        e.preventDefault()
        if(text!=undefined&&text!=null&&titleText!=undefined&&titleText!=null) {
            const t = DOMPurify.sanitize(text, { USE_PROFILES: { html: true } })
            const tt = titleText
            text = ""
            titleText = ""
            const blogId = Date.now()
            const blogDoc = doc(db,"blogs",blogId.toString())
            setDoc(blogDoc,{
                id:blogId,
                paragraph:t,
                title:tt,
                createdOn:Date.now(),
                createdBy:$user?.uid
            }).then(()=> {
                goto("/")
            }).catch((error)=> {
                alert("Couldn't upload your blog")
                console.error(`Couldn't upload blog ${blogId} `,error)
            })
        }        
    }
</script>

<svelte:head>
	<title>New blog</title>
	<meta name="description" content="Create a new blog in RR-Blogs and earn money" />
</svelte:head>

<form on:submit={uploadBlog}>
    <label for="title">Title</label>
    <input bind:value={titleText} type="text" id="title">
    <label for="paragraph">Paragraph</label>
    <textarea placeholder="Write only text or html code starting with <article>, ending with </article>" bind:value={text} name="paragraph" id="paragraph" cols="20" rows="35"></textarea>
    <button type="submit">Upload</button>
</form>


<style>
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 36rem;
        background-color: #ee11111f;
        margin: 8px;
        color: var(--text);
    }

    #paragraph {
        background-color: #ee11111f;
        margin: 8px;
        color: var(--text);
    }

</style>