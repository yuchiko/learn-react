import React from 'react'
import Article from './Article'
import uuid from "uuid/v4";
import isArrayValid from "../../utils/isArrayValid";

const ArticleList = ({articles}) => (
  isArrayValid(articles) && articles.map(article =>
    <Article key={uuid()} article={article}/>
  )
)

export default ArticleList