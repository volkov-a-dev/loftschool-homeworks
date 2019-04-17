import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    state = {
        field: [
            {
                label: "Имя",
                name: "firstname",
                val : "13123",
                required: true,
                type: "text",
                error: {
                    status: false,
                    message: "Нужно указать имя"
                }
            },
            {
                label: "Фамилия",
                name: "lastname",
                val : "",
                type: "text",
                required: true,
                error: {
                    status: false,
                    message: "Нужно указать фамилию"
                }
            },
            {
                label: "Пароль",
                name: "password",
                type: "password",
                val : "",
                required: true,
                error: {
                    status: false,
                    message: "Нужно указать пароль"
                }
            }
        ]
    };

    inputChangedHandler(event, index) {
        console.log('event', event, 'index=> ', index)
        let field = this.state.field[index];
        const sss = this.state.field[index].val
        console.log('veventeventeventevent', sss )
        this.setState({
            ...this.state.field,
            this.state.field[index].val : event.target.value
            // ...this.state.field[index].val : event.targe.value;
            // field.val : event.target.value
        })
    }

    render() {
        let formFields = this.state.field.map((i, index) => {
            let inputClass = "field__input field-input" + "t-input-" + i.name;
            let messageError = "field__error field-error t-error-" + i.name;

            return (
                <p className="field" key={index}>
                    <label className="field__label" htmlFor={i.name}>
                        <span className="field-label">{i.label}</span>
                    </label>
                    <input 
                        className={inputClass} 
                        type={i.type} 
                        name={i.name} 
                        value={i.val}
                        onChange={(event) => this.inputChangedHandler(event, index)} />
                    <span className={messageError}>{ i.error.status ? i.error.message : null}</span>
                    
                </p>
            )
        });

        return (
            <div className="app-container">
                <form className="form">
                    <h1>Введите свои данные, агент</h1>

                    { formFields }
                    
                    <div className="form__buttons">
                        <input type="submit" className="button t-submit" value="Проверить" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;