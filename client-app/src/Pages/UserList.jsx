import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import SubNavButton from "../Components/SubNavButton";
import EachUser from "../Components/EachUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const UserList = () => {
  const [token, setToken] = useState("");
  const [type, setType] = useState("");
  const [currentList, setCurrentList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [current, setCurrent] = useState(true);
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchCurrentData = (token, setCurrentList) => {
    fetch(`${apiUrl}/all_user/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("Error fetching current userlist!");
        }
      })
      .then((data) => {
        setCurrentList(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const fetchDeleteData = (token) => {
    fetch(`${apiUrl}/view_deleted_user/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("Error fetching deleted userlist!");
        }
      })
      .then((data) => {
        setDeleteList(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const fetchType = (token) => {
    fetch(`${apiUrl}/user_type/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("Error receiving user type");
        }
      })
      .then((data) => {
        if ("error" in data) setType("logged-out");
        else setType(data.user);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const deleteUser = (token, roll) => {
    fetch(`${apiUrl}/delete_user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
      body: JSON.stringify({ roll: roll }),
    })
      .then((response) => response.json())
      .then((data) => {
        if ("error" in data) toast.error(data.error);
        else toast.success(data.successful);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    setToken(cookies.token);
  });

  useEffect(() => {
    if (token === "") return;
    fetchType(token);
  }, [token]);

  useEffect(() => {
    if (type === "") return;
    if (type !== "admin") navigate("/404_DATA_NOT_FOUND");
    else {
      fetchCurrentData(token, setCurrentList);
    }
  }, [type]);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <Link to="/adminprofile/details" className="button">
            <SubNavButton buttonType="details" />
          </Link>
          <SubNavButton class="active-button" buttonType="participants" />
        </div>

        {/* details */}
        <div className="w-full p-6 bg-transparent">
          <div className="bg-sky-500/10 backdrop-blur-sm rounded-md text-white relative w-full h-full flex flex-col">
            <div className="list-nav flex flex-row border-b border-spacing-1 border-white/20 gap-2 p-2 justify-center items-center">
              {current && (
                <div className="p-1 uppercase w-full text-left font-bold tracking-widest border-r border-white/20 border-spacing-1 text-green-400">
                  current
                </div>
              )}
              {!current && (
                <div className="p-1 uppercase w-full text-left font-bold tracking-widest border-r border-white/20 border-spacing-1 text-red-600">
                  deleted
                </div>
              )}

              <div className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md">
                <img src="/Icons/download.svg" alt="" />
              </div>

              {current && (
                <div
                  className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md"
                  onClick={() => {
                    setCurrent(false);
                    fetchDeleteData(token);
                    setCurrentList({});
                  }}
                >
                  <img src="/Icons/ban.svg" alt="" />
                </div>
              )}
              {!current && (
                <div
                  className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md"
                  onClick={() => {
                    setCurrent(true);
                    fetchCurrentData(token, setCurrentList);
                    setDeleteList({});
                  }}
                >
                  <img src="/Icons/approve.svg" alt="" />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 m-2 mt-0 p-2 border-b border-spacing-1 border-white/20">
              <div className="w-full bg-blue-600/10 p-1 rounded-md">
                <div className="group flex flex-row gap-3">
                  <div className="text-sm w-1/2 sm:w-1/3 text-left tracking-widest p-1 uppercase font-bold whitespace-nowrap">
                    Roll Number
                  </div>
                  <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
                    First Name
                  </div>
                  <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
                    Last Name
                  </div>
                </div>
              </div>
            </div>

            {current && (
              <div className="flex flex-col gap-3 p-4 pt-2">
                {currentList.length > 0 ? (
                  <>
                    {currentList.map((item, i) => (
                      <EachUser
                        key={i}
                        fname={item.fname}
                        lname={item.lname}
                        roll={item.roll}
                        year={item.year}
                        stream={item.stream}
                        email={item.email}
                        phno={item.mobile}
                        deleted="false"
                        deleteUser={deleteUser}
                        setCurrentList={setCurrentList}
                        fetchCurrentData={fetchCurrentData}
                        token={token}
                      />
                    ))}
                  </>
                ) : (
                  <div className="font-bold text-white">Loading...</div>
                )}
              </div>
            )}
            {!current && (
              <div className="flex flex-col gap-3 p-4 pt-2">
                {deleteList.length > 0 ? (
                  <>
                    {deleteList.map((item, i) => (
                      <EachUser
                        key={i}
                        fname={item.fname}
                        lname={item.lname}
                        roll={item.roll}
                        year={item.year}
                        stream={item.stream}
                        email={item.email}
                        phno={item.mobile}
                        deleted="true"
                      />
                    ))}
                  </>
                ) : (
                  <div className="font-bold text-white">Loading...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default UserList;
