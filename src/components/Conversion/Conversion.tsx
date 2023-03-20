import React from 'react';
import './Conversion.css';

import randomWords from 'random-words';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const cleanIcon = <FontAwesomeIcon icon={faTrash} />

export default function Conversion() {
    const seedInput = React.createRef<HTMLInputElement>();
    const alert = React.createRef<HTMLParagraphElement>();
    const output = React.createRef<HTMLParagraphElement>();

    const convert = () => {
        alert.current!.innerHTML = "‎ ";
        var seed = seedInput.current?.value;
        if (seed === "") {
            alert.current!.innerHTML = "Input a score please";
            return;
        }
        var numb: any = seed!.replace(/[^0-9]/g, "/");
        numb = numb.split('/');

        var generatedSeedScore = random(numb[0]);
        var generatedSeedMax = random(numb[1]);
        var sum = generatedSeedScore + generatedSeedMax;
        var words = randomWords({ min: 4, max: 4, seed: sum.toString() });
        output.current!.innerHTML = `${words[0].length} ${words[1].toUpperCase()} out of ${words[2].length} ${words[3].toUpperCase()}`
        return;
    }

    const generateAndConvert = () => {
        seedInput.current!.value = `${between()}/${between()}`;
        convert();
    }

    const clean = () => {
        seedInput.current!.value = "";
        alert.current!.innerHTML = "‎ ";
        output.current!.innerHTML = "‎ ";
    }

    const between = () => {
        return Math.floor(Math.random() * (Number.MAX_VALUE - 1) + 1);
    }

    const random = (seed: number) => {
        var x = Math.sin(seed++) * 10000;
        return (x + Math.floor(x)) * -1;
    }

    return (
        <div className="wrapper">
            <div className="row">
                <input ref={seedInput} placeholder="7/10"></input>
                <button onClick={convert}>Convert</button>
                <button className='clean' onClick={clean}>{cleanIcon}</button>
            </div>
            <button className='genAndConvert' onClick={generateAndConvert}>Generate Score and Convert</button>
            <p ref={alert}>‎ </p>
            <p ref={output}>‎ </p>
        </div>
    )
}