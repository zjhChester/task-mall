<template>
	<view class="content background" :style="'height: '+windowHeight+'px;'">
		<view class="" style="margin-top: 40%;">
			
		</view>
		<view class="logo"><image style="border-radius: 50%;" src="http://cdn.zjhwork.xyz/vsfileserver/2de56398eebb489ea3251b39c1d46e59.jpeg" mode=""></image></view>
		<view class="">
			<input type="tel" class=" input" name="" v-model="username" placeholder="username" />
		</view>
		<view class="" style="margin-top: 30px;">
			<input type="password" class=" input" name="" v-model="password" placeholder="password" />
		</view>
		<view class="">
			<button type="warn" style="	border: none;box-shadow: #E43D33 1px 1px 15px;font-size: 18px;width: 200px; border-radius: 5px;margin-top: 40px;" @click="login">Login</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:"",
				windowHeight:400
			}
		},
		onLoad() {
			this.windowHeight = window.innerHeight-50;
		},
		methods: {
			login : function () {
				uni.showLoading()
				if(!this.username || !this.password){
					uni.showToast({
						title:"check require item",
						icon:'error',
						duration:1000
					})
					return;
				}
				uni.request({
					url:"http://zjhwork.xyz:9998/users/authenticate",
					method:'POST',
					data:{"username":this.username, "password": this.password},
					success: (res) => {
						if(res.statusCode != 200){
							uni.showToast({
								title:'username or password incorrect!',
								icon:'error'
							})
							return;
						}
						uni.hideLoading()
						uni.setStorageSync('Authorization', res.data)
						uni.redirectTo({
							url:'./index'
						});
						
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	
	.content{
		padding: 100upx;
	}
	.logo{
	    text-align: center;
		image{
		    height: 200upx;
		    width: 200upx;
		    margin: 0 0 60upx;
		}
	}
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			padding: 7px 0;
		}
	}
	button[type="primary"]{
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
	.input{
		border: none;
		background-color: #FFFFFF;
		padding-left: 20px;
		border-radius: 5px;
		width: 180px;
		height: 40px;
		text-align: left;
		margin: 0 auto;
		// color: #DCDFE6;
		box-shadow: #DCDFE6 1px 1px 10px;
	}
	
	.background{
		// background-image: url(https://img95.699pic.com/photo/40159/9989.gif_wh300.gif);
		// background-color: #1C394d;
		background-image: linear-gradient(#e66465, #9198e5);
	}
</style>
