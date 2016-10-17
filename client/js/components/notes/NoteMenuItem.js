import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const NoteMenuItem = ({note, onClick, activeSlug}) =>
  <Link
    onClick={onClick.bind(null, note.slug)}
    to={`/notes/${note.slug}`}
    className={`notes__list-element js-note${note.slug == activeSlug ? ' is-active' : ''}`}
  >
    <p className="notes__list-title">{ note.title }</p>
    <p className="notes__list-date">{ moment(note.publishedDate).locale('ru').format('DD MMMM YYYY') }</p>
  </Link>;

export default NoteMenuItem;
