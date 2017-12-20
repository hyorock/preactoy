import React, { Component } from 'react';

class BaseballGame extends Component {
    constructor(props) {
        super(props);

        this.initValue();

        this.state = {
            question: '',
            answer: '',
            status: 'Ready',
            result: '',
        };

        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.answerTheQuestion = this.answerTheQuestion.bind(this);
    }

    initValue() {
        this.strike = 0;
        this.ball = 0;
    }

    gameStart() {
        if(this.state.question.length === 3){
            this.setGameStatus('GameStart');
        }
        else {
            this.setResult('Please input by three numbers');
        }
    }

    answerTheQuestion(){
        this.initValue();

        if(this.state.status === 'GameStart'){
            this.calculateResult();
        }
        else {
            this.setResult('GameStart Please');
        }
    }

    handleChangeQuestion(event) {
        this.setState({question: event.target.value});
    }
    handleChangeAnswer(event) {
        this.setState({answer: event.target.value});
    }

    setGameStatus(text) {
        let newState = Object.assign({}, this.state);
        newState.status = text;
        this.setState(newState);
    }

    setResult(text) {
        let newState = Object.assign({}, this.state);
        newState.result = text;
        this.setState(newState);
    }

    calculateResult(){
        let questionArray = this.state.question.split('');
        let answerArray = this.state.answer.split('');

        for(let i = 0 ; i < questionArray.length ; i++) {
            for(let j = 0 ; j < answerArray.length ; j++) {
                if(questionArray[i] === answerArray[j]){
                    if(i === j) {
                        this.strike = this.strike + 1;
                    }
                    else {
                        this.ball = this.ball + 1;
                    }
                }
            }
        }

        let result = '';

        if(this.strike === 3){
            result = 'HomeRun!!!';
        }
        else if(this.strike === 0 && this.ball === 0) {
            result = 'out!!';
        }
        else {
            result = 'one more time please (' +
                        'S:' + this.strike +
                        ' B:' + this.ball + ')';
        }

        this.setResult(result);
    }

    renderBoard(){
        let stauts = this.state.status;
        let result = this.state.result;
        return (
            <div>
                <div><h2>{stauts}</h2></div>
                <div>{result}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>BaseballGame</h1>
                <div><p>
                    Question: <input type="text" name="Question" value={this.state.question} onChange={this.handleChangeQuestion}></input>
                    <button onClick={this.gameStart}>Start</button>
                </p></div>
                <div><p>
                    Answer: <input type="text" name="Answer" value={this.state.answer} onChange={this.handleChangeAnswer}></input>
                    <button onClick={this.answerTheQuestion}>Answer</button>
                </p></div>
                <div>{this.renderBoard()}</div>
            </div>
        );
    }
}

export default BaseballGame;