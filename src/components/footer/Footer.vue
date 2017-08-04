<template>
	<div class="footer">
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'foot'
			}
		}
	}
</script>

<style>
	.footer{
		color: red;
		font-size:30px;
		font-family: "微软雅黑";
		text-shadow:2px 2px 5px #000;
		margin:0 auto;
	}
</style>