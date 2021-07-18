import { InfoOutlined, StarBorderOutlined} from '@material-ui/icons';
import React, { useEffect, useRef } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { db } from '../firebase';
import Message from './Message';

function Chat() {


    const chatRef = useRef("null");

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useCollection(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

    
    useEffect(() => {
        chatRef?.current?.scrollIntoView();
    }, [roomId, loading])
    

   

    
    return (
                
                <>
                    <ChatContainer   style= {{overflowY: "scroll"}} >
                        
                        <Header>
                            <HeaderLeft>
                                <h4><strong>{`#${roomDetails?  roomDetails.data().name : 'No channel Selected'} `}</strong></h4>
                            <StarBorderOutlined></StarBorderOutlined>


                            </HeaderLeft>

                            <HeaderRight>
                                <InfoOutlined/> Details
                            </HeaderRight>
                        </Header>

                    <ChatMessages  >
                        {roomMessages?.docs.map((doc) => {
                    const { message, timestamp, user, userImage } = doc.data();

                    return (
                        <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    );
                        })}
                            <ChatBottom ref={ chatRef}/>
                    </ChatMessages>

                        <ChatInput chatRef = {chatRef} channelId={roomId} channelName={roomDetails?.data().name}/>
                    
                    </ChatContainer>

                    
                </>
            )
}

export default Chat


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 8px;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
 
  margin-top: 60px;
  
`;

const ChatBottom = styled.div`

  padding-bottom: 200px;
`;

const ChatMessages = styled.div``;
