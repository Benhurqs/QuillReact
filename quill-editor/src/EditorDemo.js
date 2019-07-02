import React, {Component} from 'react';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {add} from "./utils.js"

import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;

export class EditorDemo extends Component {

    constructor() {
        super();
        this.state = {
            text1 : '<span class="ql-formats"><button class="ql-formula" aria-label="Formula" type="button">Edit<button></span>',
            text2 : '<b onclick={console.log("cliquei")}><span class="ql-formula" data-value="c = \\pm\\sqrt{a^2 + b^3}"/></b>'
        };

            // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        console.log('The link was clicked.');
        this.setState(state => ({
            text2:'<b>oi</b>'
        }));
    }

    renderHeader() {

    
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <button className="ql-formula" aria-label="Formula"></button>
                <button className="ql-link" aria-label="Link"></button>
                <button id="custom_test" onClick={this.handleClick}>Testando</button>
            </span>
        );
    }

    // customTestButton(){
    //     var customButton = document.querySelector('#custom-button');
    //     customButton.addEventListener('click', function() {
    //          console.log('Clicked!');
    //     });
    //     return customButton;
    // }   

    render() {


        console.log(add(2,3));


        const header = this.renderHeader();
        console.log(this.state.text2)

        
        const value = this.state.text2;

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Editor</h1>
                        <p>Editor is rich text editor component based on Quill.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Custom Toolbar</h3>
                    <Editor 
                        headerTemplate={header} 
                        style={{height:'320px'}} 
                        value={value} 
                        onTextChange={(e)=>this.setState({text2:e.htmlValue})}/>
                    <p>Value: {this.state.text2 ||'empty'}</p>
                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({text2:''})}/>
                </div>
            </div>
        );
    }
}