import React, {Component} from "react";
import Modal from "../../components/Modal";
import axios from "axios";

export default class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siteList: null
        }
    }

    getData = () => {
        axios.get('/api/getAll').then(res => (res.data.status) ? this.setState({siteList: res.data}) : null)
    }

    render() {
        return (
            <>
                <div className="content-page">
                    <div className="content">
                        <div className="container">

                            <div className="row">
                                <div className="col-sm-12">
                                    <h4 className="page-title">Сайты</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 m-t-30">
                                    <div className="card-box">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <button type="button"
                                                        className="btn btn-default btn-md waves-effect waves-light m-b-30"
                                                        data-toggle="modal"
                                                        data-target="#exampleModalCenter">
                                                    <i className="md md-add"></i> Создать
                                                </button>
                                            </div>
                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-hover mails m-0 table table-actions-bar">
                                                <thead>
                                                <tr>
                                                    <th>Название</th>
                                                    <th>Адресс</th>
                                                    <th>Порт</th>
                                                    <th>Статус</th>
                                                    <th>Изменить</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                {(this.state.siteList) ? this.state.siteList.map((site, index) =>
                                                    <tr>
                                                        <td>
                                                            {site.name}
                                                        </td>
                                                        <td>
                                                            {site.address}
                                                        </td>
                                                        <td>
                                                            {site.port}
                                                        </td>
                                                        <td>
                                                            {(site.status === '1') ?
                                                                <a href="#" className={'btn btn-success p-1'}>Активен</a>
                                                                : <a href="#" className={'btn btn-danger p-1'}>Не активен</a>
                                                            }
                                                        </td>

                                                        <td>
                                                            <a href="#" className="table-action-btn"><i
                                                                className="md md-close"></i></a>
                                                        </td>
                                                    </tr>
                                                ) : null}

                                                <tr>
                                                    <td>
                                                        ais-kstu.ru
                                                    </td>
                                                    <td>
                                                        /var/www/ais
                                                    </td>
                                                    <td>
                                                        8080
                                                    </td>
                                                    <td>
                                                        <a href="#" className={'btn btn-danger p-1'}>Не активен</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="table-action-btn"><i
                                                            className="md md-close"></i></a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
