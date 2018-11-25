import React, {Component, Fragment} from 'react'
import Testimonial from './Testimonial'
import uuid from "uuid/v4";
import isArrayValid from "../../utils/isArrayValid";

class TestimonialList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCommentsOpen: this.props.isCommentsOpen
    }
  }
  render() {
    const {comments} = this.props;
    const commentElements = isArrayValid(comments) && comments.map(comment => {
      let id = uuid()
      return (
        <li key={id}><Testimonial comment={comment}/></li>
      )
    }

    );

    return (
      <div className="yb-article__comments">
        Comments ({isArrayValid(comments) ? comments.length : 'no comments'})
        {isArrayValid(comments) &&
          <Fragment>
            <button
              className="yb-article__btn"
              onClick={this.toggleComments}
            >
              {this.state.isCommentsOpen ? 'hide comments' : 'show comments'}
            </button>
            {this.state.isCommentsOpen &&
              <ul>
                {commentElements}
              </ul>
            }
          </Fragment>
        }
      </div>
    )
  }

  toggleComments = () => {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen
    })
  }
}

export default TestimonialList