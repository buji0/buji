<template>
	<div class="content">
		<problem></problem>
	    <custom></custom>
	</div>
</template>

<script>
	import problem from '../components/problem'
	import custom from '../components/custom'
	export default {
		components:{
			problem,
			custom
		}
	}
</script>

<style>
.content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
}
</style>