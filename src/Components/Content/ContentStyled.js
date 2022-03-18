import styled from "styled-components";

export const TitleInput = styled.input`
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
export const NoteInput = styled.textarea`
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
export const Container = styled.div`
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

export const Color = styled.div`
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
export const SaveButton = styled.button`
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
export const NoteContainer = styled.div`
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
export const Note = styled.div`
  width: 300px;
  height: 350px;
  display: inline-block;
  border-radius: 15px;
  border: 2px dashed ${(props) => props.color};
  margin: 20px 20px 10px;

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
export const NoteTitle = styled.h4`
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
export const NoteBody = styled.p`
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
export const SearchContainer = styled.div`
  position: relative;
  width: 32%;
  margin: 20px auto 5px;
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
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  border: 1px solid #7e57c2;
  outline-color: #512da8;
  border-radius: 7px;
`;
