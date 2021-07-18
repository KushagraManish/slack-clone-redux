import React from 'react'
import styled from 'styled-components'
import { Create, FiberManualRecord, InsertComment } from '@material-ui/icons'

import SidebarOption from "./SidebarOption";

import { Inbox } from '@material-ui/icons';
import { Drafts } from '@material-ui/icons';
import { BookmarkBorderSharp } from '@material-ui/icons';
import { PeopleAltSharp } from '@material-ui/icons';
import { Apps } from '@material-ui/icons';
import { FileCopy } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import { Add } from '@material-ui/icons';
import { db } from '../firebase';
import {useCollection} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase';



function Sidebar() {


    const [user] = useAuthState(auth);
    // eslint-disable-next-line
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    
    return (
        <SidebarContainer  style = {{overflowY: "scroll" }}>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>KUSHAGRA'S SLACK</h2>
                    <h3>
                        <FiberManualRecord/>
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>

             <SidebarOption Icon={InsertComment} title="Threads" />
             <SidebarOption Icon={Inbox} title="Mentions" />
             <SidebarOption Icon={Drafts} title="Saved items" />
             <SidebarOption Icon={BookmarkBorderSharp} title="Channel browser" />
             <SidebarOption Icon={PeopleAltSharp} title="People" />
             <SidebarOption Icon={Apps} title="Apps" />
             <SidebarOption Icon={FileCopy} title="File browser" />
             <SidebarOption Icon={ExpandLess} title="Show less" />
                <hr />

              <SidebarOption Icon={ExpandMore} title="Channels" />
              <hr />
              <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
            
            

            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} title={doc.data().name} id={doc.id}/>

            
            ))}
                
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`

    background-color:var(--slack-color);
    color:white;
    flex:0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    >hr{
        margin-top:10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }


`;
const SidebarHeader = styled.div`

    display:flex;
    border-top: 1px solid #49274b;
    padding: 13px;

    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size:18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex:1;

    >h2{
        font-size:15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3{
        display:flex;
        font-size:15px;
        font-weight: 400;
        align-items:center;
    }

    >h3 >.MuiSvgIcon-root{
        font-size: 14px;
        margin-bottom: 1px;
        margin-right: 2px;
        color:green;
    }


`;
