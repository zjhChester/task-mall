<template>
	<view class="content">

		<view>
			<view class="">
				<view class="" style="margin-left: 10%;margin-top: 20px;width: 20%;float: left;">
					<image style="border-radius: 50%;width: 70px;height: 70px;"
						src="http://cdn.zjhwork.xyz/vsfileserver/ea5dce87cf9142f2b3873a3f30ca5525.jpeg" mode=""></image>
				</view>
				<view class="" style="width: 30%;float: left;margin-top: 10%;">
					<image class="image-dialog" style="width: 224px;height: 40px;"
						src="http://cdn.zjhwork.xyz/vsfileserver/b18ab05e96d441f4988769bff477e60e.png" mode=""></image>
				</view>
			</view>
			<view class="" style="text-align: center;clear: both;margin-top: 10%;margin-bottom: 10%;">
				<image style="width: 40px;height: 40px;top: 8px;right: 10px;"
					src="http://cdn.zjhwork.xyz/vsfileserver/5256bc27b9b64926ad4f1fc81e9b9359.png" mode=""></image>
				<text style="font-weight: 700;font-size: 30px;text-align: center;color: #fae185;"
					v-text=" '¥'+ wallet"></text>
			</view>
		</view>
		<scroll-view scroll-y="true" style="max-height: 500px;overflow-y: scroll;">
			<view class="text-area" v-for="(item, i) in tasks">
				<uni-card style="border-radius: 15px;box-shadow: #DCDFE6 1px 1px 10px ;">
					<view class="" style="width: 10%;float: left;margin-top: 3%;">
						<image :src="item.image" style="width: 40px;height: 40px;" mode=""></image>
					</view>
					<view class="" style="width: 65%;float: left;margin-top: 2%;margin-left: 5%;">
						<text v-text="item.taskName" style="font-weight: 600;font-size: 15px;"></text>
						<view></view>
						<text style="font-size: 12px;color: #A5A5A5;" v-text="item.taskDescription"></text>
					</view>
					<view class="" style="width: 10%;float: left;">
						<view class="" style="color: #fadf85;font-weight: 800;font-size: 16px;">
							<text v-text="'+'+Number(item.amount).toFixed(2)"></text>
						</view>
						<view class="" style="margin-top: 13%;">
							<button type="primary"
								style="font-size: 13px;font-weight: 600;width: 65px;border: none;box-shadow: #A5A5A5 1px 1px 10px;border-radius: 10px;background-color: #69abf5;"
								size="mini" @click="completeTask(item.id)">完成</button>
						</view>
					</view>
					<view class="" style="clear: both;"></view>
				</uni-card>
			</view>
		</scroll-view>
		<view>
			<uni-fab style="position: absolute;bottom: 15%;left: 5%;" :content="fabArr" @trigger="openFloat">
			</uni-fab>
			<uni-drawer ref="showLeft" mode="left" :width="300">
				<view class=""
					style="margin-top:20px;margin-left: 20px;margin-right: 20px;border-radius: 10px;box-shadow: #DCDCDC 1px 1px 12px;padding: 10px;background-color: #f9f9f9;"
					@click="count++">
					<view class="" style="width: 30%;float: left;">
						<image style="width: 50px;height: 50px;border-radius: 50%;"
							src="http://cdn.zjhwork.xyz/vsfileserver/2de56398eebb489ea3251b39c1d46e59.jpeg" mode="">
						</image>
					</view>
					<view class="" style="width: 60%;float: left;margin-top: 10px;">
						<text style="font-size: 13px;font-weight: 800;" v-text="myProfile.nickname+'✨'"></text>
					</view>
					<view class="" style="clear: both;font-size: 13px;width: 90%;">
						<text v-text="'个人介绍:  开心得冒泡泡得橘子海~~~'"></text>
					</view>

				</view>

				<view class="" style="clear: both;padding: 10%;">

				</view>
				<scroll-view style="height: 100%;max-height: 300px;overflow-y:scroll ;" scroll-y="true">

					<view class="" v-for="(current, i) in audios " v-show="count%5==0">
						<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name"
							:author="current.author" controls></audio>
					</view>

				</scroll-view>
			</uni-drawer>
			<uni-drawer ref="showRight" mode="right" :width="400">
				<view class="" style="margin-top: 15px;">

				</view>
				<image
					style="position: absolute;margin-top: 14px;width: 20px;height: 20px;margin-left: 10%;cursor: pointer;"
					@click="closeMall" src="../../static/back.png" mode=""></image>
				<view class="center" style="margin: 0 auto;width: 80%;margin-left: 60px;">
					<uni-search-bar style="" @confirm="search" radius="15" cancelButton="auto" :focus="false"
						v-model="pageInfo.product.keywords" @cancel="clear" @clear="clear">
					</uni-search-bar>
				</view>
				<view class="" style="background-color: #f3f3f3;margin-top: 5%;padding-top: 20px;padding-bottom: 20px;">
					<view class="">
						<view class="" style="width: 22%;margin-left: 12%;float: left;">
							<text @click="clickGoodsNav(1)" :class="activeIndex==1 ? 'goods_nav_actived':'goods_nav' ">零食</text>
						</view>
						<view  style="width: 22%;margin: 0 auto;float: left;">
							<text @click="clickGoodsNav(2)" :class="activeIndex==2 ? 'goods_nav_actived':'goods_nav' ">旅行</text>
						</view>
						<view class="" style="width: 22%;margin: 0 auto;float: left;">
							<text @click="clickGoodsNav(3)" :class="activeIndex==3 ? 'goods_nav_actived':'goods_nav' ">娱乐</text>
						</view>
						<view class="" style="width: 22%;margin: 0 auto;float: left;">
							<text @click="clickGoodsNav(4)" :class="activeIndex==4 ? 'goods_nav_actived':'goods_nav' ">日用</text>
						</view>
					</view>
					<view class="" style="clear: both;">
						
					</view>
					<scroll-view style="height: 100%;max-height: 600px;min-height: 600px;overflow-y:scroll ;padding-top: 5%;" scroll-y="true">
						<view class="" style="width: 100%;">
					
							<view class="" style="padding: 10px;">
								<view class="center" style="margin-top: 50%;" v-if="products.length == 0">
									<view class="">
										<text>很抱歉未找到相关商品~\n\n联系饲养员添加叭!</text>
									</view>
								</view>
								<view v-if="products.length != 0" >
									
									<view class="" style="margin-left: 5%;width: 45%;float: left;">
										<view class="product" v-for="(item, i) in productsLeft" style="background-color: #FFFFFF;clear: both;">
											<image :src="item.image" style="width: 100%;height: 150px;border-radius: 10px;"></image>
											<view class="" style="text-indent: 10px;">
												<text v-text="item.productName" style="font-size: 14px;font-weight: 400;"></text>
											</view>
											<view class="" style="text-indent: 8px;">
												<text v-text="item.productDescription"
													style="font-size: 6px;color: #C8C7CC;"></text>
											</view>
											<uni-tag style="margin: 0 2px;margin-left: 5px; margin-top: 1px;box-shadow: #C8C7CC 1px 1px 20px;" size="mini" :text="tag.value"  :type="index==0?'warning':index%2==0?'primary':'success'" :circle="true" v-for="(tag, index) in item.tags"></uni-tag>
											<view class="" style="margin-top: 20px;">
												<view class=""
													style="margin-left: 12%;float: left;width: 40%;height: 30px;font-size: 15px;color: #E43D33;">
													<text v-text="'¥'+item.price"></text>
												</view>
												<view class="" style="width: 40%;height: 30px;float: left;margin-left: 10px;">
													<image @click="buy(item)" style="cursor: pointer;width: 30px;height: 30px;"
														src="http://cdn.zjhwork.xyz/vsfileserver/10e629179c6c4544a3bb96648a6ab1b9.png">
													</image>
												</view>
												<view class="" style="clear: both;">
													
												</view>
											</view>
										</view>
									</view>
									<view class="" style="margin-left: 2.5%;width: 45%;float: left;">
										<view class="product" v-for="(item, i) in productsRight" style="background-color: #FFFFFF;clear: both;">
											<image :src="item.image" style="width: 100%;height: 150px;border-radius: 10px;"></image>
											<view class="" style="text-indent: 10px;">
												<text v-text="item.productName" style="font-size: 14px;font-weight: 400;"></text>
											</view>
											<view class="" style="text-indent: 8px;">
												<text v-text="item.productDescription"
													style="font-size: 6px;color: #C8C7CC;"></text>
											</view>
											<uni-tag style="margin: 0 2px;margin-top: 10px;" size="mini" :text="tag.value"  :type="index==0?'warning':index%2==0?'primary':'success'" :circle="true" v-for="(tag, index) in item.tags"></uni-tag>
											<view class="" style="clear: all;margin-top: 20px;">
												<view class=""
													style="margin-left: 12%;float: left;width: 40%;height: 30px;font-size: 15px;color: #E43D33;">
													<text v-text="'¥'+item.price"></text>
												</view>
												<view class="" style="width: 40%;height: 30px;float: left;margin-left: 10px;">
													<image @click="buy(item)" style="cursor: pointer;width: 30px;height: 30px;"
														src="http://cdn.zjhwork.xyz/vsfileserver/10e629179c6c4544a3bb96648a6ab1b9.png">
													</image>
												</view>
											</view>
											<view class="" style="clear: both;">
												
											</view>
										</view>
									</view>
									
								</view>
								<view class="" style="margin-top: 10px;clear: both;">
									
								</view>
							</view>
						</view>
					</scroll-view>
					
					<uni-popup ref="buyPop" type="bottom">
						<view class="" style="padding: 15px;margin-left: 15%;width: 80%;margin: 0 auto;margin-top: 50%;">
							<uni-card>
								<view class="" style="text-align: center;">
									<text v-text="'确认购买「'+currentProduct.productName+'」吗?'"></text>
								</view>
								<view class="" style="margin-top: 10%;">
									<view class="" @click="subtractQuantity" style="cursor: pointer;line-height: 38px;margin-left: 5%;float: left;font-size: 22px;font-weight: 800;">
										<text>-</text>
									</view>
									<input class="input" v-model="currentQuantity"  @input="calculatePrice"
										style="margin-left: 5%;width: 30px;float: left;" type="number" placeholder="" />
										<view class="" @click="plusQuantity" style="line-height: 38px;margin-left: 5%;float: left;font-size: 22px;font-weight: 800;">
											<text>+</text>
										</view>
									<view  class=""  style="cursor: pointer;color: #E43D33;margin-left: 20%;float: left;font-size: 23px;line-height: 40px;">
										<text v-text="'¥ '+Number(calculatedPrices).toFixed(2)"></text>
									</view>
								</view>
								<view class="" style="clear: both;">
									</view>
									<view class="" style="margin-top: 10%;">
									<button style="margin-top: 10px;" type="default" @click="summitOrder">确认购买</button>
								</view>
					
							</uni-card>
						</view>
					</uni-popup>
					
				</view>
				<view class="" style="width: 80%;margin: 0 auto;margin-top: 5%;">
					<uni-pagination :pageSize="pageInfo.product.size" :current="pageInfo.product.page"
						:total="pageInfo.product.total" title="" @change="changePage" />
				</view>
			</uni-drawer>

			<view class="" style="">
				<uni-drawer ref="showTop" mode="top" :width="400">
					<view class=""
						style="padding: 15px;margin-top:20px;margin-right: 20px;margin-right: 20px;margin-left: 20px;width: 78%;border-radius: 10px;box-shadow: #DCDCDC 1px 1px 12px;background-color: #f9f9f9;">
						<view class="" style="float: left;width: 25%;">
							<view class="" style="margin: ;">
								<image style="width: 50px;height: 50px;border-radius: 50%;margin-left: 13px;"
									src="http://cdn.zjhwork.xyz/vsfileserver/2de56398eebb489ea3251b39c1d46e59.jpeg"
									mode="">
								</image>
							</view>

							<view class="" @click="openCalendar">
								<view class=""
									style="color: #141414;text-align: center;font-size: 13px;margin-top: 13px;">
									<text v-text="dateFormatYear"></text>
								</view>
								<view class="" style="margin-top: 5px;font-size: 13px;">
									<view class="" style="color: #141414;text-align: center;">
										<text class="" v-text="dateFormatMonth+'-'+dateNum"></text>
									</view>
								</view>
							</view>
						</view>
						<view class="" style="float: left;width: 25%;margin-left: 5%;">
							<view class="">
								<view class="">
									<text style="font-size: 14px;color: #b0b0b0;">累计获得</text>
								</view>
								<view style="margin-top: 5px;">
									<text v-text="Number(walletInfo.totalRewardsAmount).toFixed(2)"></text>
								</view>
							</view>
							<view class="" style="margin-top: 20px;">
								<view class="">
									<text style="font-size: 14px;color: #b0b0b0;">今日获得</text>
								</view>
								<view style="margin-top: 5px;">
									<text v-text="Number(increaseAmount).toFixed(2)"></text>
								</view>
							</view>
						</view>
						<view class="" style="float: left;width: 19%;margin-left: 8%;">
							<view class="">
								<view class="">
									<text style="font-size: 14px;color: #b0b0b0;">余额</text>
								</view>
								<view style="color: #f4cb45;margin-top: 5px;">
									<text v-text="Number(walletInfo.amount).toFixed(2)"></text>
								</view>
							</view>

							<view class="" style="margin-top: 20px;">
								<view class="">
									<text style="font-size: 14px;color: #b0b0b0;">今日扣除</text>
								</view>
								<view style="margin-top: 5px;">
									<text v-text="Number(reduceAmount).toFixed(2)"></text>
								</view>
							</view>

						</view>
						<view class="" style="float: left;width: 3%;margin-left: 12%;">
							<view class="">
								<image style="width: 20px;height: 20px;margin-left: 5%;cursor: pointer;"
									@click="closeMall" src="../../static/back2.png" mode="">
								</image>
							</view>

						</view>
						<view class="" style="clear: both;">

						</view>
					</view>
					<view class="" style="margin-bottom: 20px;clear: both;">

					</view>
					<view class="" style="margin-left: 5%;margin-top: 10px;font-size: 20px;">
						<text>明细</text>
					</view>
					<scroll-view
						style="border-top: 0.5px #F1F1F1 solid;;height: 100%;margin-top: 5%;max-height: 500px;width: 90%;margin-left: 5%;overflow-y: scroll;"
						scroll-y="true">
						<view style="">
							<view class="" style="margin-right: 5%;">
								<view style=""></view>
								<view class="" v-for="(item,i) in walletRecords" style="font-size: 15px;">
									<view class="" v-if="item.type == 'PLUS'"
										style="margin-top: 5%;border-bottom: 0.5px #F1F1F1 solid;">
										<view class="" style="width: 96%;">

										</view>
										<view class="" style="float: left;width: 80%; margin-top: 5%;">

											<view class="">
												<text v-text="item.taskName+item.causeBy"></text>
											</view>
											<view class=""
												style="font-size: 11px;margin-top: 5%;margin-left: 4%;margin-bottom: 5px;">
												<text v-text="new Date(item.createTime).toLocaleString()"></text>
											</view>
										</view>
										<view class=""
											style="float: left;width: 5%;margin-top: 8%;font-weight: 600;font-size: 15px;">
											<view class="" style="color: #f4cb45;">
												<text v-text="'+'+Number(item.amount).toFixed(2)"></text>
											</view>
										</view>
										<view class="" style="clear: both;">

										</view>
									</view>
									<view class="" v-if="item.type == 'SUBTRACT'"
										style="border-bottom: 0.5px #F1F1F1 solid;margin-top: 5%;">
										<view class="" style="width: 96%;">

										</view>
										<view class="" style="float: left;width: 80%; margin-top: 5%;">

											<view class="">
												<text v-text="item.taskName+item.causeBy"></text>
											</view>
											<view class=""
												style="font-size: 11px;margin-top: 5%;margin-left: 4%;margin-bottom: 5px;">
												<text v-text="new Date(item.createTime).toLocaleString()"></text>
											</view>
										</view>
										<view class=""
											style="float: left;width: 5%;margin-top: 8%;font-weight: 600;font-size: 15px;">
											<view class="" style="color: #ea4035;">
												<text v-text="'-'+Number(item.amount).toFixed(2)"></text>
											</view>
										</view>
										<view class="" style="clear: both;">

										</view>
									</view>
								</view>
							</view>

						</view>
					</scroll-view>
					<uni-calendar ref="calendar" :insert="false" :clearDate="false" @confirm="confirm"></uni-calendar>
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
				count: 1,
				audios: [],
				increaseAmount: 0,
				reduceAmount: 0,
				dateNum: "",
				dateFormatYear: "",
				dateFormatMonth: "",
				dateStr: "",
				products: [{
					title: "阳光沙滩趴~",
					description: "把猪头埋在沙子里",
					image: "http://cdn.zjhwork.xyz/vsfileserver/04d3e0b4c3f248ac96cca33f450bf104.png",
					price: 2999.99
				}],
				productsLeft:[],
				productsRight:[],
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
				}],
				pageInfo: {
					product: {
						total: 0,
						page: 1,
						size: 10,
						type: "FOOD",
						keywords: ""
					}
				},
				currentProduct: {},
				currentQuantity: 1,
				calculatedPrices: 0,
				activeIndex: 1
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
			this.loadingPage()
			this.loadingSongs()
			
		},
		methods: {
			loadingSongs: function(){
				uni.request({
					url:"http://zjhwork.xyz:9998/keymaps/current-version?key=taskMallSongs",
					method:'GET',
					success: (res) => {
						this.audios = JSON.parse(res.data.jsonValue)
					}
				})	
			},
			loadingPage: function(){
				let page = this.pageInfo.product;
				this.loadProducts(page.page, page.size, page.type, page.keywords);	
			},
			clickGoodsNav: function(index){
				this.activeIndex = index;
				let page = this.pageInfo.product;
				if(index == 1){
					page.type = "FOOD";
				}
				if(index == 2){
					page.type = "TRAVEL";
				}
				if(index == 3){
					page.type = "ENTERTAINMENT";
				}
				if(index == 4){
					page.type = "DAILY";
				}
				this.loadingPage();
			},
			subtractQuantity: function(){
				if(this.currentQuantity == 1){
					return;
				}
				this.currentQuantity--;
				this.calculatePrice();
			},
			plusQuantity: function(){
				this.currentQuantity++;
				this.calculatePrice()
			},
			summitOrder: function(){
				if (this.currentQuantity == 0) {
					uni.showToast({
						title:"购买数量必须大于0",
						icon:'error'
					})
					return;
				}
				uni.request({
					url: "http://zjhwork.xyz:9998/user-orders",
					method: "POST",
					header: {
						'Authorization': this.token
					},
					data: {
						"quantity": this.currentQuantity,
						"productId": this.currentProduct.id,
						"price": this.calculatedPrices
					},
					success: (res) => {
						if(res.statusCode == 200){
							uni.showToast({
								title: '购买成功~!',
								icon:"success"
							});
							this.$refs.buyPop.close()
						}else{
							uni.showToast({
								title: '订单创建失败,请联系管理员!'+res.data.message,
								icon:"error"
							});
						}
						
					}
				});	
			},
			calculatePrice: function(e) {
				if (this.currentQuantity == 0) {
					uni.showToast({
						title:"购买数量必须大于0",
						icon:'error'
					})
					return;
				}
				uni.request({
					url: "http://zjhwork.xyz:9998/products/calculations",
					method: "POST",
					header: {
						'Authorization': this.token
					},
					data: {
						"quantity": this.currentQuantity,
						"id": this.currentProduct.id
					},
					success: (res) => {
						this.calculatedPrices = res.data
					}
				});

			},
			clear: function(e) {
				let page = this.pageInfo.product;
				page.keywords = "";
				this.loadProducts(page.page, page.size, page.type, page.keywords);
			},
			search: function(e) {
				let page = this.pageInfo.product;
				page.keywords = e.value;
				this.loadProducts(page.page, page.size, page.type, page.keywords);
			},
			changePage: function(e) {
				let page = this.pageInfo.product;
				if (e.type == "next") {
					page.page += 1;
				} else {
					page.page -= 1;
				}

				this.loadProducts(page.page, page.size, page.type, page.keywords);
			},
			loadProducts: function(page, size, type, keywords) {
				uni.showLoading()
				uni.request({
					url: "http://zjhwork.xyz:9998/products?page=" + page + "&size=" + size + "&type=" + type
						.trim() + "&keywords=" + keywords,
					header: {
						'Authorization': this.token
					},
					success: (res) => {
						uni.hideLoading()
						this.products = [];
						this.productsLeft = [];
						this.productsRight = [];
						this.products = res.data.data;
						this.pageInfo.product.total = res.data.total;
						this.products.forEach((item,index)=> {
							if(index %2 == 0){
								this.productsLeft.push(item)
							}else{
								this.productsRight.push(item)
							}
						})
					}
				});

			},
			countPlus: function() {
				this.count += 1;
			},
			initDate: function() {
				this.dateStr = this.formatterDate(new Date());
				this.dateFormatYear = this.formatDateCN(new Date(), 'y');
				this.dateFormatMonth = this.formatDateCN(new Date(), 'm');
				this.dateNum = new Date().getDate();
			},
			formatDateCN: function(date, type) {
				const year = date.getFullYear();
				const month = this.parseMonthOrDay(date.getMonth() + 1);
				const day = this.parseMonthOrDay(date.getDate());
				if (type == 'y') {
					return year;
				}
				if (type == 'm') {
					return month;
				}
				return year + "-" + month + "-" + day;
			},
			confirm: function(e) {
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
				this.currentQuantity = 1
				this.currentProduct = res
				this.$refs.buyPop.open('top')
				this.calculatePrice()
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
					this.loadWalletRecords(this.formatterDate(new Date()));
					this.loadWallet();
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
						this.wallet = Number(res.data.amount).toFixed(2);
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
		font-family: system-ui;
	}

	view {
		color: #141414;
	}

	.center {
		text-align: center;
	}

	.btn-border {
		border-bottom: #A5A4A4 1px solid;
	}

	.product {
		width: 100%;
		margin-bottom: 5%;
		border-radius: 10%;
		box-shadow: #C7C7C7 1px 1px 5px;
		/* float: left; */
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

	.dialog {
		position: relative;
		margin-top: 50px;
		margin-left: 50px;
		padding-left: 20px;
		width: 300px;
		line-height: 2;
		border: 1px solid #D8D8D8;
		color: #555555;
		border-radius: 4px;
	}

	.dialog::before {
		content: '';
		position: absolute;
		border: 8px solid;
		border-color: transparent #D8D8D8 transparent transparent;
		left: -16px;
		top: 8px;
	}

	.image-dialog {
		font-size: 13px;
	}

	.image-dialog::before {
		content: '欢迎回来,今天也要继续加油哦';
		position: absolute;
		top: 11px;
		left: 22px;

	}

	.input {
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
	.goods_nav{
		cursor: pointer;
		padding-bottom: 10px;
	}
	.goods_nav_actived{
		transition-duration: 0.5s;
		cursor: pointer;
		color: #3d84f4;
		padding-bottom: 10px;
		border-bottom: #3d84f4 2px solid;
	}
</style>
