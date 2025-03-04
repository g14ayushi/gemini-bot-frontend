const ChatResponse = ({response}) => {
    if(!response){
        return null;
    }
    const {candidates, usageMetadata} = response;
    return (
        <div className="container my-4">
            {candidates.map((candidate, index) => (
              <div className="card mb-3" key={index}>
                <div className="card-body">
                <h5 className="card-title">Candidate {index + 1}</h5>
                  <p className="card-text">{candidate.content.parts[0].text}</p>
                  <h6>Citations: </h6>
                  <ul>
                    {candidate?.citationMetadata?.citationSources.map((source, idx) => (
                        <li key={idx}>
                            <a href={source.uri} target="_blank" rel="noopener noreferrer">
                            {source.uri}
                            </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <h4>Usage Metadata</h4>
            <p>Total tokens: {usageMetadata.totalTokenCount}</p>
            <p>Prompt tokens: {usageMetadata.promptTokenCount}</p>
            <p>Candidate tokens: {usageMetadata.candidatesTokenCount}</p>
        </div>
    )
}

export default ChatResponse;
