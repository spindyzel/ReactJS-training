import React, { Component } from 'react';

class Profile extends Component {
    state = {  }
    render() { 
        return (
            <div className="tab-pane active pt-page-scaleUpCenter" id="Profile">
                <div className="profile-area ">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="profile-img">
                                <div className="project__card">
                                    <a href="#">
                                        <img className="img-responsive" src="assets/images/profile/kambing.png" alt="Kambing" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="profile-info ">
                                <div className="name">
                                    <h1>KUAAMBING</h1>
                                    <h4>QURBAN BENTAR LAGI GASIH</h4>
                                </div>
                                <div className="about-info">
                                    <ul>
                                        <li><i className="flaticon-user"></i><span>Name :</span> Allen
                                            Alex</li>
                                        <li><i className="flaticon-calendar"></i> <span>Date of birth
                                                :</span>June 8, 1980</li>
                                        <li><i className="flaticon-placeholder"></i><span>Address :
                                            </span>San Francisco CA 94105 USA
                                        </li>
                                        <li><i className="flaticon-phone-call"></i> <span>Phone :
                                            </span>+1-222-333-4050</li>
                                        <li><i
                                                className="flaticon-message"></i><span>Email:</span>themeforest@gmail.com
                                        </li>
                                    </ul>
                                </div>
                                <div className="objective-area">
                                    <h3>Objective</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                                        do
                                        eiusmod tempor incididunt ut labore etdolore magna aliqua.
                                        Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehen
                                        derit in voluptate velit esse cillum dolore eu fugiat nulla.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;