import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


// componentin react
// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// const Greeting2 = () => {
//     return React.createElement("h2", {}, "My Second Component");
// };


// JSX
// function Greeting() {
//     return (
//         <div>
//             < h2 > My First Component</h2 >
//             <h1>hello</h1>
//             <Greeting2/>
//         </div>
//     );
      
// }

// const Greeting2 = () => {
//     return (
//         <div>
//             < h2 > My Second Component</h2 >
//             <h1>hello</h1>
//         </div>
//     );
// }

// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);




const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
            <div>
                {}
            </div>
        </article>
    );
};

const Image = () => {
    return (
        <img
            src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg"
            alt=""
        />
    );
};

const Title = () => {
    return <h1>Ikigai: The Japanese secret to a long and happy life</h1>;
};

const Author = () => {
    return <h4>Héctor García</h4>;
};




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);