import React from 'react';

const ANSWER_INDICES = [1,2,3,4,5,6,7,8,9,10];

class Poll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null,
      answers: [{}, {}],
      filledAnswers: 0
    };

    ANSWER_INDICES.forEach(el => this.state['answer' + el] = el <= 2 ? true : null)

    this.answerContainer = React.createRef();
    this.questionInput = React.createRef();
    this.addAnswer = this.addAnswer.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // count # of filled answers
    let count = 0;
    for (let i = 0; i < ANSWER_INDICES.length; i++) {
      let answer = "answer" + ANSWER_INDICES[i];
      if (this.state[answer] && this.state[answer].length) count++;
    }

    if (count !== this.state.filledAnswers) {
      this.setState({filledAnswers : count});
    }
  }

  renderAnswers() {
    let count = 0;
    let answers = [];
    ANSWER_INDICES.forEach(index => {
      let answerIndex = 'answer' + index;
      let answer = this.state[answerIndex];
      if (answer !== null) {
        count++;
        answers.push(
           <Answer
              key={index}
              index={index}
              onKeyDown={(event) => {this.handleKeyDown(event, index)}}
              onBlur={(event) => {this.addAnswer(event, index)}}
              onDelete={(event) => {this.handleDelete(event, index)}}
              placeholder={`Choice ${count}`}
            >
            </Answer>
        );
      }
    });
    return answers;
  }

  render() {
    return (
      <div className="cf">
      	<label className="slds-form-element__label">Question</label>
        <input className="slds-input" placeholder="What would you like to ask?" value={this.state.question} onChange={(e) => {this.setState({question: e.target.value})}}/>

        <div className="slds-box slds-theme_shade slds-m-vertical_small" ref={this.answerContainer}>
          {this.renderAnswers()}
        </div>

        <button
          className="slds-button slds-button_brand fr mts"
          disabled={this.state.filledAnswers > 1 && this.state.question ? null : true}
        >
          Ask
        </button>
      </div>
    );
  }

  handleDelete(event, index) {
    this.setState({['answer' + index]: null});
  }

  addAnswer(event, index) {
    console.log(event, event.shiftKey, event.nativeEvent, event.type);
    const currentAnswer = 'answer' + index;
    const nextAnswer = 'answer' + (index + 1);
    const value = event.target.value;

    this.setState({[currentAnswer]: value});
    if (this.state[nextAnswer] === null) {
      this.setState({[nextAnswer]: true});
      return true;
    }

    return false;
  }

  handleKeyDown(event, index) {
    if (event.key === 'Tab' && !event.shiftKey) {
      if (this.addAnswer(event, index)) {
        event.preventDefault();
      }
    }
  }
}

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if(this.props.index > 2) {
      this.input.current.focus();
    }
  }

  renderDeleteButton() {
    if (this.props.index > 2) {
      return (
        <button className="slds-button slds-button_icon" onClick={this.props.onDelete}>
          <svg className="slds-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M14.3 11.7l6-6c.3-.3.3-.7 0-1l-.9-1c-.3-.2-.7-.2-1 0l-6 6.1c-.2.2-.5.2-.7 0l-6-6.1c-.3-.3-.7-.3-1 0l-1 1c-.2.2-.2.7 0 .9l6.1 6.1c.2.2.2.4 0 .6l-6.1 6.1c-.3.3-.3.7 0 1l1 1c.2.2.7.2.9 0l6.1-6.1c.2-.2.4-.2.6 0l6.1 6.1c.2.2.7.2.9 0l1-1c.3-.3.3-.7 0-1l-6-6c-.2-.2-.2-.5 0-.7z"></path></svg>
        </button>
      )
    } else {
      return (
        <div className="slds-button slds-button_icon"></div>
      )
    }
  }

  render() {
    return (
      <div className="slds-grid slds-grid_vertical-align-center slds-m-bottom_x-small">
        <div className="slds-col slds-size_1-of-12"></div>
        <div className="slds-col slds-size_10-of-12">
          <input
            ref={this.input}
            className="slds-input"
            onBlur={this.props.onBlur}
            onKeyDown={this.props.onKeyDown}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
          />
        </div>
        <div className="slds-colslds-size_1-of-12 slds-p-left_x-small">
          {this.renderDeleteButton()}
        </div>
      </div>
    );
  }
}

export default Poll;
