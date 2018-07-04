import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import ShuffleQuote from "./ShuffleQuote";

class App extends React.Component
{
    // initial state
    state = {
        quote: {
            author: "adebiyi adedotun lukman", quote: "be like death, he doesn't procrastrinate"
        }
    };

    shuffleQuote = () =>
    {
        let newQuote;
        const endpoint = "https://talaikis.com/api/quotes/random/";

        fetch(endpoint)
            .then(blob => blob.json())
            .then(data =>
            {
                const { author, quote } = data;
                newQuote = { author, quote };
                this.setState({ quote: newQuote });
            });
    }

    render()
    {
        return (
            <div id="app">
                <Heading title="Perhaps, their words will ignite a spark in you." />
                <Quote newQuote={this.state.quote} />
                <ShuffleQuote shuffleQuote={this.shuffleQuote} />
            </div>
        )
    }
}

export default App;