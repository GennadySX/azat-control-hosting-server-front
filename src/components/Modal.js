import React, {Component} from "react";
import axios from 'axios'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            port: ''
        }
    }

    createSite = () => axios.post('/api/new', this.state).then( res => (res.data.status) ?
        window.location.reload()
        : alert('Ошибка систем'));



    render() {
        return (
            <>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <h4 className="custom-modal-title">Новый сайт</h4>
                            <div className="custom-modal-text text-left">
                                <form role="form">
                                    <div className="form-group">
                                        <label htmlFor="name">Название сайта</label>
                                        <input type="text" className="form-control" id="name" placeholder="ex: domain.com"
                                               onChange={(val)=> this.setState({name: val.target.value})}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Адресс</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="ex: /home/django/"
                                               onChange={(val)=> this.setState({address: val.target.value})}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="position">Порт</label>
                                        <input type="text" className="form-control" id="position"
                                               placeholder="ex: 8000"
                                               onChange={(val)=> this.setState({port: val.target.value})}/>
                                    </div>
                                    <button type="submit" className="btn btn-default waves-effect waves-light" onClick={() => this.createSite()}>Создать
                                    </button>
                                    <button type="button" className="btn btn-danger waves-effect waves-light m-l-10"
                                            data-dismiss="modal">Отмена
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Modal;
