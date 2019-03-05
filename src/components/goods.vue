<template>
	<div class="item">
		<div>
			<div class="item-img"><img :alt="item.name_title" :src="item.sku_info[itemindex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
			</div>
			<h6>{{item.name}}</h6>
			<h3 >{{item.name_title}}</h3>
			<div class="params-colors">
				<ul class="colors-list">
					<li v-for="(item,index) in item.sku_info">
						<a href="javascript:;" :title="item.spec_json.show_name" @click="tab(index)">
							<img :src="'http://img01.smartisanos.cn/'+item.spec_json.image+'20X20.jpg'">
						</a>
					</li>
				</ul>
			</div>
			<div class="item-btns clearfix">
				<span class="item-gray-btn">
					<router-link :to="{name:'detail',query:{goodsid:item.sku_info[itemindex].sku_id}}">查看详情</router-link>
				</span>
				<span class="item-blue-btn" @click="addcart(item.sku_info[itemindex])">
					加入购物车 
				</span>
			</div>
			<div class="item-price clearfix">
				<i>¥</i><span>199.00</span>
			</div>
			<div class="discount-icon">false</div>
			<div class="item-cover">
				<router-link :to="{name:'detail',query:{goodsid:item.sku_info[itemindex].sku_id}}"></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		data(){
			return {
				itemindex:0
			}
		},
		methods:{
			tab(x){
				this.itemindex=x
			},
			addcart(data){
				let goodsdata={info:data,count:1}
				this.$store.commit('add',goodsdata)
			}
		}
	}
</script>