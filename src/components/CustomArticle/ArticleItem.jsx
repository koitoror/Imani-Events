import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import moment from 'moment';
// import parse from 'html-react-parser';
import classNames from 'classnames';

// import { Placeholder } from 'semantic-ui-react';
import CircularSocial from '../SocialShareLinks/SocialShareLinks';
// import {
//   bookmarkArticle,
//   removeBookmark,
// } from '../../actions/bookmarksActions';
import isEmpty from '../../utils/is_empty';

export class ArticleItem extends Component {
  handleBookmark = (e, slug) => {
    e.preventDefault();
    this.props.bookmarkArticle(slug);
  };

  handleUnBookmark = (e, id) => {
    e.preventDefault();
    this.props.removeBookmark(id);
  };

  render() {
    const {
      article, authenticated, bookmarks, 
      // loading,
    } = this.props;

    const imgRegex = /<img[^>]+src="(http:\/\/[^">]+)"/g;
    const src = imgRegex.exec(article.body);
    const imgSrc = _.isEmpty(src) ? '' : src[1];

    const bookmarked = bookmarks.filter(bookmark => bookmark.article.slug === article.slug);

    return (
      <article className={classNames({
        post: true,
        post_item: true,
        no_image: _.isEmpty(imgSrc),
      })}
      >
        <div className="post-container">
          <div className="post-categories-container">
            <div className="post-categories">
              {article.tags.map((tag, index) => (
                <Link to="#" key={index} className="post-tags-item post-tags-item-title">
                  #
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <h2 className="post-title">
            <a
              href={`/article/${article.slug}`}
            >
              {article.title}
            </a>
            <span
              className={classNames({ 'post-read-later': true, 'post-read-later-guest': authenticated })}
              onClick={e => (isEmpty(bookmarked) ? this.handleBookmark(e, article.slug) : this.handleUnBookmark(e, bookmarked[0].id))}
            >
              <i
                className={classNames({
                  'fa fa-bookmark-o': isEmpty(bookmarked),
                  'fa fa-bookmark': !isEmpty(bookmarked),
                })}
                aria-hidden="true"
              />
            </span>
          </h2>
          <div className="post-meta">
            <div className="post-meta-content">
              <span className="post-author-date">
                <span>
                  <Link
                    to={`/profile/${article.author.username}`}
                    className="post-author"
                  >
                    {article.author.username}
                  </Link>
                </span>
                ,&nbsp;
                <Link to="#" className="post-date">
                  {/* {moment(article.created_at).format('MMM Do YY')} */}
                  {' '}
                </Link>
              </span>
              <Link to="#" className="post-comments">
                <i className="fa fa-heart-o"/>
                {article.likes}
              </Link>
              <span className="post-readtime">
                <i className="fa fa-clock-o"/>
                {article.read_time}
              </span>
            </div>
          </div>
          {_.isEmpty(imgSrc) ? '' : (
            <div className="post-thumbnail">
              <img
                width="1200"
                height="300"
                src={imgSrc}
                alt=""
              />
              <a href={`/article/${article.slug}`} className="post-overlay">
                <div className="post-overlay-content">
                  <span/>
                  <span/>
                  <span/>
                </div>
              </a>
            </div>
          )}
          <div className="articles-draft-tab-content-item__content">
            <a href={`/article/${article.slug}`}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 400 }}>{article.description}</h3>
            </a>
          </div>
          <div className="post-readmore sh-table">
            <div className="sh-table-cell post-readmore-text">
              <a href={`/article/${article.slug}`}>
                <h6>Read more</h6>
              </a>
            </div>
            <div className="sh-table-cell post-readmore-line">
              <div className="post-readmore-line-content"/>
            </div>
            <div className="sh-table-cell">
              <div
                className="post-content-share post-content-share-side jssocials"
              >
                <div className="jssocials-shares">
                  <CircularSocial size="large" shareLinks={article.share_links}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

ArticleItem.defaultProps = {
  article: {},
  bookmarks: [],
  authenticated: false,
  loading: false,
};


ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired,
  authenticated: PropTypes.bool,
  loading: PropTypes.bool,
  bookmarkArticle: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
};

// export default connect(null, { bookmarkArticle, removeBookmark })(ArticleItem);

export default ArticleItem;
