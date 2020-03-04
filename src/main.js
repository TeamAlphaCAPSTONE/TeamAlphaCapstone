import React from 'react';

class FirstPage extends React.Component{
    render() {
      return (
        <div>
            <div className="container-fluid w-50 mt-2 mx-auto">
                <div className="d-flex flex-column align-items-center text-center">
                    {/* <div className="border border-dark w-100 align-items-center text-center"> */}
                    <h2 style={{color: "white"}}>
                        Title
                    </h2>
                    
                    <div className="border border-dark border-3 w-50 textcolor mt-2">
                        <a href="#" >
                            <div className="col-12 text-center h6 mx-auto">
                                AODA Details
                            </div>
                        </a>
                    </div>
                    <div className=" border border-dark border-3 w-50 textcolor mt-2">
                        <div className="col-12 text-center h6 mx-auto">
                            <a href="#" >SEO Details</a>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <form className="centre-block mt-4 mx-auto w-50">
                    <div className="form-group">
                        <input type="text" className="form-control box" id="name" placeholder="Enter your name"></input>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control box" id="email" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <input type="url" class="form-control box" id="url" placeholder="www.url.com"></input>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="privacy" />
                        <label class="form-check-label textcolor" for="privacy">I accept privacy policy</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="SendEmail" />
                        <label class="form-check-label textcolor" for="SendEmail">I want report to be emailed</label>
                    </div>
                    <button type="submit" class="btn btn-primary d-block mt-4 mx-auto">See report</button>
                </form>  


                <label id="loading" hidden>Loading ...</label>
                <div class="progress center-block w-25 mt-4 mx-auto" style={{"textAlign" : "center"}}>
                    
                    <div className="progress-bar d-block bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%", "text-align":"center"}}>
                    10%    
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  
  export default FirstPage;