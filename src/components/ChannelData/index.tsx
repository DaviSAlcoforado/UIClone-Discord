import React, {useRef, useEffect} from 'react';
import ChannelMessages, {Mention} from '../ChannelMessages';
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';


const ChannelData : React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    } 
  }, [messagesRef])
  return (
    <Container>
      <Messages ref = {messagesRef}>
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "Daví Silva"
          date = "29/09/2021"
          content = "Hoje é meu aniversário!"
        />
        <ChannelMessages 
          author = "David Mangueira"
          date = "29/09/2021"
          content = {
            <>
            <Mention>@Daví Silva</Mention>, me carrega no FIFA e no Rocket de novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type = "text" placeholder= "Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;