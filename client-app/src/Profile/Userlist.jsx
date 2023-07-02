import { useState } from "react";
import EachUser from "./EachUser";
import download from "../assets/download-white.svg";
import approve from "../assets/approve.svg";
import ban from "../assets/ban.svg";

const Userlist = () => {
  const [current, setCurrent] = useState(true);

  return (
    <div className="w-full p-6 bg-transparent">
      <div className="bg-white/10 bg-blur-lg rounded-md text-white relative w-full h-full flex flex-col">
        <div className="list-nav flex flex-row border-b border-spacing-1 backdrop-blur-lg border-white/20 gap-2 p-2 justify-center items-center">
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
            <img src={download} alt="" />
          </div>

          {current && (
            <div
              className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md"
              onClick={() => {
                setCurrent(false);
              }}
            >
              <img src={ban} alt="" />
            </div>
          )}
          {!current && (
            <div
              className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md"
              onClick={() => {
                setCurrent(true);
              }}
            >
              <img src={approve} alt="" />
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
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
            <EachUser
              fname="kjrhguigufiogjgrhtrhtrrthrthtrh"
              lname="sarkar"
              roll="12345678911"
              year="3rd"
              stream="CSE"
              email="abc@gmail.com"
              phno="1234567891"
              deleted="false"
            />
          </div>
        )}
        {!current && (
          <div className="flex flex-col gap-3 p-4 pt-2">
            <EachUser
              fname="Tanmoy"
              lname="chowdhury"
              roll="84653653652"
              year="3rd"
              stream="CSE"
              email="chowdhury@gmail.com"
              phno="4347634741"
              deleted="true"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Userlist;
