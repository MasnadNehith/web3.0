import React ,{Component} from 'react';
import lottery from '../lottery';
import web3 from '../web3';

class Lottery extends Component{

  constructor(props){
    super(props);
    this.state = {
      manager : '',
      participate_amount : '0.5',
      message : '',
      total_amount : ''
    }
  }
  async componentDidMount(){
    // get the public address of the managers
    const manager  = await lottery.methods.manager().call();
    console.log(manager);
    this.setState({manager : manager});
    const total_amount = await web3.eth.getBalance(lottery.options.address);
    this.setState({total_amount : total_amount})
  }

  render(){
    return (
       <div>
          <h1> Total lottery pool is {this.state.total_amount} </h1>
          <form>
            <input placeholder="0.5" />
            <button type="submit">Participate </button>
          </form>
          <hr /> <br /> <hr />
          <p> The manager of the lottery decentralized app is {this.state.manager}</p>
          <button> Pick Winner </button>
       </div>
    )
  }
}

export default Lottery;
