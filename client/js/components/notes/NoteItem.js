import React from 'react';
import moment from 'moment';

const NoteItem = ({note}) =>
  <div className="notes__full-element">
    <p className="notes__full-date">{moment(note.publishedDate).locale('ru').format('DD MMMM YYYY')}</p>
    <p className="notes__full-title">{note.title}</p>
    <div className="notes__full-text" dangerouslySetInnerHTML={{__html: note.content}} />
  </div>;

export default NoteItem;
