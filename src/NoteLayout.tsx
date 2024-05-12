/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { Note } from './App';

type NoteLayoutProps = {
    notes: Note[];
};

function NoteLayout({ notes }: NoteLayoutProps) {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);

    if (!note) {
        alert("Note with the given ID doesn't exist");
        return <Navigate to='/' replace />;
    }

    return (
        <div>
            <Outlet context={note} />
        </div>
    );
}

export function useNote() {
    return useOutletContext<Note>()
}

export default NoteLayout;
