import React from 'react';
import '../../css/Main.css';
import SideNav from '../../components/SideNav/SideNav';
import BlogsGrid from '../../components/BlogsGrid/BlogsGrid';

const Home = () => {
    return (
        <section className='wrapper'>
            <SideNav></SideNav>
            <BlogsGrid></BlogsGrid>
        </section>
    );
};

export default Home;