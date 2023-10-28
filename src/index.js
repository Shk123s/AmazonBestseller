import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  {BOOKLIST} from "./books";
import Book from "./Book";

function BookList() {
  
  
    
  return (
    <>
    <h1>Amazon Best seller </h1>  
  <section className="Booklist"> 
    {BOOKLIST.map((name,index)=>{
       const {img,title,author,id} = name
       return <Book  key={id} {...name}   number={index}  
       />;
    })}
  </section>
  </>)
    }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);


