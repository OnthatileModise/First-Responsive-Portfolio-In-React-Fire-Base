import ChatBot , { Loading } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

const theme = {
    background: 'black',
    headerBgColor: 'crimson',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
    width : '50%',
    headerSize : '350px',
};



class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            response : 'Test',
            loading: true,
            trigger: false,
        };
    }



    componentDidMount() {
        const { steps } = this.props;
        const { text } = steps;
        const { self } = this;

        this.setState({ text , self });
    }

    triggerNext() {
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep();
        });
    }


    render() {
        const { text , response , loading } = this.state;
        const { GoogleGenerativeAI } = require("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const getResponse = async (prompt) => {
        const res = await model.generateContent(prompt);
                return res?.response?.text();
        }

        if (text.value && loading) {
            getResponse(text?.message).then((res) => {
                this.setState({ loading: false, response: res.replaceAll('**' , '').replaceAll('*' , '')})
                if (res){
                    this.triggerNext()
                }
                const currentDate = new Date();
                console.log(currentDate.toString()); // Local time
                console.log(currentDate.toUTCString()); // UTC time
            }).catch((err) => {
                console.error(err)
                this.setState({ loading: false, response: 'No results found' });
            });
        }

        return (
            <div style={{ width: '100%' }}>
                { loading ? <Loading /> : response }
                {!loading &&
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                        }}>

                    </div>
                }
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};

Review.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
};


class ChatBotComponent extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'Hi , I am a large language model, trained by Google. Would you like to ask a question?',
                            trigger: 'text',
                        },
                        {
                            id: 'text',
                            user: true,
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            waitAction: true,
                            trigger: '2',
                        },
                        {
                            id : '2',
                            message: 'Would you like to ask another question?',
                            trigger: 'text'
                        }
                    ]} floating={true} headerTitle={'Chat Bot'}
                />
            </ThemeProvider>
        );
    }
}



export default ChatBotComponent