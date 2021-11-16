import React from "react";
//components
import { PreviewCard } from "components/PrivewCard/PreviewCard";
import { Reviews } from "components/Reviews/Reviews";
import { ChatList } from "components/Chat/Chat";

function App() {
  return (
    <div className='page'>
      <div className='container'>
        <PreviewCard />
        <Reviews />
        <ChatList />
      </div>
    </div>
  );
}

export default App;
