import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
    background: 'black',
    headerBgColor: 'crimson',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
    width : '10%',
};


const ChatBotComponent = () => (
            <ThemeProvider theme={theme}>
                <ChatBot steps={[
                    {
                        id: '1',
                        message: 'Would you like to hear a joke?',
                        trigger: '2',
                    },
                    {
                        id : '2',
                        options : [
                            {value : 1 , label : 'Yes' , trigger : '3'},
                            {value: 2 , label : 'No' , trigger: '8'}
                        ]
                    },
                    {
                        id : '3',
                        message: 'Please select a joke',
                        trigger: '4'
                    },
                    {
                        id: '4',
                        options: [
                            { value: 1, label: 'Pick me !', trigger: '5' },
                            { value: 2, label: 'Pick me !', trigger: '6' },
                            { value: 3, label: 'Pick me !', trigger: '7' },
                        ],
                    },
                    {
                        id : '5',
                        message: 'Chuck Norris can take a screenshot of his blue screen of death',
                        trigger: '1'
                    },
                    {
                        id : '6',
                        message: 'A good programmer is someone who looks both ways before crossing a one-way street',
                        trigger: '1'
                    },
                    {
                        id: '7',
                        message: 'Programmer (noun): A person who fixed a problem that you don’t know you have, in a way you don’t understand',
                        trigger: '1'
                    },
                    {
                        id : '8',
                        message: 'Type something to hear a joke',
                        trigger: '9'
                    },
                    {
                        id : '9',
                        user : true,
                        trigger: '1'
                    }

                ]} floating={true} headerTitle={'Chat Bot'}/>
            </ThemeProvider>
)


export default ChatBotComponent