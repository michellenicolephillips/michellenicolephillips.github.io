import React from 'react';
import p5 from 'p5';
import '../projects.css';

const divStyle={
     overflowY: 'scroll',
     height:'400px',
   };


class Bookshelf extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let books = [
               {
                    title: "Crazy Rich Asians",
                    author: "Kevin Kwan",
                    r: 255,
                    g: 128,
                    b: 128
               },
               {
                    title: "The Catcher In the Rye",
                    author: "J. D. Salinger",
                    r: 204,
                    g: 0,
                    b: 0
               },
               {
                    title: "Sick In The Head",
                    author: "Judd Apatow",
                    r: 255,
                    g: 255,
                    b: 255
               },
               {
                    title: "Alice In Wonderland",
                    author: "Lewis Carroll",
                    r: 51,
                    g: 77,
                    b: 0
               },
               {
                    title: "Into The Wild",
                    author: "Jon Krakauer",
                    r: 255,
                    g: 255,
                    b: 255
               },
               {   title: "Gone Girl",
                    author: "Gillian Flynn",
                    r: 255,
                    g: 71,
                    b: 26
               },
               {   title: "Pride & Prejudice",
                    author: "Jane Austen",
                    r: 51,
                    g: 77,
                    b: 0
               },
               {   title: "The Handmaid's Tale",
                    author: "Margaret Atwood", 
                    r: 204,
                    g: 0,
                    b: 0
               },
               {   title: "The Testaments",
                    author: "Margaret Atwood",
                    r: 0,
                    g: 40,
                    b: 77
               },
               {   title: "Looking for Alaska",
                    author: "John Green",
                    r: 255,
                    g: 255,
                    b: 255
               },
               {
                    title: "Little Women",
                    author: "Louisa Alcott",
                    r: 51,
                    g: 77,
                    b: 0
               },
               {
                    title: "Perks of Being a Wallflower",
                    author: "Stephen Chbosky",
                    r: 153,
                    g: 255,
                    b: 51
               },
               {
                    title: "My Own Words",
                    author: "Ruth Bader Ginsburg",
                    r: 134,
                    g: 45,
                    b: 45
               },
               {
                    title: "China Rich Girlfriend",
                    author: "Kevin Kwan",
                    r: 64,
                    g: 86,
                    b: 161
               },
               {
                    title: "Rich People Problems",
                    author: "Kevin Kwan",
                    r: 0,
                    g: 204,
                    b: 153
               },
               {
                    title: "Sharp Objects",
                    author: "Gillian Flynn",
                    r: 0,
                    g: 0,
                    b: 204
               },
               {
                    title: "Dark Places",
                    author: "Gillian Flynn",
                    r: 0,
                    g: 153,
                    b: 0
               },
               {
                    title: "Eleanor and Park",
                    author: "Rainbow Rowell",
                    r: 197,
                    g: 203,
                    b: 227
               },
               {
                    title: "The Scarlett Letter",
                    author: "Nathaniel Hawthorne",
                    r: 204,
                    g: 0,
                    b: 0
               },
               {
                    title: "Little Fires Everywhere",
                    author: "Celeste Ng",
                    r: 51,
                    g: 102,
                    b: 204
               },
               {
                    title: "Joy Luck Club",
                    author: "Amy Tan",
                    r: 204,
                    g: 0,
                    b: 0
               },
               {
                    title: "Harry Potter and the Sorcerer's Stone",
                    author: "J.K. Rowling",
                    r: 51,
                    g: 0,
                    b: 102
               },
               {
                    title: "Harry Potter and the Chamber of Secrets",
                    author: "J.K. Rowling",
                    r: 77,
                    g: 77,
                    b: 255
                   
               },
               {
                    title: "Harry Potter and the Prisoner of Azkaban",
                    author: "J.K. Rowling",
                    r: 0,
                    g: 77,
                    b: 77
               },
               {
                    title: "Harry Potter and the Goblet of Fire",
                    author: "J.K. Rowling",
                    r: 30,
                    g: 148,
                    b: 68
               },
               {
                    title: "Harry Potter and the Order of the Pheonix",
                    author: "J.K. Rowling",
                    r: 31,
                    g: 37,
                    b: 94
               },
               {
                    title: "Harry Potter and the Half Blood Prince",
                    author: "J.K. Rowling",
                    r: 17,
                    g: 97,
                    b: 17
               },
               {
                    title: "Harry Potter and the Deathly Hallows",
                    author: "J.K. Rowling",
                    r: 235,
                    g: 146,
                    b: 77
               },
               {
                    title: "Everything I Never Told You",
                    author: "Celeste Ng",
                    r: 0,
                    g: 40,
                    b: 77
               },
               {
                    title: "Harry Potter and Cursed Child Pt 1 & 2",
                    author: " ",
                    r: 252,
                    g: 186,
                    b: 3
               },
               {
                    title: "Where the Crawdads Sing",
                    author: "Delia Owens",
                    r: 227,
                    g: 128,
                    b: 95
               },
               {
                    title: "The Hobbit",
                    author: "J.R.R. Tolkien",
                    r: 227,
                    g: 212,
                    b: 207
               },
               {
                    title: "The Fellowship of the Ring",
                    author: "J.R.R. Tolkien",
                    r: 227,
                    g: 202,
                    b: 207
               }
               
          ];
          let width = 400;
          let height = (books.length * (books.length));
    
          sketch.setup = () => {
               sketch.createCanvas(width, height);
          };
  
          sketch.draw = () => {
          // draw shelf
               sketch.background(224, 240, 211);
               
               for(var yPosition =120 ; yPosition < (books.length*120) ; yPosition +=120) {
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
                         bookYStart +=120;
                         bookXStart -=380;
                    }
                    sketch.fill(book.r, book.g, book.b);
                    sketch.rect(bookXStart-5 + bookXSpacing, bookYStart, 90, 100);
                    sketch.fill(0, 0, 0);
                    sketch.text(book.title, bookXStart + bookXSpacing, bookYStart+9,  bookWidth, bookHeight);
                    sketch.text(book.author, bookXStart + bookXSpacing, bookYStart+70, bookWidth, bookHeight);
                    
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
                    <div ref={this.myRef} style={divStyle}>
                    </div>
                    <p className="project-info">
                         This project uses most of what I learned about JS in Khan Academy. 
                         I learned objects for this project and then used arrays, for loops, and if statments to build it.
                         Another project I've been working on is reading more. This bookshelf contains everything I've read since the start of the pandemic.
                         I will continue to add as I read!
                    </p>
               </div>
          );
     }
  }
  
  export default Bookshelf;