import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SortTicket from './SortTicket';

const TicketNavBar = props => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=> {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
            });
        };
    });
    return (
        <nav className = 'ticket-navbar'>
            <SortTicket onSetSortBy = { props.onSetSortBy }/>
            <Link className = 'navbar-add-ticket-link' to = { process.env.PUBLIC_URL + '/ticket/edit' }>
                { width > 750 ? 'New Ticket' : <i className='fas fa-plus'></i> }
            </Link>
        </nav>
    );
};

export default TicketNavBar;