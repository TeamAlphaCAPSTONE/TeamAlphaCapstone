import React from 'react';

class FirstPage extends React.Component{
    render() {
      return (
        <div>
            <div className="container-fluid w-50">
                <div className="d-flex flex-column align-items-center text-center">

                    <h2 style={{color: "white"}}>
                        Title
                    </h2>
                    
                    <div className="border border-dark border-3 w-50 h-10 textcolor ">
                    <a href="#" >
                        <div className="col-3 text-center h6">
                            AODA Details
                        </div>
                    </a>
                    </div>
                    <div className=" border border-dark border-3 w-50 textcolor">
                        <div className="col-3 text-center h6">
                            <a href="#" >SEO Details</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="progress center-block w-25" style={{"textAlign" : "center"}}>
                <div class="progress-bar d-block bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%", "text-align":"center"}}>
                    10%    
                </div>
            </div>

        </div>
      );
    }
  }
  
  
  export default FirstPage;