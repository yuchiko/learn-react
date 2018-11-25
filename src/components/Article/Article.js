import React, {Component} from 'react'
import Moment from 'react-moment';
import Testimonial from '../Testimonial'
import './Article.scss';

class Article extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render(){
    const {article} = this.props;

    return (
      <article className="yb-article">
        <Moment format="DD MMM YYYY" date={article.date} />
        <h2>
          {article.title}
          <button className="yb-article__btn" onClick={this.showArticle}>
            {this.state.isOpen ? 'hide article' : 'show article'}
          </button>
        </h2>
        {this.state.isOpen &&
          <div>
            <div>{article.text}</div>
            <Testimonial/>
          </div>
        }
      </article>
    )
  }

  showArticle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
export default Article