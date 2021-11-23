import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.props.changeBitState(e.target.name, e.target.checked ? 1 : 0);
    }

    render() {
        const signBit = (
            <div key={"b15"}>
                <input type={"checkbox"} name={"15"} key={"b15"} onClick={this.handleClick}/>
                <p>{"b15"}</p>
                <h2 className={"bitState"}>{this.props.bitState[15]}</h2>
            </div>);

        const exp = [];

        for (let i = 14; i >= 7; i--) {
            exp.push(
                <div key={"b" + i}>
                    <input type="checkbox" name={i} key={"b" + i} onClick={this.handleClick}/>
                    <p>{"b" + i}</p>
                    <h2 className={"bitState"}>{this.props.bitState[i]}</h2>
                </div>
            );
        }

        const mantissa = [];

        for (let i = 6; i >= 0; i--) {
            mantissa.push(
                <div key={"b" + i}>
                    <input type="checkbox" name={i} key={"b" + i} onClick={this.handleClick}/>
                    <p>{"b" + i}</p>
                    <h2 className={"bitState"}>{this.props.bitState[i]}</h2>
                </div>
            );
        }

        return (<>
            <form>
                <div className={"signBit"}>
                    <h1 className={"desc"}>s</h1>
                    <div className={"signBit-color"}>
                        {signBit}
                    </div>
                </div>
                <div className={"exp"}>
                    <h1 className={"desc"}>exponent</h1>
                    <div className={"exp-color"}>
                        {exp}
                    </div>
                </div>
                <div className={"mantissa"}>
                    <h1 className={"desc"}>mantissa</h1>
                    <div className={"mantissa-color"}>
                        {mantissa}
                    </div>
                </div>
            </form>
        </>)
    }
}

export default Form