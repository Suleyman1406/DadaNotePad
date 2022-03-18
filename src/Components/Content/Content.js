import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, filterNotes, removeNote } from "../../redux/noteslice";
import { BsTrash } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Styles from "./Content.module.css";
import {
  TitleInput,
  NoteInput,
  NoteBody,
  NoteContainer,
  Note,
  NoteTitle,
  Container,
  SearchContainer,
  SearchInput,
  SaveButton,
  Color,
} from "./ContentStyled";

const Content = () => {
  const colorList = [
    "rgba(240, 98, 146)",
    "rgba(186, 104, 200)",
    "rgba(79,195,247)",
    "rgba(255, 213, 79)",
    "rgba(174, 213, 129)",
  ];
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");
  const notes = useSelector((state) => state.notes.value);
  const dispatch = useDispatch();
  const save = () => {
    if (title === "") alert("Please write note title");
    else if (note === "") alert("Please write note");
    else if (color === "") alert("Please select color");
    else {
      dispatch(
        addNote({
          title: title,
          note: note,
          color: color.substring(0, color.length - 1),
        })
      );
      setTitle("");
      setNote("");
      setColor("");
    }
  };
  useEffect(() => {
    dispatch(filterNotes(search));
  }, [search]);
  return (
    <>
      <TitleInput
        placeholder="Note Title"
        maxLength="22"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <NoteInput
        placeholder="Write note..."
        rows={8}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <br />
      <Container className="clearfix">
        {colorList.map((c, i) => (
          <Color key={i} color={c} onClick={() => setColor(c)}>
            <span
              style={{ fontSize: 18, display: color === c ? "inline" : "none" }}
            >
              ✓
            </span>
          </Color>
        ))}
        <SaveButton onClick={save}>Save ✓</SaveButton>
      </Container>
      <SearchContainer>
        <SearchInput
          placeholder="Write to search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearchAlt
          style={{ position: "absolute", right: 12, fontSize: 22, top: 7 }}
        />
      </SearchContainer>
      <NoteContainer>
        {notes.map((note) => (
          <Note key={note.id} color={note.color + ")"}>
            <NoteTitle color={note.color + ",0.4)"}>
              {note.title}
              <BsTrash
                className={Styles.deleteBtn}
                onClick={() => dispatch(removeNote(note.id))}
              />
            </NoteTitle>
            <NoteBody>{note.note}</NoteBody>
          </Note>
        ))}
      </NoteContainer>
    </>
  );
};

export default Content;
