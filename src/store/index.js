import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
    	cartdata:[],
        max:false,
        cartshow:false,
        take:[
            {
              "name": "王某某",
              "phone": "13811111111",
              "areaCode": "010",
              "landLine": "64627856",
              "provinceId": 110000,
              "province": "北京市",
              "cityId": 110100,
              "city": "市辖区",
              "countyId": 110106,
              "county": "海淀区",
              "add": "上地十街辉煌国际西6号楼319室",
              "default": true
            },{
              "name": "李某某",
              "phone": "13811111111",
              "areaCode": "010",
              "landLine": "64627856",
              "provinceId": 110000,
              "province": "北京市",
              "cityId": 110100,
              "city": "市辖区",
              "countyId": 110106,
              "county": "海淀区",
              "add": "上地十街辉煌国际东6号楼350室",
              "default": false
            }
        ],
        orderdata:[]
    },
    mutations:{
    	add(state,data){
    		let nogoods=true
    		state.cartdata.forEach(goods=>{
    			if(goods.sku_id===data.info.sku_id){
    				goods.count+=data.count
                    if(goods.count>goods.limit_num){
                        goods.count-=data.count
                        state.max=true
                    }
    				nogoods=false
    			}
    		})
    		if(nogoods){
    			let goodsdata=data.info
    		    Vue.set(goodsdata,'count',data.count)
                Vue.set(goodsdata,'check',true)
                state.cartdata.push(goodsdata)
                state.cartshow=true
    		}
            
    	},
        closewarn(state){
            state.max=false
        },
        delgoods(state,id){
            state.cartdata.forEach((goods,index)=>{
                if(goods.sku_id===id){
                    state.cartdata.splice(index,1)
                }
            })
        },
        showcart(state){
            state.cartshow=true
        },
        hidecart(state){
            state.cartshow=false
        },
        addcount(state,id){
            state.cartdata.forEach((goods,index)=>{
                if(goods.sku_id===id){
                    if(goods.count>=goods.limit_num){return}
                    goods.count++
                }
            })
        },
        redcount(state,id){
            state.cartdata.forEach((goods,index)=>{
                if(goods.sku_id===id){
                    if(goods.count<=1) return
                    goods.count--
                }
            })
        },
        checkgoods(state,id){
            state.cartdata.forEach((goods,index)=>{
                if(goods.sku_id===id){
                    goods.check=!goods.check
                }
            })
        },
        checkall(state,allcheck){
            state.cartdata.forEach((goods,index)=>{
                goods.check=!allcheck
            })
        },
        delcheck(state){
            // state.cartdata.forEach((goods,index)=>{
            //     if(goods.check){
            //         state.cartdata.splice(index,1)
            //     }
            // })
            let i=state.cartdata.length
            while(i--){
                if(state.cartdata[i].check){
                    state.cartdata.splice(i,1)
                }
            }
        },
        submitinfo(state,data){
            if(data.default){
                state.take.forEach(receive=>{
                    receive.default=false
                })
                state.take.push(data)
            }
        },
        submitorder(state,data){
            state.orderdata.unshift(data)
            let i=state.cartdata.length
            while(i--){
                if(state.cartdata[i].check){
                    state.cartdata.splice(i,1)
                }
            }
        },
        paynow(state,id){
            state.orderdata.forEach(order=>{
                if(order.orderid===id){
                    order.ispay=true
                }
            })
        }
    },
    getters:{
        goodscount(state){
            let count=0
            state.cartdata.forEach(goods=>{
                count+=goods.count
            })
            return count
        },
        goodsprice(state){
            let price=0
            state.cartdata.forEach(goods=>{
                price+=goods.count*goods.price
            })
            return price
        },
        allcheck(state){
            let allchecked=true
            state.cartdata.forEach(goods=>{
                if(!goods.check){
                    allchecked=false
                }
            })
            return allchecked
        },
        checkcount(state){
            let count=0
            state.cartdata.forEach(goods=>{
                if(goods.check){
                    count+=goods.count
                }
            })
            return count
        },
        checkprice(state){
            let price=0
            state.cartdata.forEach(goods=>{
                if(goods.check){
                    price+=goods.price*goods.count
                }
            })
            return price
        },
        goodscheck(state){
            let goodscheck=[]
            state.cartdata.forEach(goods=>{
                if(goods.check){
                    goodscheck.push(goods)
                }
            })
            return goodscheck
        }
    }
})

export default store