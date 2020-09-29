import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
import solution from './../../../../assets/imgs/solution.svg';
import trim from './../../../../assets/imgs/trim.svg';
import cropping from './../../../../assets/imgs/cropping.svg';
import ironman from './../../../../assets/imgs/ironman.jpg';
import playButton from './../../../../assets/imgs/play-button.svg';
import location from './../../../../assets/imgs/location.svg';
import globe from './../../../../assets/imgs/globe.svg';
import facebook from './../../../../assets/imgs/facebook.svg';
class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className="background-image d-v-center">
                    <div className="">
                        <div className="background-text">
                            Kokoon.cloud
                        </div>
                        <br />
                        <br />
                        <div className="text-center">
                            <Button className="background-button" onClick={()=>this.props.history.push('/auth/signup')}>
                                Sign up for free trail!
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className='container'>
                        <div>
                            <div className="sub-title">
                                WE HELP YOUR
                            </div>
                            <div className="title">
                                Video Works
                            </div>
                            <div className="d-v-center">
                                <div className="divider"></div>
                            </div>
                            <div className="row custom-row">
                                <div className="col-md-4">
                                    <div className="resolution-box box">
                                        <div className="text-center">
                                            <img src={solution} alt="solution" className="box-image"/>
                                            <div className="box-title">
                                                Super Resolution
                                            </div>
                                            <div className="box-text">
                                                Super Resolution tech makes your video quality better, you can feel your video gets bigger
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="trim-box box">
                                        <div className="text-center">
                                            <img src={trim} alt="solution" className="box-image"/>
                                            <div className="box-title">
                                                Trim
                                        </div>
                                            <div className="box-text">
                                                Trim tech allows you to cut any part of the video at will
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="cropping-box box">
                                        <div className="text-center">
                                            <img src={cropping} alt="solution" className="box-image"/>
                                            <div className="box-title">
                                                Video Cropping
                                        </div>
                                            <div className="box-text">
                                                You can crop certain part of the screen by applying super resolution tech of Blue-Dot
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="sub-title">
                                ABOUT OUR SERVICE
                            </div>
                            <div className="title">
                                Applied Examples
                            </div>
                            <div className="d-v-center">
                                <div className="divider"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <img src={ironman} alt="ironman" className="ironman-img mb-20" />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="iphone-flex">
                                                <div className="messi-div mb-20 mr-20px" />
                                                <div className="messi-div d-v-center mb-20">
                                                    <img src={playButton} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className='example-videos'>
                                        Example Videos
                                    </div>
                                    <br />
                                    <div className="description">These videos are made with super resolution tech developed by Blue-Dot</div>
                                    <br />
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="footer-title">
                                    Blue-dot
                                </div>
                                <div className="footer-title">
                                    Seoul Office
                                </div>
                                <div className="footer-divider" />
                                <div className="footer-text">
                                    168, Yeoksam-ro, Gangnam-gu,
                                    
                                </div>
                                <div className="footer-text">
                                    Seoul, Republic of Korea
                                </div>
                                <div className="footer-text m-26">
                                    +82 - 02 - 6206 - 0812
                                </div>
                                <img src={location} alt="" />
                            </div>
                            <div className="col-md-6 col-12">
                                <form>
                                    <div className='form-title'>
                                        CONTACT US
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input placeholder="Name" className="form-control input-text mb-20"></input>
                                        </div>
                                        <div className="col-md-6">
                                            <input placeholder="jdoe@youremail.com" type="email" className="form-control input-text mb-20"></input>
                                        </div>
                                        <div className="col-md-12">
                                            <input placeholder="Title" className="form-control input-text mb-20"></input>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea  rows="5" placeholder="Type something..." className="form-control input-text  mb-20"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                           <Button className="submit-button">Submit</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr className="custom-hr" />
                        <div className="text-center">
                            <img src={facebook} alt="" className="footer-img" />
                            <img src={globe} alt="" className="footer-img" />
                        </div>
                        <div className="text-center">
                            <div className="copyright">
                                Copyright © Blue-dot inc. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;