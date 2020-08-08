import React,{Component} from 'react';


class SecProj extends Component{

    render(){

        function enterBackground(e){
            e.target.style.background = '#000';
            e.target.style.opacity = 0.8;
        }
        function leaveBackground(e){
            e.target.style.background='rgba(255, 255, 255, 0.1)';
        }
        

        const pro = this.props.project.map((itm)=>{
            return(                
                <div className="col-12 col-md-3" style={{'margin-bottom':'2rem'}}>
                    <div className="cardDiv" onMouseEnter={enterBackground} onMouseLeave={leaveBackground} onClick={()=>{window.open(itm.url)}}>                        
                        <h3>{itm.name}</h3>
                        <span>{itm.platform}</span>
                        <p><br/>{itm.description}</p>
                    </div>
                </div>
            );
        });

        return(

            <div className="container-fluid">                    
            <h1 style={{'margin':'5rem'}}>Projects</h1>                
                <div className="row" style={{'justify-content': 'center'}}>                    
                    {pro}
                </div>
            </div>

        );
    }

}
export default SecProj;