import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NewsItems extends Component {
    
 

  render() {
    let { title, description,imageUrl,newsUrl,author,date } = this.props;
    return (
      <div className = "my-3">
        <div className="card">
          <img
            src= {imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toLocaleDateString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target ="_blank" className="btn btn-sm btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
