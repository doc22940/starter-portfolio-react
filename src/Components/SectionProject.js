import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';


class SecProj extends Component{

    render(){       

        const pro = this.props.project.map((itm,k)=>{
            return(                
                <div key={k} className="col-12 col-md-3 cardDiv" style={{marginBottom:'2rem'}}>
                    <a href={itm.url} rel="noopener noreferrer" target="_blank" style={{color:'white',textDecoration:'none'}}>
                    <div className="cardIn">
                        <img className="projectIcons" src={itm.image} alt="Logo"/>                        
                        <h3>{itm.name}</h3>
                        <span>{itm.platform}</span>
                        <p><br/>{itm.description}</p>
                    </div>
                    </a>
                </div>
            );
        });

        return(

            <div className="container-fluid">                    
            <Fade duration={2000} ><h1 style={{paddingBottom:'5rem',fontSize:"3rem"}}>Projects</h1></Fade>                
                <Fade left cascade>
                <div className="row proRow">                    
                    {pro}
                </div>
                </Fade>
            </div>

        );
    }

}
export default SecProj;