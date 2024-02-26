import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({context}){
     const {rooms,loading,sortedRooms}=context;

    if(loading){
         return <Loading></Loading>
    }
    return (
        <div>
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </div>
    );
}
export default withRoomConsumer(RoomContainer);

