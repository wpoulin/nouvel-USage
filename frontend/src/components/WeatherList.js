import React from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";

const WeatherList = props => {
  return (
    <div className="weather-list">
      {/*
        README! Since in the reducer I insert a new city at the first position
        of the `data` array, I cannot use the index as the `key`. Also, since
        a user could potentially search the same city twice (or more), the `key`
        I am using here might not be unique (it's a warning, not an error).
      */}
      {props.data.map(d => {
        return <Weather city={d.city} list={d.list} key={d.city.id} />;
      })}
    </div>
  );
};

WeatherList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.object.isRequired,
      list: PropTypes.array.isRequired
    })
  ).isRequired
};

export default WeatherList;
