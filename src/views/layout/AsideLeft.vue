<template>
	<div style="background-color: #0A4B9D;" class="changeMax,changeMini">
		<div style="line-height: 2px;text-align: right;padding-right: 5px">
			<el-button style="background-color:#545c64;border-color: #545c64;color: #ccc"  v-if="isCollapse"  @click="change" size="mini">
				<i class="el-icon-caret-right"></i>
			</el-button>
			<el-button style="background-color:#545c64;border-color: #545c64;color: #ccc"" v-else="isCollapse" @click="change" size="mini">
				<i class="el-icon-caret-left"></i>
			</el-button>
		</div>
		<el-menu default-active="1-1" style="text-align: left" class="el-menu-vertical-demo" @open="handleOpen" 
			@close="handleClose" :collapse="isCollapse" background-color="#0A4B9D" text-color="#fff"  active-text-color="#ffd04b">
      		<el-submenu index="1">
		        <template slot="title">
		          <i class="el-icon-menu"></i>
		          <span>设备</span>
		        </template>
		        <el-submenu index="1-1">
		        	<template slot="title">硬件</template>
		        	<el-menu-item index="1-1-1" @click="changeUrl('机架','/frame')">机架</el-menu-item>
		          	
		          	<el-menu-item index="1-1-2" @click="changeUrl('机框','/machineframe')">机框</el-menu-item>
		          	<el-menu-item index="1-1-3" @click="changeUrl('槽道','/conduit')">槽道</el-menu-item>
				</el-submenu>
				<!--
		          <el-menu-item index="1-2">选项2</el-menu-item>
		          <el-menu-item index="1-3">选项3</el-menu-item>
		        -->
		        <el-submenu index="1-2">
		          	<template slot="title">设施</template>
		          	<el-menu-item index="1-2-1" @click="changeUrl('人手井','/handwell')">人手井</el-menu-item>
		          	<el-menu-item index="1-2-2" @click="changeUrl('管道井','/pipingshaft')">管道井</el-menu-item>
		          	<el-menu-item index="1-2-3" @click="changeUrl('电杆','/pole')">电杆</el-menu-item>
		        </el-submenu>
		    </el-submenu>
    	</el-menu>
	</div>
</template>

<script>
import store from '../../store/index'
  export default {
    data() {
      return {
        isCollapse: false,
        changeMax:true,
        changeMini:false,

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      change(){
      	this.isCollapse=!this.isCollapse
      	this.changeMax=!this.changeMax
      	this.changeMini=!this.changeMini
      },
      changeUrl(name,url){
      	this.$router.push({path:url})
      	this.$store.commit("getname",{'name':name,'url':url})
      }
    }
  }
</script>

<style>
	.routerlink{
		text-decoration: none;
	}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>