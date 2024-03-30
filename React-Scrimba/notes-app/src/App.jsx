import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./assets/data"
import Split from "react-split"
import { nanoid } from "nanoid"

export default function App() {

  // When the app first loads, initialize the notes state
  // with the notes saved in localStorage.You'll need to
  // use JSON.parse() to turn the stringified array back
  // into a real JS array.
  const [notes, setNotes] = React.useState(
    // function () {
    //   return JSON.parse(localStorage.getItem("notes")) || []
    // }
    () => JSON.parse(localStorage.getItem("notes")) || []
  )

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )
    

  // Every time the `notes` array changes, save it 
  // in localStorage.You'll need to use JSON.stringify()
  // to turn the array into a string to save in localStorage.
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  /** Long Version of updateNote Function
  function updateNote(text) {
    // To put the most recently-modified notes at the top
    setNotes(oldNotes => {
      // Create a new empty array
      const newNoteArray = []
      // Loop over the original array 
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i]
        if(oldNote.id === currentNoteId) {
          newNoteArray.unshift({
            ...oldNote, body: text
          })
        } else {
          newNoteArray.push(oldNote)
        }
      }
      return newNoteArray
    })
  }
  -----------------*/

  // Short Version of updateNote Function
  function updateNote(text) {
    setNotes(oldNotes => {
      const updateNotes = oldNotes.map(oldNote => {
        if(oldNote.id === currentNoteId) {
          return {...oldNote, body: text}
        }
        return oldNote
      })
      
      // Use the find function to get the recetly updated note
      // Then use the filter function to put the rest of notes back in order
      return [updateNotes.find(note => note.id === currentNoteId), 
        ...updateNotes.filter(note => note.id !== currentNoteId)]
    })
  }

  function deleteNote(event, noteId){
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }
  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
