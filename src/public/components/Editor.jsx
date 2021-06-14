import React, { Component } from 'react';
import * as pr from '../index_scripts.js';
import Navbar from './navbar.jsx';


class Editor extends Component {
   constructor(props) {
      super(props);
   }

   def_value = `#include <bits/stdc++.h>
using namespace std;
int main(){
   cout<<"hello wordl"<<endl;
   return 0;
}`;


   render() {
      return (
         <>
            <Navbar />
            <div className="container mt-4">
               <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Enter Your Source Code or template</label>
                  <textarea className="form-control mt-2" id="editor" rows="20" defaultValue={this.def_value}></textarea>
               </div>
            </div>
            <div className="container mt-4">
               <div className="row">
                  <div className="col-6 form-group">
                     <label htmlFor="exampleFormControlTextarea1">stdin</label>
                     <textarea className="form-control mt-2" id="input" rows="5"></textarea>
                  </div>
                  <div className="col-6 form-group">
                     <label htmlFor="exampleFormControlTextarea1">stdout</label>
                     <textarea className="form-control mt-2" id="output" rows="5"></textarea>
                  </div>
               </div>
            </div>
            <div className="mt-4 d-grid gap-2 col-2 mx-auto">
               <button type="button" className="btn btn-outline-primary btn-lg" onClick={pr.sendCode}>Compile and Run</button>
            </div>
         </>
      )
   }
}

export default Editor;