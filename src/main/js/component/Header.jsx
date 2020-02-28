import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="Header bold">
                    <h1>Лабораторная работа №4 по <span className="Pip"> Веб-программированию</span></h1>
                    <h2>Вариант №465597</h2>
                    <h3>Выполнил: Горшков Артем Владимирович</h3>
                    <h4>Группа: P3211</h4>
                </div>
            </div>
        )
    }
}