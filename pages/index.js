// import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM9hUg7cC4iBVD-y5i-DgY5ulIDALSdfjUTizXC1MlkwyZiUBUxbpwmCkTvfmNkI8i9w&usqp=CAU",
    address: "Some address 10, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM9hUg7cC4iBVD-y5i-DgY5ulIDALSdfjUTizXC1MlkwyZiUBUxbpwmCkTvfmNkI8i9w&usqp=CAU",
    address: "Some address 50, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  //   const client = await MongoClient.connect(
  //     "mongodb+srv://damilola94:damilola94@cluster0.ncmszgu.mongodb.net/meetup?retryWrites=true&w=majority"
  //   );

  //   const db = client.db();

  //   const meetupCollection = db.collection("meetup");

  //   const meetups = await meetupCollection.find().toArray();

  //   client.close();

  return {
    props: {
      meetups: DUMMY_MEETUPS,
      //m   eetups: meetups.map((meetup) => ({
      //     title: meetup.title,
      //     address: meetup.address,
      //     image: meetup.image,
      //     id: meetup._id.toString(),
      //   })),
    },
    revalidate: 1,
  };
}

export default HomePage;
