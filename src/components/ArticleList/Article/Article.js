import React, {Component} from 'react'
import Moment from 'react-moment';
import classNames from 'classnames';
import shave from 'shave';

import './Article.scss';
import TestimonialList from '../../TestimonialList';

class Article extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isCommentsOpen: false
    }
  }

  componentDidMount() {
    shave(this.text, 50);
  }

  render(){
    const {article} = this.props;
    let articleClass = classNames({
      'yb-article': true,
      'opened': this.state.isOpen
    });

    return (
      <article className={articleClass}>
        <Moment format="DD MMM YYYY" date={article.date} />
        <h2>
          {article.title}
          <button className="yb-article__btn" onClick={this.toggleArticle}>
            {this.state.isOpen ? 'hide article' : 'show article'}
          </button>
        </h2>
        <p ref={(node) => { this.text = node; }} className="yb-article__text">{article.text}</p>
        {
          this.state.isOpen &&
          <TestimonialList comments={article.comments} isCommentsOpen={this.state.isCommentsOpen}/>
        }
      </article>
    )
  }

  toggleArticle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isCommentsOpen: this.state.isOpen ? this.state.isCommentsOpen : false
    })
  }
}
export default Article