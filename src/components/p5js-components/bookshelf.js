import React from 'react';
import p5 from 'p5';
import '../projects.css';
import starImage from '../../res/images/Star.png';

class Bookshelf extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let width = 400;
          let height = 400;
          let star;
          let books = [
               {
                    title: "Crazy Rich Asians",
                    author: "Kevin Kwan",
                    stars: 4,
                    r: 201,
                    g: 255,
                    b: 219
               },
               {
                    title: "The Catcher In the Rye",
                    author: "J. D. Salinger",
                    stars: 3,
                    r: 155,
                    g: 155,
                    b: 219
               },
               {
                    title: "Sick In The Head",
                    author: "Judd Apatow",
                    stars: 3,
                    r: 230,
                    g: 138,
                    b: 247
               },
               {
                    title: "Alice In Wonderland",
                    author: "Lewis Carroll",
                    stars: 4,
                    r: 242,
                    g: 186,
                    b: 119
               },
               {
                    title: "Into The Wild",
                    author: "Jon Krakauer",
                    stars: 4,
                    r: 236,
                    g: 240,
                    b: 120
               },
               {   title: "Gone Girl",
                    author: "Gillian Flynn",
                    stars: 5,
                    r: 108,
                    g: 157,
                    b: 185
               },
               {   title: "Pride & Prejudice",
                    author: "Jane Austen",
                    stars: 5,
                    r: 201,
                    g: 255,
                    b: 219
               },
               {   title: "The Handmaid's Tale",
                    author: "Margaret Atwood",
                    stars: 5,    
                    r: 155,
                    g: 155,
                    b: 219
               },
               {   title: "The Testaments",
                    author: "Margaret Atwood",
                    stars: 4,
                    r: 230,
                    g: 138,
                    b: 247
               },
               {   title: "Dark Places",
                    author: "Gillian Flynn",
                    stars: 4,
                    r: 242,
                    g: 186,
                    b: 119
               },
               {
                    title: "Little Women",
                    author: "Louisa Alcott",
                    stars: 4,
                    r: 236,
                    g: 240,
                    b: 120
               },
               {
                    title: "Sharp Objects",
                    author: "Gillian Flynn",
                    stars: 5,
                    r: 108,
                    g: 157,
                    b: 185
               }
          ];
    
          sketch.setup = () => {
               sketch.createCanvas(width, height);
               star = sketch.loadImage(starImage);
          };
  
          sketch.draw = () => {
          // draw shelf
               sketch.background(224, 240, 211);
               for(var yPosition =120 ; yPosition < 400 ; yPosition +=100) {
                    sketch.fill(224, 187, 132);
                    sketch.rect(0, yPosition, width, 10);
               }
               let bookHeight = 100;
               let bookWidth = 70;
               let bookXStart = 15;
               let bookYStart = 20;
               // draw one book
               for (var bookIndex = 0 ; bookIndex < books.length ; bookIndex++){
                    var book = books[bookIndex];
                    var bookXSpacing = bookIndex*95;
                    if((bookXStart-5 + bookXSpacing) >= 320) {
                         bookYStart +=103;
                         bookXStart -=380;
                    }
                    sketch.fill(book.r, book.g, book.b);
                    sketch.rect(bookXStart-5 + bookXSpacing, bookYStart, 90, 100);
                    sketch.fill(0, 0, 0);
                    sketch.text(book.title, bookXStart + bookXSpacing, bookYStart+9,  bookWidth, bookHeight);
                    sketch.text(book.author, bookXStart + bookXSpacing, bookYStart+50, bookWidth, bookHeight);
                    for (var i = 0; i < book.stars; i++) {
                         sketch.image(star, bookXStart-2 + bookXSpacing + i * 10, bookYStart+70, 17, 25);
                    }
               }
               sketch.fill(108, 157, 240);            
          };
     };
     componentDidMount() {
          this.myP5 = new p5(this.Sketch, this.myRef.current);
     }
     render() {
          return (
               <div className="projects">
                    <div ref={this.myRef}>
                    </div>
                    <p className="project-info">
                         This project uses most of what I learned about JS in Khan Academy. 
                         I learned objects for this project and then used arrays, for loops, and if statments to build it.
                         It's a work in progress as I'm adding titles of books as I read them during this pandemic.
                    </p>
               </div>
          );
     }
  }
  
  export default Bookshelf;