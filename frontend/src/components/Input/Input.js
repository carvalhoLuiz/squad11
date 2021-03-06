import React, { useState } from 'react';
import './style.css';

let input;
let label;

window.onload = function getItems() {
    input = document.getElementsByClassName('input');
    label = document.getElementsByClassName('label');
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();
        }
    });
};

export default function Input(props) {
    let checkInput;

    const hiddenLabelClick = (nInput) => {
        label[nInput].classList.add('disappear');
        document.addEventListener('click', (event) => {
            let isClickInside;
            if (input[nInput]) {
                isClickInside = input[nInput].contains(event.target);
            }

            if (!isClickInside && !checkInput) {
                if (input[nInput]) {
                    label[nInput].classList.remove('disappear');
                    checkInput = false;
                }
            }
        });
    };

    const hiddenLabelChange = (a, func) => {
        let error;
        if (a.target.value) {
            checkInput = true;
        } else {
            checkInput = false;
        }
        if (error === true) {
            a.target.classList.add('errorTrue');
        } else {
            a.target.classList.remove('errorTrue');
        }
    };

    return (
        <div>
            <label className="label">{props.label}</label>
            <input
                className="input"
                type={props.type}
                required="required"
                onChange={(a) => {
                    hiddenLabelChange(a, props.error);
                    if (props.func) props.func(a);
                }}
                onClick={() => hiddenLabelClick(props.input)}
            />
            <span className="span">{props.placeHolder}</span>
        </div>
    );
}
