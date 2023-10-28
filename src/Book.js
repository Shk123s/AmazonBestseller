function Book(props) {
    // need to add childeren in the props
      const {img,title,author,displayvlaue,getBook,id,number} = props;
    
    
      return (
     
        <article className="book">
        <p ><span className="number">{number + 1 }</span></p>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author}</h4>
         
          {/* {children} */}
        </article>
      );
    }

    export default  Book;