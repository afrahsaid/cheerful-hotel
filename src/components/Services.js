import React, { Component } from "react";
import Title from "./Title";
import {FaShuttleVan,FaSwimmingPool,FaHiking,FaCocktail} from 'react-icons/fa';

export default class Services extends Component{
     state={
        services:[
            {
        icon:<FaCocktail></FaCocktail>,
        title:"Free cocktail",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },{
        icon:<FaSwimmingPool></FaSwimmingPool>,
        title:"Swimming Pool",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },{
        icon:<FaHiking></FaHiking>,
        title:"Endless Hiking",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },{
        icon:<FaShuttleVan></FaShuttleVan>,
        title:"Free Suttle",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        ]};
        render(){
    return(
        <section className="services">
            <Title title="services"></Title>
            <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}               
            </div>    
        </section>    
        
    )
                }
}
