import React from 'react';
// if using webpack
// import 'medium-draft/lib/index.css';

import {
  Editor,
  createEditorState,
  renderHTML,
} from 'mddrcf';

import mediumDraftExporter from 'mddrcf/lib/exporter';
import 'medium-draft/lib/basic.css'


export default class Medium extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(), // for empty content
    };

    const editorState = this.state.editorState;

    /*
    this.state = {
      editorState: createEditorState(data), // with content
    };
    */

    this.onChange = (editorState) => {
      this.setState({ editorState });
      const renderedHTML = mediumDraftExporter(editorState.getCurrentContent());
      console.log(renderedHTML);
    };
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="medium-editor">
      <Editor
        ref="editor"
        editorState={editorState}
        onChange={this.onChange} />
      </div>
    );
  }
};
