import React, { Component } from 'react';

class Testimonial extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tab-pane pt-page-moveFromRight" id="testimonial">
                <div className="testimonia-area">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="single-testimonial">
                                <p>“ Nissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos
                                    dolores et quas molestias excepturi sint occaecati “</p>
                                <div className="title">
                                    <h4>-Jhon Smith <span>Interface Designer</span> </h4>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-quote-button"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="single-testimonial">
                                <p>“ Nissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos
                                    dolores et quas molestias excepturi sint occaecati “</p>
                                <div className="title">
                                    <h4>-Jhon Smith <span>Web Developer</span> </h4>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-quote-button"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="single-testimonial">
                                <p>“ Nissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos
                                    dolores et quas molestias excepturi sint occaecati “</p>
                                <div className="title">
                                    <h4>-Jhon Smith<span>Graphic Designer</span> </h4>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-quote-button"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="single-testimonial">
                                <p>“ Nissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos
                                    dolores et quas molestias excepturi sint occaecati “</p>
                                <div className="title">
                                    <h4>-Jhon Smith<span>Interface Designer</span> </h4>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-quote-button"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="pagenation-area fix">
                                <div className="pagenation pull-left">
                                    <ul>
                                        <li className="active"><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li><a href="#">04</a></li>
                                        <li><a href="#">05</a></li>
                                    </ul>
                                </div>
                                <div className="number-page pull-right">
                                    <span>page 1 of 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Testimonial;