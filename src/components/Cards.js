import { Component } from "react";

export default class Cards extends Component {
    data(){

    }

    render() {
        return(
            <div className="bg-card">
                <a href={this.props.url} className="top-card">
                    <div className="left-top-card">
                        <div>{this.props.source}</div>
                        <div>{this.props.title}</div>
                        <div>{this.props.description}</div>
                    </div>
                    <div className="right-top-card">
                        <img src={this.props.urlToImage}/>
                    </div>
                </a>
                <div className="bottom-card">{this.props.author} • {this.props.publishedAt}</div>
            </div>
        ) 
    }
}