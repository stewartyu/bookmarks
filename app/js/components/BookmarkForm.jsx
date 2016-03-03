import React from 'react';
import { connect } from 'react-redux';

import { addBookmark, updateBookmark } from '../actions';

let BookmarkForm = ({ dispatch, isEditing, text, id, tags }) => {
  let input, tagsInput;

  let onAddBookmark = () => {
    dispatch(addBookmark(input.value, tagsInput.value));
    input.value = '';
    tagsInput.value = '';
  };

  let onUpdateBookmark = () => {
    dispatch(updateBookmark(id, input.value, tagsInput.value));
    input.value = '';
    tagsInput.value = '';
  };

  let onClickHandler = isEditing ? onUpdateBookmark : onAddBookmark;

  return (
    <div className="bookmark-form">
      <input className="bookmark-form__input" ref={node => {
        input = node;
      }} defaultValue={text} placeholder="Bookmark URL" />
      <span className="bookmark-form__tags-container">Tags: <input className="bookmark-form__tags-input" ref={node => {
        tagsInput = node;
      }} defaultValue={tags} placeholder="Comma separated" /></span>
      <button className="bookmark-form__save" onClick={onClickHandler}>
        Save
      </button>
    </div>
  );
};
export default connect()(BookmarkForm);
