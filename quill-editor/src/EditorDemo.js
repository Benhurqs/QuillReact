import React, {Component} from 'react';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";

import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;

export class EditorDemo extends Component {

    constructor() {
        super();
        this.state = {
            text1 : '<span class="ql-formats"><button class="ql-formula" aria-label="Formula" type="button">Edit<button></span>',
            text2 : '<span class="ql-formula" data-value="x+y">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">x+y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.66666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.19444em;"></span><span style="margin-right: 0.03588em;" class="mord mathdefault">y</span></span></span></span></span>﻿</span></p>'

        };
    }

    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
                <button className="ql-formula" aria-label="Formula"></button>
                <button className="ql-link" aria-label="Link"></button>
            </span>
        );
    }

    render() {
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
                    <Editor headerTemplate={header} style={{height:'320px'}} value={value} onTextChange={(e)=>this.setState({text2:e.htmlValue})}/>
                    <p>Value: {this.state.text2 ||'empty'}</p>
                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({text2:''})}/>
                </div>
            </div>
        );
    }
}