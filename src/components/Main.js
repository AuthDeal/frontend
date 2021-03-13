import React, { Component } from 'react'
import "../styles/Main.css"
import {Link} from "react-router-dom";
import Footer from "../Component/Footer";
import {getAllItems} from "../utils/utils";

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            //图片轮播div样式相关参数
            width: '10000px',
            transition: '500ms ease-out',
            transform: 'translatex(0px)',
            countnum: 4,     //图片数量
            curPageIndex: 0, //点击右箭头+1，左箭头减1
            viewcount: 3,    //初始展示图片数量（和div宽度相关）
            Larrowstate: true,
            Rarrowstate: true,
            listData: [],
        }
    }

    async componentDidMount() {
        // 获取一级分类列表显示
        let listData = await getAllItems();
        this.setState({listData});
    }

    //函数
    handleclickPrev(){
        let { countnum,viewcount,curPageIndex,Rarrowstate } = this.state
        if(curPageIndex === countnum - viewcount){
            this.setState({
                Rarrowstate:!Rarrowstate 
            })
        }
        this.getPage(curPageIndex-1)
    }

    handleclickNext(){
        let { countnum,viewcount,curPageIndex,Rarrowstate } = this.state
        if (curPageIndex < 0) {
            curPageIndex = 0
        }
        if(curPageIndex === 0){
            this.setState({
                Larrowstate:true
            })
        }
        this.getPage(curPageIndex + 1)
    }
    getPage(value) {
        let { countnum,viewcount,Larrowstate,Rarrowstate} = this.state
        let n = countnum - viewcount
        //一项的宽度
        let itemwidth = 300
        let transform = 'translatex(-' + value * itemwidth + 'px)'
        value > n || 0 > value || this.setState({transform:transform})
        this.setState({
            curPageIndex: value,
        })
        if (value == 0) {
            this.setState({
                Larrowstate: !Larrowstate
            })
        }
        if (value == n) {
            this.setState({
                Rarrowstate: !Rarrowstate
            })
        }
    }
    render() {
        let { width,transition,transform,Larrowstate,Rarrowstate } = this.state
        let LArrowClaName = Larrowstate ? 'arrow_l' : 'hidden'
        let RArrowClaName = Rarrowstate ? 'arrow_r' : 'hidden'
        return (
            <div>
                <div className="bd basefix ">
                    <div className="pro_list_wrap"  style={{ width: width, transition: transition, transform: transform }} id="hot_scenics_list"  >
                        <Link to="/ItemPage/" style={{color:'black'}}>
                        <a className="pro_list_recomm" href="http://taocan.ctrip.com/sh/sanya61/d51680?fluxentrance=10410&amp;FromMenu=hotel" >
                            <img width="280" height="200" alt="" src="https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-12-9-in-cellular-space-gray-03182020?fmt=pjpg&hei=520" />
                            <p className = "item1">$99</p>
                        </a>
                        </Link>

                        <Link to="/ItemPage/" style={{color:'black'}}>
                            <a className="pro_list_recomm" href="http://taocan.ctrip.com/sh/sanya61/d3226?fluxentrance=10410&amp;FromMenu=hotel" >
                                <img width="280" height="200" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2020-hero-gold-wifi-select?wid=1716&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1598915069000" />
                                <p> $103.50 </p>
                            </a>
                        </Link>

                        <a className="pro_list_recomm" href="http://taocan.ctrip.com/sh/sanya61/d65650?fluxentrance=10410&amp;FromMenu=hotel"  >
                            <img width="280" height="200" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81gd3uyxc3L._AC_SL1500_.jpg" />
                            <p> $101.50 </p>
                        </a>
                        <a className="pro_list_recomm" href="http://taocan.ctrip.com/sh/sanya61/d65650?fluxentrance=10410&amp;FromMenu=hotel"  >
                            <img width="280" height="200" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2020-hero-space-wifi-select?wid=1716&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1598915064000" />
                            <p> $105.50 </p>
                        </a>
                    </div>
                    <a href="javascript:;" className={LArrowClaName} onClick={() => this.handleclickPrev()} />
                    <a href="javascript:;" className={RArrowClaName} onClick={() => this.handleclickNext()} />
                </div>

        </div>
        )
    }
}

