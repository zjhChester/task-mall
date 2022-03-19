<template>
	<view class="content">
		<view>
			<view class="">
				<view class="" style="margin-left: 10%;margin-top: 20px;width: 20%;float: left;">
					<image style="border-radius: 50%;width: 70px;height: 70px;"
						src="http://cdn.zjhwork.xyz/vsfileserver/ea5dce87cf9142f2b3873a3f30ca5525.jpeg" mode=""></image>
				</view>
				<view class="" style="width: 30%;float: left;margin-top: 10%;">
					<image style="width: 240px;height: 40px;"
						src="http://cdn.zjhwork.xyz/vsfileserver/9409bcaaa2ec405498c8306a5cbbf2cd.png" mode=""></image>
					<view class="" style="width: 300px;margin-left: 20px;font-size: 14px;">
						<text style="position: absolute;top: 7%;">欢迎回来,今天也要继续加油哦~</text>
					</view>
				</view>
			</view>
			<view class="" style="text-align: center;clear: both;margin-top: 10%;margin-bottom: 10%;">
				<image style="width: 40px;height: 40px;top: 8px;right: 10px;"
					src="http://cdn.zjhwork.xyz/vsfileserver/5256bc27b9b64926ad4f1fc81e9b9359.png" mode=""></image>
				<text style="font-weight: 700;font-size: 30px;text-align: center;color: #fae185;"
					v-text=" '¥'+ wallet"></text>
			</view>
		</view>
		<view>
			<view class="text-area" v-for="(item, i) in tasks">
				<uni-card style="border-radius: 15px;box-shadow: #DCDFE6 1px 1px 10px ;">
					<view class="" style="width: 10%;float: left;margin-top: 3%;">
						<image :src="item.image" style="width: 40px;height: 40px;" mode=""></image>
					</view>
					<view class="" style="width: 70%;float: left;margin-top: 2%;margin-left: 3%;">
						<text v-text="item.taskName" style="font-weight: 600;font-size: 15px;"></text>
						<view></view>
						<text style="font-size: 12px;color: #A5A5A5;" v-text="item.taskDescription"></text>
					</view>
					<view class="" style="width: 10%;float: left;">
						<view class="" style="color: #fadf85;font-weight: 800;margin-left: 15%;font-size: 16px;">
							<text v-text="'+'+item.amount.toFixed(2)"></text>
						</view>
						<view class="" style="margin-top: 13%;">
							<button type="primary" style="font-size: 13px;font-weight: 600;width: 65px;border: none;box-shadow: #A5A5A5 1px 1px 10px;border-radius: 10px;background-color: #69abf5;" size="mini"
								@click="completeTask(item.id)">完成</button>
						</view>
					</view>
					<view class="" style="clear: both;"></view>
				</uni-card>
			</view>
		</view>
		<view>
			<uni-fab style="position: absolute;bottom: 15%;left: 5%;" :content="fabArr" @trigger="openFloat">
			</uni-fab>
			<uni-drawer ref="showLeft" mode="left">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view class="" style="padding: 10%;">
						<view class="">
							<text style="font-size: small;color: #A5A5A5;" v-text="'这里是:'"></text>
						</view>
						<text style="font-size: 13px;font-weight: 600;" v-text="myProfile.nickname+'✨'"></text>
						<view style="margin-top: 30px;"></view>

					</view>

				</scroll-view>
			</uni-drawer>
			<uni-drawer ref="showRight" mode="right" :width="400">
				<image style="width: 70px;height: 70px;margin-left: 10%;cursor: pointer;" @click="closeMall"
					src="http://cdn.zjhwork.xyz/vsfileserver/c712117a0b8b420681a36ee1c1c0e29d.png" mode=""></image>
				<scroll-view style="height: 100%;" scroll-y="true">
					<view class="" style="width: 100%;">
						<view class="center" style="margin: 0 auto;width: 80%;">
							<text style="font-size: 30px;font-weight: 800;">Integral Mall</text>
						</view>
						<view class="" style="padding: 10%;">
							<view class="center product" v-for="(item, i) in products" style="">
								<image :src="item.image" style="width: 70px;height: 70px;"></image>
								<view class="" style="padding: 2%;">
									<text v-text="item.title" style="font-size: 10px;font-weight: 400;"></text>
								</view>
								<view class="">
									<text v-text="item.description" style="font-size: 6px;color: #C8C7CC;"></text>
								</view>
								<view class="" style="clear: all;margin-top: 20px;">
									<view class=""
										style="margin-left: 5%;float: left;width: 40%;height: 30px;font-size: 15px;color: #E43D33;">
										<text v-text="item.price+'¥'"></text>
									</view>
									<view class="" style="width: 40%;height: 30px;float: left;margin-left: 13%;">
										<image @click="buy" style="cursor: pointer;width: 30px;height: 30px;"
											src="http://cdn.zjhwork.xyz/vsfileserver/10e629179c6c4544a3bb96648a6ab1b9.png">
										</image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</uni-drawer>

			<view class="" style="">
				<uni-drawer ref="showTop" mode="top" :width="400">
					<view class="" style="margin-bottom: 20px;">
						<image style="width: 70px;height: 70px;margin-left: 5%;cursor: pointer;" @click="closeMall"
							src="http://cdn.zjhwork.xyz/vsfileserver/c712117a0b8b420681a36ee1c1c0e29d.png" mode="">
						</image>
						<view class="year-month">
							<text v-text="dateFormatCN"></text>
						</view>
						<view class="day" @click="openCalendar">
							<view class="day-cycle">
								<text class="day-num" v-text="dateNum"></text>
							</view>
						</view>
						<view class="" style="width: 70%;">
							<uni-calendar :date="dateStr" ref="calendar" @confirm="confirm" :insert="false"
								@change="change" />
						</view>
					</view>
					<view class="">
						<view class="" style="float: left;width: 10%;">
							<view class="" style="margin-top: 20px;color: #3b5eb9;">
								<text class="amount-text" v-text="'+'+increaseAmount.toFixed(2)"></text>
							</view>
							<image style="margin-top: 20px;width: 80px;height: 80px;"
								src="http://cdn.zjhwork.xyz/vsfileserver/a02d6dbb178d4b2da16974395c915129.png" mode="">
							</image>
							<image style="margin-top: 40px;width: 80px;height: 80px;"
								src="http://cdn.zjhwork.xyz/vsfileserver/acb72192461b4061bb44f848b84e9765.png" mode="">
							</image>
							<view class="" style=";margin-top: 25px;color: #E43D33;">
								<text class="amount-text" v-text="'-'+ reduceAmount.toFixed(2)"></text>
							</view>
						</view>
					</view>
					<scroll-view style="height: 100%;width: 80%;float: left;margin-left: 10%;" scroll-y="true">

						<view style="">
							<view class="" style="margin-right: 5%;">
								<view style="margin-top: 30px;"></view>
								<view class="" v-for="(item,i) in walletRecords" style="font-size: 8px;">
									<uni-card v-if="item.type == 'PLUS'" >
										<text
											v-text="item.taskName+item.causeBy+'获得: '+item.amount.toFixed(2)+'💰'"></text>
										<view style="text-align: right;font-size: 10px;">
											<text v-text="new Date(item.createTime).toLocaleString()"></text>
										</view>
									</uni-card>
									<uni-card v-if="item.type == 'SUBTRACT'">
										<text style="color: #E43D33;" v-if="item.type == 'SUBTRACT'"
											v-text="item.taskName+item.causeBy+'扣除: '+item.amount.toFixed(2)+'💰'"></text>
										<view style="text-align: right;font-size: 10px;">
											<text v-text="new Date(item.createTime).toLocaleString()"></text>
										</view>
									</uni-card>
								</view>
							</view>

						</view>
					</scroll-view>
				</uni-drawer>
			</view>
		</view>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'

	export default {
		components: {
			wybPopup
		},
		data() {
			return {
				increaseAmount: 0,
				reduceAmount: 0,
				dateNum: "",
				dateFormatCN: "",
				dateStr: "",
				products: [{
						title: "阳光沙滩趴~",
						description: "把猪头埋在沙子里",
						image: "http://cdn.zjhwork.xyz/vsfileserver/04d3e0b4c3f248ac96cca33f450bf104.png",
						price: 2999.99
					},
					{
						title: "巴颜喀拉山,我们来啦~",
						description: "让我们瞧瞧黄河发源地!",
						image: "http://cdn.zjhwork.xyz/vsfileserver/0a338a2179174168ae99f66509cc5ec5.png",
						price: 3999.99
					}, {
						title: "滑雪,skr~",
						description: "来场单板大比拼",
						image: "http://cdn.zjhwork.xyz/vsfileserver/1d211a6046114af8a45899da9798632b.png",
						price: 1999.99
					},
					{
						title: "来一场浪漫的电影约会吧!~",
						description: "movie! movie! movie!",
						image: "http://cdn.zjhwork.xyz/vsfileserver/bc34615d0d4642e9b327fb0befa32343.png",
						price: 999.99
					}
				],
				fabArr: [{
					text: "MyProfile",
					iconPath: "http://cdn.zjhwork.xyz/vsfileserver/50dda7ff5c5342bf810f0d4790bb7565.png"
				}, {
					text: "Records",
					iconPath: "http://cdn.zjhwork.xyz/vsfileserver/158395b0beb14756bf1ca0a6bbcf69bb.png"
				}, {
					text: "MyMall",
					iconPath: "http://cdn.zjhwork.xyz/vsfileserver/5627d5d8d40e4e6f93c519586cdbdcd1.png"
				}],
				myProfile: {},
				token: '',
				floatStatus: false,
				wallet: 0,
				walletInfo: {},
				walletRecords: [],
				tasks: [{
					id: '123',
					taskName: "test",
					taskDescription: "123123123123123123",
					image: "12312",
					status: "123123",
					type: "123123123",
					amount: 0
				}]
			}
		},
		onLoad() {
			this.floatStatus = false;
			this.setToken();
			this.loadMyProfile();
			this.loadTasks();
			this.loadWallet();
			this.initDate();
			this.loadWalletRecords(this.formatterDate(new Date()));
		},
		methods: {
			initDate: function() {
				this.dateStr = this.formatterDate(new Date());
				this.dateFormatCN = this.formatDateCN(new Date());
				this.dateNum = new Date().getDate();
			},
			formatDateCN: function(date) {
				const year = date.getFullYear();
				const month = this.parseMonthOrDay(date.getMonth() + 1);
				const day = this.parseMonthOrDay(date.getDate());
				return year + "年" + month + "月";
			},
			confirm: function(e) {
				console.log(e)
				this.date = e.fulldate
				this.loadWalletRecords(e.fulldate)
				this.dateNum = e.date
			},
			formatterDate(date) {
				const year = date.getFullYear();
				const month = this.parseMonthOrDay(date.getMonth() + 1);
				const day = this.parseMonthOrDay(date.getDate());
				return year + "-" + month + "-" + day;
			},
			parseMonthOrDay: function(exp) {
				if (exp.toString().length == 1) {
					return "0" + exp;
				}
				return exp;
			},
			loadWalletRecords: function(date) {
				uni.request({
					url: "http://zjhwork.xyz:9998/wallets/records?createDate=" + date,
					method: 'get',
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						this.walletRecords = res.data;
						this.increaseAmount = 0;
						this.reduceAmount = 0;
						this.walletRecords.forEach((v) => {
							if (v.type == "PLUS") {
								this.increaseAmount += v.amount;
							} else {
								this.reduceAmount += v.amount;
							}
							if (!v.taskName) {
								v.taskName = ""
							} else {
								v.taskName = "「" + v.taskName + "」"
							}
						})

					}
				})

			},
			buy: function(res) {
				uni.showToast({
					title: "养猪人还没做完~别着急",
					icon: 'none'
				})
			},
			openCalendar: function(e) {
				this.$refs.calendar.open()
			},
			closeMall: function() {
				this.$refs.showRight.close();
				this.$refs.showTop.close();
			},
			openFloat: function(res) {
				if (res.index == 0) {
					this.$refs.showLeft.open();
				}
				if (res.index == 1) {
					this.$refs.showTop.open();
				}
				if (res.index == 2) {
					this.$refs.showRight.open();
				}
			},
			loadMyProfile: function() {
				uni.request({
					url: "http://zjhwork.xyz:9998/users/me",
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						this.myProfile = res.data
						uni.showToast({
							title: '欢迎回来' + this.myProfile.nickname + '~',
							duration: 1500
						});
					}
				});
			},
			setToken: function() {
				uni.getStorage({
					key: "Authorization",
					success: (token) => {
						this.token = token.data;
					}
				})
			},
			loadTasks: function() {
				uni.request({
					url: "http://zjhwork.xyz:9998/tasks/all?status=UNFINISHED",
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						if (res.statusCode == 200) {
							this.tasks = [];
							res.data.forEach(v => {
								this.tasks.push(v)
							})
						}
						if (res.statusCode == 401) {
							uni.showToast({
								title: '未登陆!',
								icon: 'error'
							})
							uni.redirectTo({
								url: './login'
							})
						}

					}
				})
			},
			completeTask: function(id) {
				uni.request({
					url: "http://zjhwork.xyz:9998/tasks/" + id + "/finished",
					method: 'POST',
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						this.loadTasks()
						this.loadWallet()
						uni.showToast({
							title: '完成任务!💰up!up!'
						});
					}
				})
			},
			loadWallet: function(id) {
				uni.request({
					url: "http://zjhwork.xyz:9998/wallets/me",
					method: 'get',
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						this.wallet = res.data.amount.toFixed(2);
						this.walletInfo = res.data;
					}
				})
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.center {
		text-align: center;
	}

	.btn-border {
		border-bottom: #A5A4A4 1px solid;
	}

	.product {
		width: 40%;
		height: 200px;
		margin-left: 8%;
		margin-top: 10%;
		/* border: #DCDFE6 0.5px solid; */
		border-radius: 10%;
		box-shadow: #C7C7C7 5px 5px 20px;
		float: left;
	}

	.border {
		border: #E43D33 1px solid;
	}

	.day {
		text-align: center;
		font-size: 50px;
		width: 80%;
		margin: 0 auto;
		margin-top: 30px;
		border-radius: 5px;
		border: none;
		box-shadow: #adc9e1 1px 1px 30px;
		height: 100px;
		text-align: center;
		border-radius: 50%;
		width: 70px;
		height: 70px;
		line-height: 70px;
		padding: 10px;
	}

	.day-cycle {}

	.day-num {
		text-align: center;
		width: 70px;
		color: #adc9e1;
		height: 70px;
		line-height: 70px;
		padding: 10px;
	}

	.year-month {
		text-align: center;
		font-size: 30px;
		color: #adc9e1;
		text-shadow: #A5A4A4 1px 1px 1px;
	}

	.amount-text {
		width: 200px;
		margin-left: 20px;
		font-size: 20px;
	}
</style>
