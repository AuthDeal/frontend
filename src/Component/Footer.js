import React from "react";



class Footer extends React.Component{


    render(){
        const { current } = this.state;
        return(
            <div>
                <p>
                    <h2><b>Contact Us:</b></h2>
                    <br></br>
                    email: AuthDeal@gmail.com

                </p>


            </div>
        );
    }
}

export default Footer;