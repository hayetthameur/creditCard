import React, { Component } from 'react';
import logo from './assets/images/sim.png'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'FOULEN',
            number: '**** **** **** ****',
            monthyear:'12/08'  
        }
        this.nameChage = this.nameChage.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.Change = this.Change.bind(this);    
    }
    //to change name
    nameChage(n)
    {
        let regex = /^([a-z ]+)$/;
        if (regex.test(n.target.value))
        {
            this.setState({
                name: n.target.value.toUpperCase()

            });}
                
    }
    //change number
    numberChange(num)
    { 
        let regex = /^[0-9\b]+$/;  
        if (regex.test(num.target.value)){
     
          this.setState({
              number:(num.target.value.padEnd(16, "*").replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''))
                         })
        }
    }
    //change thru
    Change(event)
    {
       let  regex = /^[1-9\b]+$/;  
      
        if (event.target.value.slice(0, 2) <= 12) {
                if((event.target.value.slice(0,2).match(regex)))
                {
                    this.setState({
                        monthyear:
                            event.target.value.slice(0, 1).padStart(1,"0") + "/" +
                            event.target.value.slice(2, 4)

                    })
                }
                    this.setState({
                        monthyear:
                            event.target.value.slice(0, 2) + "/" +
                            event.target.value.slice(2, 4)  
                    });                               
                 
        }
       
           
    }


    render() { 
        return ( <div className="mycard">
                      <div className="card" >
                          <h3>Company Name</h3>
                          <img src={logo} alt="logo" 
                            style={{
                                width: '72px',
                                height: '69px',
                                }}
                            />


                      <div className="number">{this.state.number}</div>
                       <div className="credit">
                            <div>
                        <h5>{this.state.monthyear}</h5>
                            <p>{this.state.name}</p>
                            </div>
                        </div>
                        </div>
            <div>
                <img src="https://freelogovector.net/wp-content/uploads/logo-images-14/mastercard-logo-vector-91217.png" />
            </div>
                        <div className="formulaire">
                            
                               <input type="text"  maxLength="16" onChange ={this.numberChange} placeholder="**** **** **** ****"/>
    <input className="txt" type="text"  maxLength="20" onChange={this.nameChage} placeholder="tapez votre nom"/>
                          <input type="text"
                                datatype="MM YY"
                                placeholder="12 /08" 
                                onChange={this.Change} maxLength="4"/>
                             
                                  
                            
                         </div>

                  </div>

         );
    }
}
 
export default Card;