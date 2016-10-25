import React from 'react';
import Draggable from 'react-draggable';
import NoteMenuItem from './NoteMenuItem';
import NoteItem from './NoteItem';
import WindowMenu from '../WindowMenu';

const NoteList = (props) =>
  <Draggable
    handle=".window__header"
    bounds="body"
  >
    <div className="window">
      <div className={`window__header${props.menuOpened ? ' is-menu-opened' : ''}`}>
        <div className="window__circles">
          <div className="window__circle window__circle_red"></div>
          <div className="window__circle window__circle_yellow"></div>
          <div className="window__circle window__circle_green"></div>
        </div>
        <WindowMenu />
        <p className="window__title" onClick={props.showMenu}>Заметки</p>
      </div>
      <div className="window__body">
        <div className="notes">
          <div className="notes__list">
            {props.notes.map(note =>
              <NoteMenuItem
                key={note._id}
                note={note}
                onClick={props.onNoteClick}
                activeSlug={props.activeNote ? props.activeNote.slug : null }
              />
            )}
          </div>
          <div className={`notes__full${props.menuOpened ? ' is-hidden' : ''}`}>
            {props.activeNote ? <NoteItem note={props.activeNote} /> : ''}
          </div>
        </div>
      </div>
    </div>
  </Draggable>;

export default NoteList;
