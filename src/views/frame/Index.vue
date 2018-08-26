<template>
	<div>
		<div style="background-color: #EFEFEF;padding-top: 2px;padding-bottom:3px;padding-left:10px;padding-right:10px;height: 16px">
			<div style="float: left">
				<font style="font-size: 12px"><i class="el-icon-search"></i>&nbsp;查询</font>
			</div>
			<div style="float: right;">
				<font v-if="!change" color="#333" @click="change=!change"><i class="el-icon-arrow-down"></i></font>
				<font v-if="change" color="#333" @click="change=!change"><i class="el-icon-arrow-up"></i></font>
			</div>
		</div>
		<div v-show="change" style="text-align: left;padding-left: 3%;padding-bottom:5px;border:1px solid #ccc">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编码<el-input style="width: 10%;padding-top:5px;padding-left: 1%;padding-right: 5%" size=mini v-model="input" placeholder="请输入编码"></el-input>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名称<el-input style="width: 10%;padding-left: 1%;padding-right: 5%" size=mini v-model="input" placeholder="请输入编码"></el-input>
			生产厂家<el-select size=mini style="width: 10%;padding-left: 1%;padding-right: 5%" v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
			型号<el-select size=mini style="width: 10%;padding-left: 1%;padding-right: 1%" v-model="value" placeholder="请选择">
					    <el-option

					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>

			<el-button type="primary" size=mini style="margin-left:1% ">查询</el-button>
			<el-button type="warning" size=mini style="margin-left:1% ">重置</el-button>
			<el-button type="info" size=mini style="margin-left:1% ">更多<i class="el-icon-arrow-down"></i></el-button>
			<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID<el-input style="width: 10%;padding-left: 1%;padding-top:5px;padding-right: 5%" size=mini v-model="input" placeholder="请输入编码"></el-input>
			虚实属性<el-select size=mini style="width: 10%;padding-left: 1%;padding-right: 5%" v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
			&nbsp;&nbsp;&nbsp;&nbsp;规格ID<el-input style="width: 10%;padding-left: 1%;padding-right: 5%" size=mini v-model="input" placeholder="请输入编码"></el-input>
			局站<el-select size=mini style="width: 10%;padding-left: 1%;padding-right: 5%" v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		</div>
		<div>
			<div style="text-align: left;padding:3px">
				<el-tag size="mini" closable>光交接箱</el-tag>
				<el-tag type="success" closable size="mini">广交链路信息</el-tag>
				<el-tag type="info" closable size="mini">光交接箱详情</el-tag>
				<el-tag type="warning" closable size="mini">光交接箱新增</el-tag>
			</div>
			<div style="height:20px;text-align: left;padding:5px;background-color: #efefef;color: #1FC838;border-radius: 5px;">
				<div style="line-height: 20px">
					<img src="../../assets/look.png" width="15px">&nbsp;<font style="font-size: 12px">查看</font>&nbsp;&nbsp;
					<img src="../../assets/add.png" width="15px">&nbsp;<font style="font-size: 12px">新增</font>&nbsp;&nbsp;
					<img src="../../assets/copy.png" width="15px">&nbsp;<font style="font-size: 12px">复制</font>&nbsp;&nbsp;
					<img src="../../assets/delete.png" width="15px">&nbsp;<font style="font-size: 12px">删除</font>&nbsp;&nbsp;
					<img src="../../assets/import.png" width="15px">&nbsp;<font style="font-size: 12px">导入</font>&nbsp;&nbsp;
					<img src="../../assets/export.png" width="15px">&nbsp;<font style="font-size: 12px">导出</font>&nbsp;&nbsp;
					<img src="../../assets/dayin.png" width="15px">&nbsp;<font style="font-size: 12px">打印</font>&nbsp;&nbsp;
					<img src="../../assets/tuopu.png" width="15px">&nbsp;<font style="font-size: 12px">拓扑展现</font>&nbsp;&nbsp;
					<img src="../../assets/chengzai.png" width="15px">&nbsp;<font style="font-size: 12px">承载链路</font>&nbsp;&nbsp;
				</div>
				<div style=" overflow-y:auto; overflow-x:auto; width:100%; height:450px;">
					  <el-table
					    ref="multipleTable"
					    :data="tableData"
					    stripe
					    height="450"
					    border
					    size="mini"
					    tooltip-effect="dark"
						:header-cell-style="{background:'#ccc'}"
					    style="width: 100%;"
					    
					    @selection-change="">
					    <el-table-column
					    
					      prop="date"
					      label="日期"
					       show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="姓名"
					       show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="province"
					      label="省份"
					     show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="city"
					      label="市区"
					     show-overflow-tooltip >
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
						 show-overflow-tooltip
					      >
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					      show-overflow-tooltip >
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					      show-overflow-tooltip >
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
					       show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					      show-overflow-tooltip >
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					      show-overflow-tooltip
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					       show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址"
					      show-overflow-tooltip>
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="邮编"
					      show-overflow-tooltip>
					    </el-table-column>
					  </el-table>
				</div>
				<div class="block">
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[100, 200, 300, 400]"
				      :page-size="100"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="400">
				    </el-pagination>
				  </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
      		change:true,
      		input:'',
      		value:'',
      		options:[],
      		currentPage4: 4,
      		tableData: [{
	          date: '2016-05-03',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-08',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }]
		}
	},
	methods:{
		 handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      }
	}
}
</script>

<style>
	
</style>