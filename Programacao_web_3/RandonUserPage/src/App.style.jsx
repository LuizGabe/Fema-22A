import styled from 'styled-components'

const Box = styled.div`

  width: 400px;
  height: 400px;

  background: lightblue;

  border: 2px solid blueviolet;
  border-radius:10px;

  p {
  font-size: 50px;
  color: purple
}

  button {
    padding: 15px;

    border: 0;
    border-radius: 8px;

    background-color: #123456;
    color: white;

    cursor: pointer;

    &:hover{
      background: white;
      color: black;
    }
    &:hover {
      border: red 2px solid;
    }
  }
`

export { Box }
