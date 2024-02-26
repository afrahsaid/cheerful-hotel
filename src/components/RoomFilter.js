import React from "react";
import { RoomContext } from "../Context";
import { useContext } from "react";
import Title from "./Title";

const RoomFilter=({rooms})=>{
    const context=useContext(RoomContext);
    const {type,
    handleChange,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets}=context;
    const getUnique=(items,value)=>{
        let types=  [...new Set(items.map(item=>item[value]))]; 
        return types;
    }
    //get unique types
    let types=getUnique(rooms,"type"); 
    types=["all",...types];
    let capacities=getUnique(rooms,"capacity");
    return (
        <section className="filter-container">
            <Title title={"Search rooms"}></Title>
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group"> 
                <label htmlFor="type">room type </label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types.map((item,index)=>{
                        return <option value={item} key={index}>{item}</option>
                    })}
                     </select>
                </div>

                {/* End Select type */}
                {/* Guest  */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Guests
                    </label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {capacities.map((item, index)=>{
                            return <option value={item} key={index}>{item}</option>
                        })}
                    </select>
                </div>

                {/* End Guest */}
                {/* Price */}
                <div className="form-group">
                     <label htmlFor="price">
                        Room Price ${price}
                    </label>
                    <input type="range" name="price" value={price} id="price" min={minPrice} max={maxPrice} onChange={handleChange} className="form-control">     
                    </input>
                </div>
                {/* End of Price */}
                {/* size */}
                <div className="from-group">
                    <label htmlFor="size">
                        Size
                    </label>
                    <div className=" form-control size-inputs"> 
                        <input name="minSize" id="size" type="number" value={minSize} onChange={handleChange} className="size-input" ></input>
                        <input name="maxSize" id="size" type="number" value={maxSize} onChange={handleChange} className="size-input"></input>
                    </div>
                </div>
                {/* End of size */}
                {/* Extras */}
                        <div className="form-group">
                            <div className="single-extra"> 
                                <input id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange} type="checkbox"></input>
                                <label htmlFor="breakfast">breakfast</label>
                            </div>
                            <div className="single-extra">
                                <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} ></input>
                                <label htmlFor="pets">Pets</label>
                            </div>
                        </div>
                {/* End of extras */}   
            </form>
        </section>
    )
}
export default RoomFilter;