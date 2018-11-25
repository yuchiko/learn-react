import React, {Component} from 'react'
import Moment from 'react-moment';
import Testimonial from '../Testimonial'
import './Article.scss';

class Article extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isCommentsOpen: false
    }
  }

  render(){
    const {article} = this.props;

    return (
      <article className="yb-article">
        <Moment format="DD MMM YYYY" date={article.date} />
        <h2>
          {article.title}
          <button className="yb-article__btn" onClick={this.toggleArticle}>
            {this.state.isOpen ? 'hide article' : 'show article'}
          </button>
        </h2>
        {
          this.state.isOpen &&
          <div>
            <p>{article.text}</p>
            <div className="yb-article__comments">
              Comments ({article.comments.length})
              <button
                className="yb-article__btn"
                onClick={this.toggleComments}
              >
                {this.state.isCommentsOpen ? 'hide comments' : 'show comments'}
              </button>
              {
                this.state.isCommentsOpen &&
                <ul>
                  <Testimonial/>
                </ul>
              }
            </div>
          </div>
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

  toggleComments = () => {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen
    })
  }
}
export default Article