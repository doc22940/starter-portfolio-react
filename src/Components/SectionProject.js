import React, { Component } from 'react';


class SecProj extends Component {

    render() {

        const pro = this.props.project.map((itm, k) => {
            return (
                <div key={k} className="col-12 col-md-3 cardDiv" style={{ marginBottom: '2rem' }}>
                    <a href={itm.url} rel="noopener noreferrer" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                        <div className="cardIn">
                            <img className="projectIcons" src={itm.image} alt="Logo" />
                            <h3>{itm.name}</h3>
                            <span>{itm.platform}</span>
                            <p><br />{itm.description}</p>
                        </div>
                    </a>
                </div>
            );
        });

        return (

            <div className="container-fluid">

                <h1 id="projectTitle">PROJECTS</h1>

                <div className="row proRow"
                    data-aos="flip-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    data-aos-once="false"
                    data-aos-mirror="true"
                >
                    {pro}
                </div>

            </div>

        );
    }

}
export default SecProj;