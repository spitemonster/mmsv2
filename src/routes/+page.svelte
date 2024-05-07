<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<div>
	<form method="POST" use:enhance enctype="multipart/form-data">
		<label>
			<input type="file" name="image" accept=".png, .jpg, .jpeg" required />
			<span>Select File</span>
		</label>
		<label>
			<input type="text" name="name" placeholder=" " required />
			<span>Image Name</span>
		</label>

		<button>Submit</button>
	</form>
</div>

<style lang="css">
	form label {
		display: block;
	}

	form label:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>