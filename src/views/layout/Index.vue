<template>
	<el-container>
	  <el-header style="padding: 0px;margin: 0px;background-color: #0A4B9D;margin-bottom:1px ">
	  		<header-top></header-top>
	  </el-header>
	  <el-container>
	    <el-aside id="left" :style="'height:'+ height+'px'" style="width: auto;height:1000px;background-color: #0A4B9D;">
	    	<aside-left></aside-left>
	    </el-aside>
	    <el-main style="padding:0px;margin: 0px">
	    	<main-list></main-list>
	    </el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import HeaderTop from './HeaderTop'
	import AsideLeft from './AsideLeft'
	import MainList from './MainList'
export default {
	name: '',
	data () {
		return {
      		height:'',
      		//screenWidth: document.body.clientWidth,
      		screenHeight:document.body.clientHeight
		}
	},
	components:{
		HeaderTop,
		AsideLeft,
		MainList
	},
	created(){
		this.$router.push({path:'/frame'})
		var height= window.innerHeight || document.documentElement.clientHeight
		this.height=height-62
		//console.log(this.height)
		//document.getElementById("left").height=height
	},
	mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight
                that.screenHeight = window.screenHeight
                console.log(that.screenHeight)
            })()
        }
    },
    watch: {
        screenWidth (val) {
            this.screenHeight = val
        }
    }
    
}
</script>
	
<style>

  

  

  
  
</style>