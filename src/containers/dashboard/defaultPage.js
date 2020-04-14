import React, {Component} from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import {API} from "../../constants/api";

export default class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siteList: null
        }
    }

    getData = () => {
        axios.get(API.api + '/project').then(res => (res.data.status) ? this.setState({siteList: res.data}) : null)
    }

    removeIt = (e, item) => {
        e.preventDefault()
        axios.delete(API.api + '/project', item).then(res => (res.data && res.data.status) ? window.location.reload() : alert('Ошибка систем'))
    }

    activateControl = (e, item) => {
        e.preventDefault()
        axios.put(API.api + '/project', item).then(res => (res.data && res.data.status) ? window.location.reload() : alert('Ошибка систем'))
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
                                                                <a onClick={(e, site) => this.activateControl(e, site)}
                                                                   href="#"
                                                                   className={'btn btn-success p-1'}>Активен</a>
                                                                : <a href="#" className={'btn btn-danger p-1'}>Не
                                                                    активен</a>
                                                            }
                                                        </td>

                                                        <td>
                                                            <a onClick={(e, item) => this.removeIt(e, item)} href="#"
                                                               className="table-action-btn"><i
                                                                className="md md-close"></i></a>
                                                        </td>
                                                    </tr>
                                                ) :
                                                    <tr>
                                                        <td>
                                                           Нет сайта
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>}


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
