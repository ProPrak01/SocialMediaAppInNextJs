import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import Layout from "../components/Layout/index";
import axios from "axios";
import PeopleComp from "../components/PeopleComp";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [state] = useContext(UserContext);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (state && state.token) {
      // If the user is logged in, redirect to the dashboard
      window.location.href = "/user/dashboard";
    } else {
      // If the user is not logged in, fetch suggested people
      fetchSuggestedPeople();
    }
  }, [state]);

  const fetchSuggestedPeople = async () => {
    try {
      const { data } = await axios.get("/find-people");
      setPeople(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className={`col-md-8 ${styles.homeContent}`}>
            <h1>Welcome to My Social Media App</h1>
            {/* Add any additional content or components here */}
          </div>
          <div className="col-md-4">
            <PeopleComp people={people} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
