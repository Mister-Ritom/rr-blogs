
<script>
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import { auth, db } from '$lib/firebase';

  	async function signIn() {
		const provider = new GoogleAuthProvider()
		const cred = await signInWithPopup(auth,provider)
		const user = cred.user
		const userDoc = doc(db,"users",user.uid)
		setDoc(userDoc,{
			uid:user.uid,
			name:user.displayName,
			email:user.email,
			profilePic:user.photoURL,
			createdOn:Date.now()
		})
	}
</script>

<div class="g-btn">
    <button on:click={signIn} id="g-signin">
        <span class="label">Sign in with:</span>
        <div id="custom-btn" class="customGPlusSignIn">
          <span class="icon"></span>
          <span class="button-text">Google</span>
        </div>
    </button>
</div>

<style>

    .g-btn {
        margin-left: auto;
        margin-top: 4px;
    }

    #g-signin {
        border: none;
        background: none;
    }

    #custom-btn {
      display: inline-block;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
      background: none;
    }
    #custom-btn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('./icons/google.ico') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.button-text {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
      color: var(--text);
    }
</style>