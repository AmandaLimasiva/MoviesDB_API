import styled from "styled-components";

export const Container = styled.div`

padding: 4rem 0;


h1{
  margin: 3rem 0;
}

.movie{
  display: flex;
  align-items: center;
  justify-content: center;
}

img{
  width: 350px;
  border-radius: 1rem;
}

.details{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6rem;
  max-width: 50%;
}

button{
  background-color: #F08080;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: #fff;
  padding: 0.6rem 1.2rem;
  margin-top: 2rem;
  font-size: 100%;
  transition: all .3s;
}


button:hover{
  background-color: #CD5C5C;
}

span{
  line-height:130%
  margin-button:1rem;
  font-size:100%;
}

.release-date {
  font-size: 100%;
  opacity: 0.5;
  margin-top: 1rem;
}

`
