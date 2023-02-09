import React from 'react';

export function Main() {

    class Age extends React.Component {
        constructor(props) {
            super(props)
            const birthDate = new Date("1986","04", "09").getFullYear()
            const currentDate = new Date().getFullYear()
            const yearsOld = (currentDate - birthDate)
            this.state = {date:yearsOld}
        }

        render() {
            return (
                <>
                    <p className="desc">
                        {this.state.date} лет, г.Караганда
                    </p>
                </>
            )
        }

    }
    return (
        <section className="main" id={'main'}>
            <div className="container">
                <div className="main__headline">
                    <h1 className="main__headline-title title">Альтаф Каюмов</h1>
                    <div className="main__headline-desc">
                        <p className="desc">HTML верстальщик</p>
                        <Age/>
                    </div>
                </div>
                <img src={require("../img/wp.png")} alt="Foto" className="main__img"/>
            </div>
        </section>
    );
}

export default Main;