<script>
	export let trigger = '?';
	// export let width = ``;
	let showModal = false;

	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog;

	$: if (dialog && showModal) dialog.showModal();

	function close() {
		dialog.close();
	}
	function show() {
		dialog.showModal();
	}
</script>

<button on:click={show} class="modal-trigger-button"> (<span>{trigger}</span>)</button>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog class="modal-width" bind:this={dialog} on:close={close} on:click|self={close}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="dialog">
		<div class="x-button">
			<button on:click={close}>&times;</button>
		</div>

		<div class="content">
			<h4><slot name="header" /></h4>
			<hr />
			<slot />
		</div>

		<div class="close-button"><button on:click={close}>Close </button></div>
	</div>
</dialog>

<style lang="scss">
	.content {
		padding: 0 2em;
		margin-top: -2em;
	}
	dialog {
		border-radius: 0.15em;
		border: none;
		padding: 1em;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
	}
	.dialog {
		padding: 0 0 0 1em;
	}

	button {
		background-color: transparent;
		border: none;
		color: inherit;
		outline: none;
		cursor: pointer;
		font-size: 1em;
		padding: 0;
	}
	button:hover {
		font-weight: bold;
	}
	button.modal-trigger-button {
		margin-right: -0.275em;

		&:hover {
			font-weight: normal;
		}
	}
	.close-button,
	.x-button {
		color: var(--fluids-mid);
		display: flex;
		justify-content: end;
		button {
			margin-top: -0.75rem;
		}
	}
	.close-button {
		font-size: 1.125em;
		margin-top: 1.5em;
	}
	h4 {
		padding: 0;
		margin: 0.5em 0;
	}

	*::-webkit-scrollbar-track {
		border-top-right-radius: 0.125em;
		border-bottom-right-radius: 0.125em;
	}

	.x-button {
		font-size: 2em;
		margin-bottom: 1em;
	}
</style>
