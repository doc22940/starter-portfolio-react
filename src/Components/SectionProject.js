import React,{Component} from 'react';


class SecProj extends Component{

    render(){       

        const pro = this.props.project.map((itm)=>{
            return(                
                <div className="col-12 col-md-3" style={{'margin-bottom':'2rem'}}>
                    <div className="cardDiv"  onClick={()=>{window.open(itm.url)}}>                        
                        <h3>{itm.name}</h3>
                        <span>{itm.platform}</span>
                        <p><br/>{itm.description}</p>
                    </div>
                </div>
            );
        });

        return(

            <div className="container-fluid">                    
            <h1 style={{'padding-bottom':'5rem'}}>Projects</h1>                
                <div className="row proRow" style={{'justify-content': 'center'}}>                    
                    {pro}
                </div>
            </div>

        );
    }

}
export default SecProj;