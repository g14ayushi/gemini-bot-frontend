import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
     try{
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
     }catch(error){
      alert("Failed to get the response");
     }finally{
      setLoading(false);
     }
  }
  
  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>G14 Gemini Bot</h1>
      </header>
      <ChatInput onSumit={handleQuestionSubmit}/>
      <ChatResponse response = {response}/>
    </div>
  )
}

export default App
