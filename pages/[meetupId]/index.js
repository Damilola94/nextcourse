// import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  //   const client = await MongoClient.connect(
  //     "mongodb+srv://damilola94:damilola94@cluster0.ncmszgu.mongodb.net/meetup?retryWrites=true&w=majority"
  //   );

  //   const db = client.db();

  //   const meetupCollection = db.collection("meetup");

  //   const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  //   client.close();

  return {
    fallback: "blocking",
    paths:
      // meetups.map((meetup) => ({
      //   params: {
      //     meetupId: meetup._id.toString(),
      //   },
      // })),

      [
        {
          params: {
            meetupId: "m1",
          },
        },
        {
          params: {
            meetupId: "m2",
          },
        },
      ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  //   const client = await MongoClient.connect(
  //     "mongodb+srv://damilola94:damilola94@cluster0.ncmszgu.mongodb.net/meetup?retryWrites=true&w=majority"
  //   );

  //   const db = client.db();

  //   const meetupCollection = db.collection("meetup");

  //   const selectedMeetup = await meetupCollection.findOne({
  //     _id: ObjectId(meetupId),
  //   });

  //   client.close();

  //   console.log(meetupId);

  return {
    props: {
      //   meetupData: {
      //     id: selectedMeetup._id,
      //     title: selectedMeetup.title,
      //     address: selectedMeetup.address,
      //     image: selectedMeetup.image,
      //     description: selectedMeetup.description,
      //   },
      meetupData: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM9hUg7cC4iBVD-y5i-DgY5ulIDALSdfjUTizXC1MlkwyZiUBUxbpwmCkTvfmNkI8i9w&usqp=CAU",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup descriptiom",
      },
    },
  };
}

export default MeetupDetails;
