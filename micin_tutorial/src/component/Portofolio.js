import React, { Component } from 'react';

class Portofolio extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tab-pane pt-page-flipInLeft" id="Portfolio">
                <div className="portfolio-area">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="filtering-button">
                                        <a className="active" data-filter="*">All Work</a>
                                        <a data-filter=".animation">Animation</a>
                                        <a data-filter=".design">Design</a>
                                        <a data-filter=".illustration">Illustration</a>
                                        <a data-filter=".music">Music</a>
                                        <a data-filter=".photography">Photography</a>
                                        <a data-filter=".videos">Videos</a>
                                        <a data-filter=".print">Print Design</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="grid fix">
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 animation design print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/1.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/1.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 illustration music design photography videos animation acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/2.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/2.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 photography videos print illustration acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/3.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/3.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 print videos acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/4.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/4.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 illustration design acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/5.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/5.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item col-sm-6 col-lg-4 col-xs-12 animation photography music acurate">
                                        <div className="single-portfolio">
                                            <div className="work_thumb">
                                                <img src="assets/images/portfolio/6.png"
                                                    alt="project1" className="img-responsive" />
                                            </div>
                                            <div className="work-hover">
                                                <div className="mask-work text-center">
                                                    <h4>Web Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consetur
                                                        adipiscing elit</p>
                                                    <a className="btn" data-lightbox="example-set"
                                                        data-title="Image Title"
                                                        href="assets/images/portfolio/6.png">Project
                                                        details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
 
export default Portofolio;