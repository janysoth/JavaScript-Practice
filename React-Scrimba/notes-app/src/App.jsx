import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { onSnapshot, addDoc } from "firebase/firestore"
import { notesCollection } from "./firebase"

export default function App() {

  // When the app first loads, initialize the notes state
  // with the notes saved in localStorage.You'll need to
  // use JSON.parse() to turn the stringified array back
  // into a real JS array.
  // function () {
  //   return JSON.parse(localStorage.getItem("notes")) || []
  // }
  // () => JSON.parse(localStorage.getItem("notes")) || []
  const [notes, setNotes] = React.useState([])

  const [currentNoteId, setCurrentNoteId] = React.useState(
    // (notes[0] && notes[0].id) || ""
    notes[0]?.id || ""
  )

  const currentNote = notes.find(note => note.id === currentNoteId
  ) || notes[0]

  // Every time the `notes` array changes, save it 
  // in localStorage.You'll need to use JSON.stringify()
  // to turn the array into a string to save in localStorage.
  // React.useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes))
  // }, [notes])

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      // Sync up our local notes array with the snapshot data
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArr)
    })

    // Return the unsubscribe function to clean any side-effect
    return unsubscribe
  }, [])

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here"
    }
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
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
        if (oldNote.id === currentNoteId) {
          return { ...oldNote, body: text }
        }
        return oldNote
      })

      // Use the find function to get the recetly updated note
      // Then use the filter function to put the rest of notes back in order
      return [updateNotes.find(note => note.id === currentNoteId),
      ...updateNotes.filter(note => note.id !== currentNoteId)]
    })
  }

  function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
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
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={currentNote}
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
