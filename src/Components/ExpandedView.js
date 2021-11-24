import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEquals } from '@fortawesome/free-solid-svg-icons'

class ExpandedView extends React.Component {
    parseFloatRadix(num, radix) {
        return parseInt(num.replace('.', ''), radix) /
            Math.pow(radix, (num.split('.')[1] || '').length)
    }

    parseBinFloat(str) {
        const floatParts = str.split(".");
        const wholeDecimal = parseInt(floatParts[0], 2);

        // calc fractional part
        var sum = 0.0
        var divisor = 2;

        for (var i = 0; i < floatParts[1].length; i++) {
            if (floatParts[1].charAt(i) === '1') {
                sum += (1/divisor);
            }

            divisor *= 2;
        }

        return sum+wholeDecimal;
    }

    render() {
        var correctOrderBits = this.props.bitState.slice().reverse();

        var signNumber = correctOrderBits[0] ? "-1" : "1";

        // extract exp bits
        var exp = correctOrderBits.slice();
        exp.splice(0,1);
        exp.splice(8, 7);

        // convert to decimal
        var expVal = parseInt(exp.join(''), 2);
        var expValBiased = expVal - 127;

        // extract mantissa bits
        var man = correctOrderBits.slice();
        man.splice(0,9);

        // convert to floating point
        var manValue = this.parseFloatRadix("." + man.join(''), 2);

        // add implicit one onto man
        man.splice(0, 0, 1);

        var result = 0;

        // SPECIAL CASES

        // display 0 or -0 for 0 exp and 0 man
        if (expValBiased === -127 && man.splice().slice(0,1).every(item => item === 0)) {
            result = parseInt(signNumber) === 1 ? "0" : "-0";
        }

        else if (expValBiased === 128 && man.splice().slice(0,1).every(item => item === 0)) {
            result = parseInt(signNumber) === 1 ? "∞" : "-∞";
        }

        // shift val left for positive exp
        else if (expValBiased >= 0) {
            for (let i = expValBiased; i >= 0; i--) {
                man.push(0);
            }
            man.splice(expValBiased + 1, 0, '.');
            result = this.parseBinFloat(man.join(''));
            // add in sign
            result *= parseInt(signNumber)
        }

        // shift value right for negetive exp
        else if (expValBiased < 0) {
            for (let i = expValBiased + 1; i < 0; i++) {
                // add a zero at the front
                man.unshift(0);
            }

            // add radix to the front
            man.unshift(".");
            man.unshift("0");

            // calculate result from array
            result = this.parseBinFloat(man.join(''));

            // add in sign
            result *= parseInt(signNumber)
        }


        return (
            <div className={"expandedView"}>
                <h1 className={"signNumber"}>{signNumber}</h1>

                <FontAwesomeIcon className={"times"} icon={faTimes} size="2x"/>

                <h1 className={"exponent"}>2<sup>{expValBiased}</sup></h1>

                <FontAwesomeIcon className={"times"} icon={faTimes} size="2x"/>

                <div className={"man"}>
                    <h1 className={"manOffset"}>(1</h1>
                    <FontAwesomeIcon className={"plus"} icon={faPlus} size="2x"/>
                    <h1 className={"manVal"}>{manValue})</h1>
                </div>

                <FontAwesomeIcon className={"equals"} icon={faEquals} size="2x"/>

                <div className={"result"}>
                    <h1 className={"resultVal"}>{result}</h1>
                </div>
            </div>
                );
    }
}

export default ExpandedView;