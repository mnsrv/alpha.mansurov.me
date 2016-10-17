import React, { Component } from 'react';
import { Link } from 'react-router';
import NoteMenuItem from './NoteMenuItem';
import NoteItem from './NoteItem';
import WindowMenu from '../WindowMenu';

const NoteList = (props) =>
  <div className="window">
    <div className={`window__header${props.menuOpenned ? ' is-menu-openned' : ''}`}>
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
        <div className={`notes__full${props.menuOpenned ? ' is-hidden' : ''}`}>
          {props.activeNote ? <NoteItem note={props.activeNote} /> : ''}
        </div>
      </div>
    </div>
  </div>;

export default NoteList;
