import React, { Component } from 'react'
import EmailEditor from 'react-email-editor'
import './Create.css'

class Create extends Component {
  render() {
    return (
      <div className="create">
        <EmailEditor
          ref={editor => this.editor = editor}
          projectId={1487}
          templateId={4259}
        />
      </div>
    )
  }
}

export default Create
