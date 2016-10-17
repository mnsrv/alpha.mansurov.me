import React, { PropTypes, Component } from 'react';
import NoteList from './NoteList';

class NoteListContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      notes: [],
      activeNote: null,
      menuOpenned: true,
    };
    this.handlePostClick = this.handlePostClick.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('/api/notes')
      .then(res => res.json())
      .then(json => {
        this.setState({ notes: json.notes });
        this.setActiveNote(this.props.params.slug);
    });
  }

  handlePostClick(slug) {
    this.setActiveNote(slug);
  }

  setActiveNote(slug) {
    const activeNote = slug
      ? this.state.notes.filter(note => note.slug == slug)[0]
      : this.state.notes[0];
    if (slug) {
      this.setState({ menuOpenned: false });
    }
    this.setState({ activeNote: activeNote });
  }

  showMenu() {
    this.setState({ menuOpenned: true })
  }

  render() {
    return (
      <NoteList
        notes={this.state.notes}
        activeNote={this.state.activeNote}
        onNoteClick={this.handlePostClick}
        showMenu={this.showMenu}
        menuOpenned={this.state.menuOpenned}
      />
    );
  }
}

NoteListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NoteListContainer;
