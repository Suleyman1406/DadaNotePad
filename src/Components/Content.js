import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNote, filterNotes, removeNote } from "../redux/noteslice";
import { BsTrash } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
const TitleInput = styled.input`
  width: 30%;
  padding: 10px;
  border: 1px solid #7e57c2;
  outline-color: #512da8;
  border-radius: 7px;
  @media only screen and (max-width: 1400px) {
    width: 40%;
  }
  @media only screen and (max-width: 1100px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
const NoteInput = styled.textarea`
  width: 30%;
  padding: 10px;
  margin-top: 25px;
  border: 1px solid #7e57c2;
  outline-color: #512da8;
  border-radius: 7px;
  @media only screen and (max-width: 1400px) {
    width: 40%;
  }
  @media only screen and (max-width: 1100px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Container = styled.div`
  width: 30%;
  margin: 10px auto;
  text-align: left;
  @media only screen and (max-width: 1400px) {
    width: 40%;
  }
  @media only screen and (max-width: 1100px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Color = styled.div`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.7;
  }
  @media only screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transform: translateY(3px);
  }
  @media only screen and (max-width: 400px) {
    width: 25px;
    height: 25px;
    margin-right: 7px;
    transform: translateY(5px);
  }
`;
const SaveButton = styled.button`
  float: right;
  padding: 10px 15px;
  background-color: #7e57c2;
  border-radius: 10px;
  border: 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  font-weight: 500;
  color: white;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    opacity: 0.9;
  }
`;
const NoteContainer = styled.div`
  width: 70%;
  height: fit-content;
  margin: 20px auto;
  @media only screen and (max-width: 1400px) {
    width: 75%;
  }
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
  @media only screen and (max-width: 850px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Note = styled.div`
  width: 300px;
  height: 350px;
  display: inline-block;
  border-radius: 15px;
  border: 2px dashed ${(props) => props.color};
  margin: 20px;

  @media only screen and (max-width: 850px) {
    width: 280px;
    height: 320px;
    margin: 15px;
  }
  @media only screen and (max-width: 600px) {
    width: 260px;
    height: 300px;
    margin: 10px;
  }
  @media only screen and (max-width: 400px) {
    width: 240px;
    height: 280px;
    margin: 10px 0px;
  }
`;
const NoteTitle = styled.h4`
  margin: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => props.color};
  text-align: left;
  padding: 10px;
  position: relative;

  @media only screen and (max-width: 850px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
`;
const NoteBody = styled.p`
  padding: 10px;
  height: 76%;
  text-align: left;
  margin: 0;
  overflow: auto;
  font-size: 14px;
  @media only screen and (max-width: 850px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  width: 32%;
  margin: 25px auto;
  @media only screen and (max-width: 1400px) {
    width: 42%;
  }
  @media only screen and (max-width: 1100px) {
    width: 52%;
  }
  @media only screen and (max-width: 850px) {
    width: 72%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  border: 1px solid #7e57c2;
  outline-color: #512da8;
  border-radius: 7px;
`;

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
        {notes.map((note) => {
          return (
            <Note key={note.id} color={note.color + ")"}>
              <NoteTitle color={note.color + ",0.4)"}>
                {note.title}
                <BsTrash
                  style={{
                    position: "absolute",
                    top: 11,
                    right: 10,
                    fontSize: 20,
                  }}
                  onClick={() => dispatch(removeNote(note.id))}
                />
              </NoteTitle>
              <NoteBody>{note.note}</NoteBody>
            </Note>
          );
        })}
      </NoteContainer>
    </>
  );
};

export default Content;
