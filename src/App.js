import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Plan from "../src/plancomponent";

class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handlechange = (e) => {
    this.setState({ text: e.target.value });
  };

  addtoarray = () => {
    //here leftitems will be used to store the texts and text is state hook for input to store for a moment
    //and this text comes from this.state.items
    if (this.state.text !== "") {
      const items2 = [...this.state.items, this.state.text]; //data flow from 1 to 2 parameter and finally to left items varaiable
      this.setState({ items: items2, text: "" }); // again make the text emtpy
    }
  };

  // yaha eid mein id ayaega jab delete button click hoga from plnacomponent file se
  handledelete = (eid) => {
    //console.log("delted",e);
    //we have to delete from items state
    const olditems = [...this.state.items];
    //abhi bhi puaran items hi hai
    // console.log(olditems);
    //filter hame vo element dega jinki id hamre send ki gayi id se na match kare
    const newitems = olditems.filter((element, id) => {
      return id !== eid; //jiski id match karegi vo nahi return hoga
    });
    console.log(newitems);
    this.setState({ items: newitems });
  };

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3 ">
            <h1 className="text-center">To-Do List</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your task here"
                  value={this.state.text}
                  onChange={this.handlechange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 font-weight-bold"
                  onClick={this.addtoarray}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    //we have data in this.state.items
                    //console.log(this.state.items)
                    //we will use map method in array:this.state.items

                    //map has two parameter first is current value and second is index of array
                    this.state.items.map((valuep, i) => {
                      return (
                        <Plan
                          id={i}
                          valueprops={valuep}
                          senddata={this.handledelete}
                        />
                      );
                      // by default i=0 ki value
                      // valueprops will be acceped as props parameter in receivers end
                      //handle delete funcion ko pass kar diya in app.js taki vaha se execute karva sake
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
