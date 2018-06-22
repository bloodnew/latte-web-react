import React, {Component} from 'react';
import {connect} from 'react-redux'

import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import {fetchEvent} from '../actions/eventAction'
import {fetchArticle} from "../actions/articleAction";
import {fetchGallery} from "../actions/galleryAction";

import '../css/latte.css'

import axios from "axios/index";
import API from "../constants/api";


class Lattesoft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSiginModal: false,
            showForgetModal: false,
            showLoginModal: true,
            showRegisterLogin: true,
            showProfile: false,

            event: {
                id: '',
                title: '',
                startDate: '',
                endDate: '',
                eventTimes: [],
                regisStartDay: '',
                regisEndDay: '',
                coverImage: '',
                baba: ''

            },
            article: {},
            gallery: [{
                id: '',
                coverImage: '',
                name: '',
            }

            ],


            eventblog: [
                {
                    'imagelatte': '/assets/images/prv/news/creative/img-1.jpg',
                    'header': 'Event One',
                    'eventcontent': 'Event content'
                },
                {
                    'imagelatte': '/assets/images/prv/news/creative/img-2.jpg',
                    'header': 'Event Two',
                    'eventcontent': 'Event content'
                },
                {
                    'imagelatte': '/assets/images/prv/news/creative/img-3.jpg',
                    'header': 'Event Tree',
                    'eventcontent': 'Event content'
                }
            ],
            articleblog: [
                {
                    'imagearticle': '/assets/images/prv/team/business/img-b-1.jpg',
                    'header': 'Article One',
                    'articlecontent': 'Article Content'
                },
                {
                    'imagearticle': '/assets/images/prv/team/business/img-b-2.jpg',
                    'header': 'Article Two',
                    'articlecontent': 'Article Content'
                },
                {
                    'imagearticle': '/assets/images/prv/team/business/img-b-3.jpg',
                    'header': 'Article Tree',
                    'articlecontent': 'Article Content'
                },
            ],
            gallerys: [
                {
                    'imagegallery': '/assets/images/prv/work/agency/img-1.jpg',
                    'heading': 'Bewart the mountian',
                    'position': 'Web Design'

                },
                {
                    'imagegallery': '/assets/images/prv/work/agency/img-2.jpg',
                    'heading': 'Bewart the mountian',
                    'position': 'Branding'

                }, {
                    'imagegallery': '/assets/images/prv/work/agency/img-3.jpg',
                    'heading': 'Rules not to follow',
                    'position': 'Identity'

                },
                {
                    'imagegallery': '/assets/images/prv/work/agency/img-4.jpg',
                    'heading': 'The secret of life',
                    'position': 'Graphics'

                },
                {
                    'imagegallery': '/assets/images/prv/work/agency/img-5.jpg',
                    'heading': 'Remarkable web design',
                    'position': 'Identity'

                },
                {
                    'imagegallery': '/assets/images/prv/work/agency/img-6.jpg',
                    'heading': 'Time to go back to basics',
                    'position': 'Web Design'

                },
            ],
            login: {
                username: '',
                password: ''
            },
            register: {
                username: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                nickname: '',
                birthday: '',
                gender: '',
                age: '',
                tel: '',
                education: '',
                faculty: '',
                address: '',
                facebook: '',

            },
            message: '',
            confirmpassword: '',
            regisBtn: true,
            display: '',
            display2: 'none',
        }


    }


    componentWillMount() {
        this.props.fetchEvent().then(res => {
            this.setState({
                event: res.result
            });
            console.log('event', this.state.event)
        });
        this.props.fetchArticle().then(res => {
            this.setState({
                article: res.result
            });
            console.log('article', this.state.article)
        });
        this.props.fetchGallery().then(res => {
            this.setState({
                gallery: res.results
            });
            console.log('gallery', this.state.gallery)
        });
    }


    handleRegiserOnchange(e) {
        this.setState({
            register: {
                ...this.state.register,
                [e.target.name]: e.target.value
            }

        });
    }

    handleLoginOnchange(e) {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }

        })

    }

    handleRegisterSubmit() {
        axios.post((API.REGISTER), {
            username: this.state.register.username,
            password: this.state.register.password
        }, {headers: {'token': '1234qwer'}}).then(res => {
            alert("suc")
        }).catch(error => {
            alert(error)
        })

    }

    handleloginSubmit() {
        axios.post((API.LOGIN), {
            username: this.state.login.username,
            password: this.state.login.password
        }, {headers: {'token': 'qwerttyqere'}}).then(res => {
            alert('success')
        }).catch(error => {
            alert(error)
        })
    }


    render() {

        return (
            <div>

                {/*START MODAL*/}

                {/*Login*/}
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog"
                     aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModal">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <FormGroup>
                                        <ControlLabel>User Name<span
                                            className="star">*</span></ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder='Username'
                                            value={this.state.login.user}
                                            name="username"
                                            onChange={this.handleLoginOnchange.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder='Password'
                                            value={this.state.login.password}
                                            name="password"
                                            onChange={this.handleLoginOnchange.bind(this)}
                                        />
                                    </FormGroup>
                                    <a href="" data-toggle="modal" data-target="#forgetpasswordModal"
                                       data-dismiss="modal">forget password?</a>
                                    <br/>
                                    <a href="" data-toggle="modal" data-target="#registerModal"
                                       data-dismiss="modal">Register?</a>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.handleloginSubmit.bind(this)}>Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END Login */}

                {/*RegisterModal*/}
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog"
                     aria-labelledby="registerModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="RegisterModal">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <FormGroup>
                                        <ControlLabel>Username<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder='Username'
                                            value={this.state.register.username}
                                            name="username"
                                            onChange={this.handleRegiserOnchange.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Email<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder='Email'
                                            value={this.state.register.email}
                                            name="email"
                                            onChange={this.handleRegiserOnchange.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl
                                            type="password"
                                            placeholder='Password'
                                            value={this.state.register.password}
                                            name="password"
                                            onChange={this.handleRegiserOnchange.bind(this)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Conferm PassWord<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl

                                            type="password"
                                            placeholder='Conferm Password'
                                            value={this.state.confirmpassword}
                                            name="confirmpassword"
                                            onChange={(e) => {
                                                this.setState({
                                                    ...this.state,
                                                    [e.target.name]: e.target.value
                                                });
                                                let password = this.state.register.password;
                                                if (e.target.value === password) {
                                                    this.setState({
                                                        message: ''
                                                    })
                                                }
                                                else {
                                                    this.setState({
                                                        message: '*Password Not match!'
                                                    })
                                                }
                                            }}
                                        />
                                    </FormGroup><p className='password-error'>{this.state.message}</p>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" id='check' disabled={
                                    (this.state.register.username === '' || this.state.register.password === '' || this.state.register.email === '' || this.state.confirmpassword === '' || this.state.message === '*Password Not match!') ? true : false
                                }
                                        onClick={this.handleRegisterSubmit.bind(this)}
                                >Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END RegisterModal*/}


                {/*Forget Password*/}
                <div className="modal fade" id="forgetpasswordModal" tabIndex="-1" role="dialog"
                     aria-labelledby="forgetpasswordModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="forgetpasswordModal">Forget Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <FormGroup>
                                        <ControlLabel>User Name<span
                                            className="star password-error">*</span></ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder='UserName'
                                            value=''
                                            name="username"
                                            // onChange={this.editInputHandler.bind(this)}
                                        />
                                    </FormGroup>
                                </form>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" id='comfirm'>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END Forget Password*/}


                {/*END MODAL*/}


                {/* MAIN WRAPPER */}
                <div className="body-wrap">
                    <div id="st-container" className="st-container">
                        <div className="st-pusher">
                            <div className="st-content">
                                <div className="st-content-inner">
                                    {/* Header */}
                                    <div className="header">
                                        {/* Navbar */}
                                        <nav className="navbar navbar-expand-lg navbar--bold navbar-light bg-default ">
                                            <div className="container navbar-container">
                                                {/* Brand/Logo */}
                                                <a className="navbar-brand" href="/">
                                                    {/*<img src="/assets/images/logo/logo-1-b.png" className*/}
                                                    {/*alt="Boomerang"/>*/}
                                                    <h3>logo</h3>
                                                </a>
                                                <div className="d-inline-block">
                                                    {/* Navbar toggler  */}
                                                    <button
                                                        className="navbar-toggler hamburger hamburger-js hamburger--spring"
                                                        type="button" data-toggle="collapse" data-target="#navbar_main"
                                                        aria-controls="navbarsExampleDefault" aria-expanded="false"
                                                        aria-label="Toggle navigation">
                                                        <span className="hamburger-box">
                                                            <span className="hamburger-inner"/>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div
                                                    className="collapse navbar-collapse align-items-center justify-content-end"
                                                    id="navbar_main">


                                                    {/* Navbar links */}
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown megamenu">
                                                            <a className="nav-link " href="#event">
                                                                New Event!
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown megamenu">
                                                            <a className="nav-link" href="#article">
                                                                Article
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown megamenu">
                                                            <a className="nav-link" href="#gallery">
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown megamenu">
                                                            <a className="nav-link" href="#about">
                                                                About Us
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown megamenu">
                                                            <a className="nav-link" href="#footer">
                                                                Contact Us
                                                            </a>
                                                        </li>
                                                    </ul>

                                                    <ul className="navbar-nav ml-lg-auto"
                                                        style={{display: this.state.display}}>
                                                        <li className="nav-item dropdown">
                                                            <a href="#" className="nav-link dropdown-toggle"
                                                               data-toggle="dropdown" aria-haspopup="true"
                                                               aria-expanded="false">
                                                                Login
                                                            </a>
                                                            <div
                                                                className="dropdown-menu dropdown-menu-xl py-0 px-0 overflow--hidden"
                                                                aria-labelledby="navbar_1_dropdown_1">
                                                                <div className="list-group rounded">

                                                                    <div className="list-group-content list-group-item">
                                                                        <form>
                                                                            <FormGroup>
                                                                                <ControlLabel>User Name<span
                                                                                    className="star password-error">*</span></ControlLabel>
                                                                                <FormControl
                                                                                    type="text"
                                                                                    placeholder='Username'
                                                                                    value={this.state.login.user}
                                                                                    name="username"
                                                                                    onChange={this.handleLoginOnchange.bind(this)}
                                                                                />
                                                                            </FormGroup>
                                                                            <FormGroup>
                                                                                <ControlLabel>Password<span
                                                                                    className="star password-error">*</span></ControlLabel>
                                                                                <FormControl
                                                                                    type="text"
                                                                                    placeholder='Password'
                                                                                    value={this.state.login.password}
                                                                                    name="password"
                                                                                    onChange={this.handleLoginOnchange.bind(this)}
                                                                                />
                                                                            </FormGroup>
                                                                            <a href="" data-toggle="modal"
                                                                               data-target="#forgetpasswordModal"
                                                                               style={{textAlign:'center'}}>forget password?</a>
                                                                            <br/>
                                                                            <br/>

                                                                        </form>
                                                                        <div className="modal-footer">
                                                                            <a href="" data-toggle="modal"
                                                                               data-target="#registerModal"
                                                                               data-dismiss="modal">Register?</a>
                                                                            <br/>
                                                                            <button type="button"
                                                                                    className="btn btn-primary"
                                                                                    onClick={this.handleloginSubmit.bind(this)}>Login
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </li>


                                                        <li className="nav-item">
                                                            <a href='' data-toggle="modal"
                                                               className="nav-link" ata-toggle="modal"
                                                               data-target="#loginModal">
                                                                Login
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    {/*<ul className="navbar-nav ml-lg-auto"*/}
                                                    {/*style={{display: this.state.display2}}>*/}
                                                    {/*<li className="nav-item dropdown">*/}
                                                    {/*<a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                                    {/*Admin1*/}
                                                    {/*</a>*/}
                                                    {/*<div*/}
                                                    {/*className="dropdown-menu dropdown-menu-xl py-0 px-0 overflow--hidden"*/}
                                                    {/*aria-labelledby="navbar_1_dropdown_1">*/}
                                                    {/*<div >*/}
                                                    {/*<a href="/article"*/}
                                                    {/*className="list-group-item list-group-item-action d-flex align-items-center">*/}
                                                    {/*<div className="heading heading-6 mb-1" style={{margin:'right'}}>*/}
                                                    {/*Setting*/}
                                                    {/*</div>*/}
                                                    {/*</a>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</li>*/}
                                                    {/*</ul>*/}


                                                </div>
                                            </div>
                                        </nav>
                                    </div>

                                    {/* Slider */}
                                    <section className="swiper-js-container background-image-holder"
                                             data-holder-type="fullscreen" data-holder-offset=".navbar">
                                        <div className="swiper-container" data-swiper-autoplay="true"
                                             data-swiper-effect="slide" data-swiper-items={1}
                                             data-swiper-space-between={0}>
                                            <div className="swiper-wrapper">

                                                {/* Slide */}
                                                <div className="swiper-slide" data-swiper-autoplay={8000}>
                                                    <div
                                                        className="slice holder-item holder-item-light has-bg-cover bg-size-cover"
                                                        style={{
                                                            background: 'url(/assets/images/backgrounds/slider/img-16.jpg) bottom center',
                                                        }}>
                                                        <span className="mask mask-dark--style-2"/>
                                                        <div className="container d-flex align-items-center">
                                                            <div className="col">
                                                                <div className="row text-center">
                                                                    <div className="col-12">
                                                                        <h2 className="heading heading-xl strong-400 text-uppercase animated"
                                                                            data-animation-in="fadeInDownBig"
                                                                            data-animation-delay={200}>
                                                                            This is <strong>Boomerang</strong>
                                                                        </h2>
                                                                        <p className="lead animated"
                                                                           data-animation-in="fadeInUpBig"
                                                                           data-animation-delay={200}>
                                                                            A multi-purpose theme, like you've never
                                                                            seen.
                                                                        </p>
                                                                        <a href="https://goo.gl/9BbH7R"
                                                                           className="btn btn-lg btn-white btn-circle btn-outline mt-5 animated"
                                                                           data-animation-in="fadeInUpBig"
                                                                           data-animation-delay={1000}>
                                                                            Get started
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Slide */}
                                                <div className="swiper-slide" data-swiper-autoplay={8000}>
                                                    <div
                                                        className="slice holder-item holder-item-light has-bg-cover bg-size-cover"
                                                        style={{
                                                            background: 'url(/assets/images/backgrounds/slider/img-16.jpg) bottom center',
                                                        }}>
                                                        <span className="mask mask-dark--style-2"/>
                                                        <div className="container d-flex align-items-center">
                                                            <div className="col">
                                                                <div className="row text-center">
                                                                    <div className="col-12">
                                                                        <h2 className="heading heading-xl strong-400 text-uppercase animated"
                                                                            data-animation-in="fadeInDownBig"
                                                                            data-animation-delay={200}>
                                                                            This is <strong>LATTESOFT</strong>
                                                                        </h2>
                                                                        <p className="lead animated"
                                                                           data-animation-in="fadeInUpBig"
                                                                           data-animation-delay={200}>
                                                                            A multi-purpose theme, like you've never
                                                                            seen.
                                                                        </p>
                                                                        <a href="https://goo.gl/9BbH7R"
                                                                           className="btn btn-lg btn-white btn-circle btn-outline mt-5 animated"
                                                                           data-animation-in="fadeInUpBig"
                                                                           data-animation-delay={1000}>
                                                                            Get started
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Pagination */}
                                            <div className="swiper-pagination"/>
                                            {/* Add Arrows */}
                                            <div className="swiper-button swiper-button-next"/>
                                            <div className="swiper-button swiper-button-prev"/>
                                        </div>
                                    </section>


                                    {/*Section Event!*/} {/*Section Event!*/}
                                    <section className="slice-lg sct-color-2" id='event'>
                                        <div className="container">
                                            <div className="section-title section-title--style-1 text-center mb-2">
                                                <h3 className="section-title-inner">
                                                    <span>Event!</span>
                                                </h3>
                                                <span className="section-title-delimiter clearfix d-none"/>
                                            </div>
                                            <span className="clearfix"/>
                                            <div
                                                className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                                <p className="text-lg line-height-1_8">
                                                    Join to learn Code together~
                                                </p>
                                            </div>
                                            <span className="space-xs-xl"/>

                                            <div className="row cols-xs-space cols-sm-space cols-md-space">

                                                {this.state.eventblog.map((e, key) => (
                                                    <div key={key} className="col-lg-4">
                                                        <div className="block block--style-3">
                                                            <div className="block block-image">
                                                                <div className="view view-second">
                                                                    <img alt='eventImage' src={e.imagelatte}/>
                                                                    <div className="mask mask-base-1--style-2">
                                                                        <div className="view-buttons">
                                                                            <div
                                                                                className="view-buttons-inner text-center">
                                                                                <a href="/event" className="c-white"
                                                                                   data-toggle="tooltip"
                                                                                   data-original-title="View profile"
                                                                                   date-placement="top">
                                                                                    <i className="icon ion-plus"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="block-body">
                                                                <h3 className="heading heading-5 strong-500">
                                                                    {e.header}
                                                                </h3>
                                                                <p className="mt-1">
                                                                    {e.eventcontent}
                                                                </p>
                                                            </div>
                                                            <div className="block-footer border-top">
                                                                <ul className="social-media social-media--style-1-v4">
                                                                    <li>
                                                                        <a href="https://www.facebook.com/lattehouseth/"
                                                                           className="facebook" target="_blank"
                                                                           title="Facebook">
                                                                            <i className="fa fa-facebook"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="instagram"
                                                                           target="_blank">
                                                                            <i className="fa fa-instagram"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="dribbble"
                                                                           target="_blank">
                                                                            <i className="fa fa-dribbble"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://gitlab.com/lattesoft"
                                                                           className="dribbble" target="_blank">
                                                                            <i className="fa fa-gitlab"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <a href="/event"
                                                                   className="link link-sm link--style-2 mt-3"
                                                                   target='_blank'>
                                                                    <i className="fa fa-long-arrow-right"/> Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>


                                    {/* Section Article */}{/* Section Article */}
                                    <section className="slice-lg sct-color-3 border-top border-bottom" id='article'>
                                        <div className="container">
                                            <div className="section-title section-title--style-1 text-center mb-2">
                                                <h3 className="section-title-inner">
                                                    <span className='header-event'>Article</span>
                                                </h3>
                                                <span className="section-title-delimiter clearfix d-none"/>
                                            </div>
                                            <span className="clearfix"/>
                                            <div
                                                className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                                "Program have many things you don't Know."
                                            </div>
                                            <span className="space-xs-xl"/>
                                            <div className="row cols-xs-space cols-sm-space cols-md-space">

                                                {this.state.articleblog.map((e, key) => (
                                                    <div key={key} className="col-lg-4">
                                                        <div className="block block--style-3">
                                                            <div className="block-image relative">
                                                                <div className="view view-second view--rounded">
                                                                    <img
                                                                        src={e.imagearticle}/>
                                                                    <div className="mask mask-base-1--style-2">
                                                                        <div className="view-buttons text-center">
                                                                            <div
                                                                                className="view-buttons-inner text-center">
                                                                                <a href={e.imagearticle}
                                                                                   className="c-white"
                                                                                   data-fancybox>
                                                                                    <i className="icon ion-plus"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="block-body">
                                                                <h3 className="heading heading-5 strong-500">
                                                                    <a>
                                                                        {e.header}
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    {e.articlecontent}
                                                                </p>
                                                                <a href="/article"
                                                                   className="link link-sm link--style-2 mt-3"
                                                                   target='_blank'>
                                                                    <i className="fa fa-long-arrow-right"/> Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>


                                    {/*Section Gallery*/}
                                    <section className="slice sct-color-2 border-top border-bottom" id='gallery'>
                                        <div className="container text-center">
                                            <div className="section-title section-title--style-1 text-center mb-2">
                                                <h3 className="section-title-inner">
                                                    <span>Gallery</span>
                                                </h3>
                                                <span className="section-title-delimiter clearfix d-none"/>
                                            </div>
                                            <span className="clearfix"/>
                                            <div
                                                className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                                During the time we were done...
                                            </div>
                                            <span className="space-xs-xl"/>
                                            {/* PORTFOLIO */}


                                            <div className="masonry">
                                                <div className="row">
                                                    {this.state.gallerys.map((e, key) => (
                                                        <div
                                                            className="masonry-item col-sm-6 col-lg-4 design">
                                                            <a href={e.imagegallery}
                                                               className="c-white"
                                                               data-fancybox>

                                                                <div className="block block--style-5 mb-0">
                                                                    <div className="block-image">
                                                                        <img
                                                                            src={e.imagegallery}/>
                                                                    </div>
                                                                    <div
                                                                        className="block-mask-caption--over flex flex-items-xs-top">
                                                                        <div className="flex-wrap-item">
                                                                            <div className="text-xs-left">
                                                                                <h3 className="heading heading-3 strong-500 c-white">
                                                                                    {e.head} </h3>
                                                                                <h4 className="heading heading-xs strong-300 text-uppercase c-white">
                                                                                    {e.position}
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                    {/*Section About Us*/}
                                    <section className="slice-lg sct-color-3 border-top border-bottom" id='about'>
                                        <div className="container">
                                            <div className="section-title section-title--style-1 text-center mb-2">
                                                <h3 className="section-title-inner">
                                                    <span className='header-event'>About Us</span>
                                                </h3>
                                                <span className="section-title-delimiter clearfix d-none"/>
                                            </div>
                                            <span className="clearfix"/>
                                            <div
                                                className="fluid-paragraph fluid-paragraph-sm c-gray-light strong-300 text-center">
                                                "Program have many things you don't Know."
                                            </div>
                                            <span className="space-xs-xl"/>
                                            <div className="row cols-xs-space cols-sm-space cols-md-space">


                                            </div>
                                        </div>
                                    </section>


                                    {/* FOOTER */}
                                    <footer id="footer" className="footer contact">
                                        <div className="footer-top">
                                            <div className="container">
                                                <div className="row cols-xs-space cols-sm-space cols-md-space">
                                                    <div className="col-lg-5">
                                                        <div className="col">
                                                            {/*<img src="/assets/images/logo/logo-1-c.png"/>*/}
                                                            <h3>Logo</h3>
                                                            <span className="clearfix"/>
                                                            <span
                                                                className="heading heading-sm c-gray-light strong-400">LATTESOFT(THAILAND) company limitted</span>
                                                            <p className="mt-3">
                                                                All the components included in Boomerang are built to
                                                                the same level of quality as Bootstrap and highlighted
                                                                with several example pages.
                                                            </p>
                                                            <div className="copyright mt-4">
                                                                <p>
                                                                    Copyright © 2018 LATTESOFT(THAILAND)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="col">
                                                            <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                                                Support
                                                            </h4>
                                                            <ul className="footer-links">
                                                                <li><a href="#event" title="Help center">New Event!</a>
                                                                </li>
                                                                <li><a href="#article" title="Discussions">Article</a>
                                                                </li>
                                                                <li><a href="#gallery"
                                                                       title="Contact support">Gallery</a></li>
                                                                <li><a href="#about" title="Blog">About Us</a></li>
                                                                <li><a href="#" title="Jobs">FAQ</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="col">
                                                            <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                                                Contact Me
                                                            </h4>
                                                            <ul className="social-media social-media--style-1-v4">
                                                                <li>
                                                                    <a href="https://www.facebook.com/lattehouseth/"
                                                                       className="facebook" target="_blank"
                                                                       data-toggle="tooltip"
                                                                       data-original-title="Facebook">
                                                                        <i className="fa fa-facebook"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="instagram" target="_blank"
                                                                       data-toggle="tooltip"
                                                                       data-original-title="Instagram">
                                                                        <i className="fa fa-instagram"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="dribbble" target="_blank"
                                                                       data-toggle="tooltip"
                                                                       data-original-title="Dribbble">
                                                                        <i className="fa fa-dribbble"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://gitlab.com/lattesoft"
                                                                       className="dribbble" target="_blank"
                                                                       data-toggle="tooltip"
                                                                       data-original-title="Gitlab">
                                                                        <i className="fa fa-gitlab"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>


                        {/* END: st-pusher */}
                    </div>
                    {/* END: st-container */}
                </div>
                {/* END: body-wrap */
                }

                <a href="#" className="back-to-top btn-back-to-top"/>
            </div>
        )
            ;
    }
}

export default connect(store => {
    return {
        event: store.eventReducer
    }

}, {fetchEvent, fetchArticle, fetchGallery})(Lattesoft);