import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from "./EventList";
import EventListAttendee from "./EventListAttendee";

const EventDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventListAttendee />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;