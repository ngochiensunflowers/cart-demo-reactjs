import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 ml-auto">
                            <h5 className="title social-section-title">KẾT NỐI VỚI SHOP</h5>
                            <div className="social-section text-md-left">
                                <ul className="text-center">
                                    <li>
                                        <a className="btn-floating  btn-fb waves-effect waves-light">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-ins waves-effect waves-light">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-tw waves-effect waves-light">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">GIỚI THIỆU</h5>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">THANH TOÁN</h5>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="title">ĐĂNG KÝ NHẬN TIN TỪ SHOP</h5>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
