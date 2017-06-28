import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      buyItems: ['milk','bread','fruit'],
      message: ''
    }
  }

  addItem(e) {
    e.preventDefault();
    console.log("addItem");
    const {buyItems} = this.state;
    const newItem = this.newItem.value ;

    const isOnTheList = buyItems.includes(newItem);

    if(isOnTheList){
      this.setState({
        message: 'This item is already on the list'
      })
      console.log(this.state.message);

    } else {
      newItem !=='' && this.setState({
      buyItems: [...this.state.buyItems, newItem],
      message: ''
    })

    }

  
    this.addForm.reset();

  }


  removeItem(item) {
    console.log("remove" - item)
  }
  
  render() {
    const {buyItems, message} = this.state;
    return (
      <div>
        <header>
          <h1>Shopping List</h1>
        
          <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput">Add new item</label>
              <input ref={input => this.newItem = input} type="text" placeholder="Bread" className="form-control" id="newItemInput"></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </header>

        <div className="content">
          {
            message !== '' && <p className="message text-danger">{message}</p>
          }
          <table className="table">
            <caption>Shopping List</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                buyItems.map(item => {
                  return (
                    <tr key={item}>
                      <th scope="row">1</th>
                      <td>{item}</td>
                      <td>Button</td>
                    </tr>
                  )
                })}
            </tbody>

          </table>
        </div>
      </div>

 
    );
  }
}

export default App;

     // <div className="App">
     //      <h1>Shopping List</h1>
     //      <lu>
            
     //      </lu>
     //  </div>