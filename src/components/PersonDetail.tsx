import React from "react";

interface PersonDetailProps {
  isVisible: boolean;
  name: string;
  position: string;
  photo: string;
  members?: {
    id: number;
    name: string;
    nickname?: string;
    photo: string;
    position: string;
  }[];
  onMemberClick: (member: {
    id: number;
    name: string;
    nickname?: string;
    photo: string;
    position: string;
  }) => void;
}

const PersonDetail: React.FC<PersonDetailProps> = ({
  isVisible,
  name,
  position,
  photo,
  members,
  onMemberClick,
}) => {
  return (
    isVisible && (
      <div className="flex flex-col items-center border p-5 rounded-lg shadow-lg w-1/2">
        <div className="flex flex-col justify-between w-full">
          {members && (
            <div className="text-xs text-gray-400 mb-4 -mt-2">
              <h4 className="font-semibold">Staffs:</h4>
              <div className="flex">
                {members.map((member, index) => (
                  <React.Fragment key={member.id}>
                    <button
                      onClick={() => onMemberClick(member)} // Call handler when clicked
                      className="text-gray-400 hover:text-blue-700"
                    >
                      {member.nickname || member.name}
                    </button>
                    {index < members.length - 1 && ( // Avoid divider after the last member
                      <span className="mx-1">|</span> // Divider between staff names
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <img
            src={photo}
            alt={name}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{position}</div>
        </div>
      </div>
    )
  );
};

export default PersonDetail;
