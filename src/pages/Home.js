import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onKeyUp={handleInputEnter}
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <span onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </span>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ❤️ by &nbsp;
          <a
            href="https://sayanmunshi.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sayan Munshi
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
