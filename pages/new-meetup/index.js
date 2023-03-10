import { Fragment } from "react";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>

      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
