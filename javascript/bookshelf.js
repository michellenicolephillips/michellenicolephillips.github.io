let bookshelf = new p5(( sketch ) => {
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
        {   r: 201,
            g: 255,
            b: 219
        },
        {   r: 155,
            g: 155,
            b: 219
        },
        {   r: 230,
            g: 138,
            b: 247
        },
        {   r: 242,
            g: 186,
            b: 119
        },
        {
            r: 236,
            g: 240,
            b: 120
        },
        {
            r: 108,
            g: 157,
            b: 185
        }
    ];
    
    sketch.setup = () => {
      sketch.createCanvas(width, height);
      star = sketch.loadImage('pictures/Star.png');
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
    }, 'bookshelf');