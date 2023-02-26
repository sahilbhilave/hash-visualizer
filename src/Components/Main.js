import { useState } from 'react';
import './css/main.css';
import { input, clearColor, Reset } from './Functions/basic';
import { findHashing, insertHashing, deleteHashing } from './Functions/Hashing/Normalhashing';
import { insertLinear, findLinear, deleteLinear } from './Functions/Hashing/LinearProbing';
import { deleteQuadratic, findQuadratic, insertQuadratic } from './Functions/Hashing/QuadraticProbing';
import { insertDouble, findDouble, deleteDouble } from './Functions/Hashing/DoubleHashing';


function Main() {
    let d = document.getElementById('title');
    let res = document.getElementById('result');
    const [num, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const insert = event => {
        event.preventDefault();
        clearColor();
        let c = document.getElementById('calc');
        if (num === "" || num < 0) {
            c.innerHTML = "<b>Please Enter Valid Number</b>"
            res.innerHTML = "<b style=\"color:red\">Please Enter Valid Number</b>"
        }
        else {

            if (d.innerText === "Hashing") {

                insertHashing(c, num, input, res);
            }

            else if (d.innerText === "Linear Probing") {

                insertLinear(c, num, input, res);
            }

            else if (d.innerText === "Quadratic Probing") {

                insertQuadratic(c, num, input, res);
            }
            else if (d.innerText === "Double Hashing") {
                insertDouble(c, num, input, res);
            }
        }
    };

    const find = event => {
        clearColor();
        let c = document.getElementById('calc');
        if (num === "" || num < 0) {
            c.innerHTML = "<b>Please Enter Valid Number</b>"
            res.innerHTML = "<b style=\"color:red\">Please Enter Valid Number</b>"
        }
        else {
            if (d.innerText === "Hashing") {

                findHashing(c, num, input, res);
            }

            else if (d.innerText === "Linear Probing") {

                findLinear(c, num, input, res);
            }

            else if (d.innerText === "Quadratic Probing") {

                findQuadratic(c, num, input, res);
            }
            else if (d.innerText === "Double Hashing") {

                findDouble(c, num, input, res);
            }

        }
    };

    const del = event => {
        clearColor();
        let c = document.getElementById('calc');
        if (num === "" || num < 0) {
            c.innerHTML = "<b>Please Enter Valid Number</b>"
            res.innerHTML = "<b style=\"color:red\">Please Enter Valid Number</b>"
        }
        else {
            if (d.innerText === "Hashing") {
                deleteHashing(c, num, input, res);
            }

            else if (d.innerText === "Linear Probing") {

                deleteLinear(c, num, input, res);
            }


            else if (d.innerText === "Quadratic Probing") {

                deleteQuadratic(c, num, input, res);
            }

            else if (d.innerText === "Double Hashing") {

                deleteDouble(c, num, input, res);
            }
        }
    };

    const changeChoice = event => {
        Reset();
        let d = document.getElementById('title');
        const value = event.target.value;
        d.innerText = value;
        let func = document.getElementById('function');
        if (value === "Hashing") {
            func.innerText = "Position = Element % Size";
        }
        else if (value === "Linear Probing") {
            func.innerText = "Position = (Element + i) % Size";
        }
        else if (value === "Quadratic Probing") {
            func.innerHTML = "Position = (Element + i<sup>2</sup>) % Size";
        }
        else if (value === "Double Hashing") {
            func.innerHTML = "Position = [(Hash1(key) + i * Hash2(key))] % Size <p>Hash1(key) = key % Size</p><p>Hash2(key) = 5 - (key % 5)</p>";
        }
    };

    const changeSize = event => {
        Reset();
        let SIZE = parseInt(event.target.value);

        
        document.getElementById('size').innerText = SIZE;
        for(let i=1;i<15;i++)
        {
            document.getElementById(input(parseInt(i))).style.display = "";
            document.getElementById(parseInt(i)).style.display = "";
        }
        let x = parseInt(SIZE);
        for(let i=x;i<=15;i++)
        {
            document.getElementById(input(parseInt(i))).style.display = "none";
            document.getElementById(parseInt(i)).style.display = "none";
        }
    };

    return (
        <div class="footer">

            <div id="choice">
                <select onChange={changeChoice} name="type" id="type">
                    <optgroup label="No Collision Resolution">
                        <option value="Hashing">Hashing</option>
                    </optgroup>
                    <optgroup label="Collision Resolution">
                        <option value="Linear Probing">Linear Probing</option>
                        <option value="Quadratic Probing">Quadratic Probing</option>
                        <option value="Double Hashing">Double Hashing</option>
                    </optgroup>
                </select> 
                <select  onChange={changeSize} name="ssize" id="ssize">
                <optgroup label="Select Size Of Table"></optgroup>
                        <option value="1">Table Size : 1</option>
                        <option value="2">Table Size : 2</option>
                        <option value="3">Table Size : 3</option>
                        <option value="4">Table Size : 4</option>
                        <option value="5">Table Size : 5</option>
                        <option value="6">Table Size : 6</option>
                        <option value="7">Table Size : 7</option>
                        <option value="8">Table Size : 8</option>
                        <option value="9">Table Size : 9</option>
                        <option value="10">Table Size : 10</option>
                        <option value="11">Table Size : 11</option>
                        <option value="12">Table Size : 12</option>
                        <option value="13">Table Size : 13</option>
                        <option value="14">Table Size : 14</option>
                        <option value="15" selected>Table Size : 15</option>
                    
                </select>
            </div>
            <input type="number" id="num" name="num" onChange={handleChange} value={num} autoComplete="off" placeholder='Enter Element' defaultValue='1' min="1" ></input>
            <button type="button" onClick={insert}>Insert</button>
            <button type="button" onClick={find}>Find</button>
            <button type="button" onClick={del}>Delete</button>
            <button type="button" onClick={Reset}>Reset</button>


        </div>
    );
}

export default Main;