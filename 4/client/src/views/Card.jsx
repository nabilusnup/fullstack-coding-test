import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import img from "../assets/3.png"

function CardPage() {
  const [DataList, setDataList] = useState([]);
  const fetchData = async () => {
    try {
      let { data } = await axios({
        url: `http://localhost:3000/tree`,
        method: "get",
      });
      setDataList(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.message}`,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="container row row-cols-2 row-cols-md-4 g-4 mt-5" style={{"marginTop": "50px"}}>
          {DataList.map((item) => {
            return (
              <div className="col mb-4 mt-5">
                <div className="card h-100">
                  <img
                    src={img}
                    alt=""
                    className="card-img-top"
                    style={{ height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">My Project 1</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardPage;
