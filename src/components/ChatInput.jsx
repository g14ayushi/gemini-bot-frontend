import { useState } from "react";

const ChatInput = ({onSumit}) => {

    const [question, setQuestion] = useState("");
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(question.trim()){
            onSumit(question);
            setQuestion("");
        }
    }
    return (
        <div className="container my-4">
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Ask a Question</label>
                    <input type="text"
                            className="form-control"
                            id='question'
                            placeholder="Enter your Question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)} />
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ChatInput;