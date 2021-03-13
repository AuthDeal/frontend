import React from 'react';
import seller1 from '../images/seller1.jpg';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import ItemSale from "./ItemSale";
// import {getSellerByUserId} from '../utils/utils';
import Header from "./Header";
import Footer from "./Footer";

class SellerInfo extends React.Component{

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         userName: getSellerByUserId(userId).username,
    //         sellerPicture: getSellerByUserId(userId).picture,
    //         Email: getSellerByUserId(userId).email,
    //     };
    //
    // }

    render(){
        // const {userName, sellerPicture, Email} = this.state;
        return(
            <div>
                <div>
                   <Header />
                </div>
                <div align="center">
                    <table>
                        <tr>
                            <h1><b>Seller Name </b></h1>

                        </tr>
                        <tr>
                            <td width='300px'>
                                <img src={seller1}/>
                            </td>
                            <td width='300px'>
                                        <h3>Rating:</h3>
                                        <Rate disabled defaultValue={4} />
                                <br></br>
                                <br></br>
                                <br></br>


                                        <h3>Contact</h3>
                                Email: Seller@gmail.com
                                <br></br>
                                <br></br>
                                <br></br>

                            </td>
                        </tr>
                    </table>

                </div>
                <br></br>
                <br></br>

                <div>
                    <ItemSale />
                </div>



            </div>
        );
    }
}

export default SellerInfo;