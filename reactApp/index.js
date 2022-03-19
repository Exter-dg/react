import Header from "./Header"

// function MainComponent() {
//     return (
//         <div>
//             <h1>Hello from Main</h1>
//             <p>This is a para</p>
//         </div>
//     )
// }


// ReactDOM.render(<div> <MainComponent /> </div>,
//     document.getElementById("root"));

// const element = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// // document.getElementById("root").append(JSON.stringify(element));
// ReactDOM.render(element, document.getElementById("root"));

// const element = (
//     <div>
//         <img src="./react-icon.png" width="40px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(element, document.getElementById("root"));



function MainContent() {
    return (
        <div>
            <h1>React</h1>
            <ul>
                <li>Hello World</li>
                <li>I love learning new things</li>
                <li>I don't know what to type lol</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2022 Parth Kapadia. All rights reserved</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            {/* <Header /> */}
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(
    <Page />,
    document.getElementById("root")
);
