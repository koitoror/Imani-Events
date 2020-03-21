import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import CircularSocial from '../SocialShareLinks/SocialShareLinks';
// import parse from 'html-react-parser';

const SearchItem = ({ article }) => (
  <article className="post post_item">
    <div className="post-container">
      <div className="post-categories-container">
        <div className="post-categories">
          {article.tags.map((tag, index) => <Link to="#" key={index} className="post-tags-item post-tags-item-title">
          #{tag}</Link>)}
        </div>
      </div>
      <a
        href={`/article/${article.slug}`}
        className="post-title"
      >
        <h2>
          {article.title}
          <span
            className="post-read-later post-read-later-guest"
            href="#"
            data-type="add"
            data-id="67"
          >
            <i className="fa fa-bookmark-o" aria-hidden="true" />
          </span>
        </h2>
      </a>
      <div className="post-meta">
        <div className="post-meta-content">
          <span className="post-author-date">
            <span>
              <Link to="#" className="post-author">{article.author.username}</Link>
            </span>
            ,&nbsp;
            {/* <Link to="#" className="post-date">{moment(article.created_at).format('MMM Do YY')}  </Link> */}
          </span>
          <Link to="#" className="post-comments">
            <i className="fa fa-heart-o" />
            {article.likes}
          </Link>
          <span className="post-readtime">
            <i className="fa fa-clock-o" />
            {article.read_time}
          </span>
          <span className="responsive-post-read-later">
            &nbsp;
            <span
              className="post-read-later post-read-later-guest tooltipstered"
              href="#"
            >
              <i className="fa fa-bookmark-o" />
            </span>
          </span>
        </div>
      </div>
      <div className="post-thumbnail">
        <a href={`/article/${article.slug}`} className="post-overlay">
          <div className="post-overlay-content">
          </div>
        </a>
      </div>
      <div className="post-content-container">
        <div className="post-content">
          <p>
            {/* {parse(article.description)} */}
          </p>
        </div>
      </div>
      <div className="post-readmore sh-table">
        <div className="sh-table-cell post-readmore-text">
          <a href={`/article/${article.slug}`}>
            <h6>Read more</h6>
          </a>
        </div>
        <div className="sh-table-cell post-readmore-line">
          <div className="post-readmore-line-content" />
        </div>
        <div className="sh-table-cell">
          <div
            className="post-content-share post-content-share-side jssocials"
          >
            <div className="jssocials-shares">
              <CircularSocial size="large" shareLinks={article.share_links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

SearchItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SearchItem;
