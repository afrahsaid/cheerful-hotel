import React,{Component} from 'react';
import defaultBCG from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import Room from '../components/Room';
import StyledHero from "../components/StyledHero";
import { useContext } from 'react';
import { useParams } from "react-router-dom";

const SingleRoom =()=>{
    const context=useContext(RoomContext);
        const {getRoom}=context;
        let { slug } = useParams(); 
        console.log(slug);
        let room=getRoom(slug);
        if(!room){
            return <div className='error'> 
                <h3>No Such room could be found ...</h3>
                <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
            </div>
        }
        const {name,pets,price,size,breakfast,capacity,extras,images,description,type}=room;
        const [mainImg,...defaultImg]=images;

        return(
            <> 
                <StyledHero img={mainImg || defaultBCG} >
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className='btn-primary'>Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                    {defaultImg.map((item,index)=>{ 
                        return <img key={index} src={item}></img>
                    })}
                    </div>
                
                </section>         
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                   <p> {description}</p>
                    </article>
                    <article className='info'>
                        <h3>Info</h3>
                        <h6>Price: ${price} </h6>
                        <h6>size {size} SQFT</h6>
                        <h6>Max capacity: {capacity>1? `${capacity} people`:` ${capacity} person`} </h6>
                        <h6>{pets? "Pets Allowed" : "No Pets Allowed"}</h6>
                        <h6>{breakfast && "Free breakfast included"}</h6>
                    </article>
                </div>
                <article className='room-extras'>
                        <h3>Extras</h3>
                        <ul className='extras'>
                        {extras.map((item,index)=>{
                            return <ol key={index}>- {item}</ol>
                        })}
                        </ul>
                    </article>
                </>             
        )
    }
    export default SingleRoom;
 

