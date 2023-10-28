// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import  banana from "./books";
// import Book from "./Book";

// // const names = ['hello','bello',"wello"];

// function BookList() {
//   const somevalue = "bvookandwook"
//   const  displayvlaue = ()=>{
//     console.log(somevalue)
//   }
//   const getBook = (id) =>{
//     const book = banana.find((book)=> book.id === id );
//     console.log(book);
//   } 
//   return (<section className="Booklist">
    
//       <EventHandler/>
//     {banana.map((name)=>{
//        const {img,title,author,id} = name
//        return <Book  key={id} {...name}  getBook={getBook}  />;
//     })}
//   </section>)
//     }
// const EventHandler = ()=>{
//   const Inputhandler = (e)=>{console.log("first")
//    console.log(e.target);
//    console.log(e.target.value);
//  }
// const Buttonhandler = (e)=>{alert("home"
// );
// e.preventDefault();
// console.log("first")
// }
// return (
//     <section>
//       <form>
//         <h1>Event</h1>
//         <input type="text" name="example" onChange={Inputhandler}
//          style={{margin:"0.5rem 0"}} /> 

//       </form> 
//       <button onClick={Buttonhandler}> click</button>
//     </section>

//   )
// }









// // function BookList() {
// //   return (
// //     <section className="Booklist">
// //       {newName}
// //     <Book  img={firstBook.Img}  title={firstBook.title} author={firstBook.author}/>
// //       <Book  img={SecondBook.Img}  title={SecondBook.title} author={SecondBook.author}/>
// //       <Book  img={ThirdBook.Img}  title={ThirdBook.title} author={ThirdBook.author}>
// //        {/* this is children prop where you can add single element 
// //         in single tag.. 
// //         <p>fgfggfgf</p>
// //         <button>subscribe</button> */}
// //       </Book>
// //      <Book  img={FoureBook.Img}  title={FoureBook.title} author={FoureBook.author}/>
      
// //       </section>
// //   );
// //   }


// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(<BookList />);
// // function Greeting (){
// //     return (
// //         <React.Fragment>
// //         <div>
// //             {/* need to return atleast one parent element */}
// //             <h1>Hello its my first component</h1>

// //         </div>
// //         </React.Fragment>
// //     )
// // }
// // function Greeting (){
// //     return ( <div>
// //     <Person/>
// //     <Message/>
// //     </div>)
// // };
// // function Person ()
// // { return <h1>hello john</h1>}
// // function Message (){
// //  return <p>pass ho jao</p>
// // }
