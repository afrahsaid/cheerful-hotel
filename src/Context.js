import React, {Component, createContext} from "react";
// import items from './data'
import Client from "./Contentful";
// const response = await Client.getEntries()
// console.log(response.items)
// Client.getEntries().then(response=>console.log(response.items));


const RoomContext = React.createContext();
class RoomProvider extends Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false

    };
    //getData
    getData =async ()=>{
        try{
           let response = await Client.getEntries({        
             content_type:"cheerfulHotel",
             order: "sys.createdAt"
            //  order: "-fields.price"
        });
            // .then(response=>console.log(response.items));
            let rooms= this.formatData(response.items);
            let featuredRooms=rooms.filter((room)=>room.featured ===true);
            let maxPrice=Math.max(...rooms.map(item=>item.price));
            let maxSize=Math.max(...rooms.map(item=>item.size));
            this.setState({rooms,featuredRooms,sortedRooms:rooms,loading:false,maxPrice,price:maxPrice,maxSize});

        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();      
    }
     formatData=(items)=>{
        let tempItems=items.map((item)=>{
            let id=item.sys.id;
            let images=item.fields.images.map((image)=>{return image.fields.file.url;});
            let room={...item.fields,images:images,id};
            return room;
        });
        return tempItems;

    }
    getRoom=(slug)=>{
        let tempRooms=[...this.state.rooms];
        const room=tempRooms.find(room => room.slug === slug);
        return room;
    };
    handleChange=(event)=>{
        const target=event.target;
        const value=target.type === 'checkbox' ? target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        },this.filterRooms)
    }
    filterRooms=()=>{
        let { rooms,type,
            sortedRooms,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets}=this.state;

            let tempRooms=[...rooms];
            capacity=parseInt(capacity);
            price=parseInt(price);
        //Filter by Room type
        if(type !== "all"){
          tempRooms= tempRooms.filter(room => room.type === type);
        }
        //Filter by Capacity
        if(capacity !== 1){
            tempRooms=tempRooms.filter(room => room.capacity >= capacity);
        }   
        //Filter by price
        tempRooms=tempRooms.filter(room =>room.price <= price)  ;  
        //Filter by size
        tempRooms=tempRooms.filter(room => room.size >= minSize && room.size <= maxSize); 
        //Filter by breakfast   
        if(breakfast){
            tempRooms=tempRooms.filter(room => room.breakfast === true);
        } 
        //Filter by Pets
        if(pets){
            tempRooms=tempRooms.filter(room => room.pets === true);
        } 
        //Change State
            this.setState({
                sortedRooms:tempRooms
            })           
        }; 
    render(){
        return(
             <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}} >             {/* //Means destructure everthing we have in the state  */} 
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}
 export const withRoomConsumer=(Component)=>{
    return function ConsumerWrapper(props){
       return <RoomConsumer>
        {value=><Component {...props } context={value} 
        ></Component>
        }          
        </RoomConsumer>
    }
}
const RoomConsumer=RoomContext.Consumer;
export {RoomConsumer,RoomProvider,RoomContext};

