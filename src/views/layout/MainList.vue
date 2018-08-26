<template>
	<div>
		<div style="padding: 0px;text-align: left;border: 1px solid #ccc">
			<el-tag
			style="margin: 3px"
			size="mini"
			  :key="tag.name"
			  v-for="tag in tags"
			  closable
			  :disable-transitions="false"
			  @close="handleClose(tag)"
			 >
				<font  @click="changeUrl(tag)">
					{{tag.name}}
				</font>
			  
			</el-tag>
		</div>
		<p v-show="false">{{message}}</p><!--获取数据用  不可删-->
		<router-view></router-view>

		

	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
      		tags: [
          		{name:'机架',url:'/frame'}
        	]
	      }
	},
	methods:{
		handleClose(tag){
			//console.log(tag)
			this.tags.splice(this.tags.indexOf(tag), 1);
		},
		changeUrl(tag){
			console.log(tag.name)
			this.$router.push({path:tag.url})
		}
	},
	computed:{
		message(){
			var msg=this.$store.state.msg
			if(msg==""||msg==null){
				return
			}
			var tagsname=[]
			for(var i=0;i<this.tags.length;i++){
				tagsname.push(this.tags[i].name)
			}
			//console.log(msg.name)

			var index=tagsname.indexOf(msg.name)
			if(index<0){
				this.tags.push(msg)
			}
			//console.log(index)
			return this.$store.state.msg
		}
	}
}
</script>

<style>

</style>