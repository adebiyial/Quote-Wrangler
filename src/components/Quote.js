import React from 'react'


class Quote extends React.Component
{
    render()
    {
        return (
            <article className="quote-wrap">
                <span className="author" >{this.props.newQuote.author}</span>
                <p className="quote" defaultValue="be like death, he doesn't procrastinate">{this.props.newQuote.quote} </p>
            </article>
        )
    }
}

export default Quote;
