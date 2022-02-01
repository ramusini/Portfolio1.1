import React from "react";
import { FiUser } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiList } from "react-icons/fi";

export default function Buttons() {
  return (
    <div className="btn">
      <button>
        <FiUser />
        Profile
      </button>
      <button>
        <FiStar />
        Hobby
      </button>
      <button>
        <FiList />
        Works
      </button>
    </div>
  );
}
